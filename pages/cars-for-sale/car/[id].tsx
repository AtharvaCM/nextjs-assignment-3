import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import client from "apollo-client";
import { ParsedUrlQuery } from "querystring";

import { GET_DEALER_LISTINGS_ID_LIST } from "@/queries/get-dealer-listings";
import { GET_CAR_INFO_BY_ID } from "@/queries/get-car-info";

import Layout from "@/components/layout";
import Car from "@/components/cars-for-sale/car";

type TransmissionType = {
  driveType: string;
  gears: number;
  transmissionType: string;
  gearLocation: string;
};

type CarFeatureDetailsType = {
  color: string;
  make: string;
  mfModelCode: string;
  model: string;
  modelYear: number;
  odometer: string;
  reg: string;
  stock: string;
  variant: string;
  year: number;
  vin: string;
};

type CarPagePropsType = {
  data: {
    DealerListing: {
      __typename: string;
      id: string;
      odometer: string;
      colour: string;
      vin: string;
      DealerListingImages: [any];
      RedbookVehicle: any;
    };
  };
};

const SingleCar: React.FC<CarPagePropsType> = ({ data }) => {
  const dealerListing = data.DealerListing;
  const vehicle = data.DealerListing.RedbookVehicle;
  const kms = `${dealerListing.odometer} KMs`;
  const engineInfo = `${vehicle.engineDescription}${
    vehicle.engineConfigurationDescription === "In-line" ? "i" : ""
  }, ${dealerListing.RedbookVehicle.cylinders} cyl.`;
  const powerOutput = `${vehicle.power}kW, ${vehicle.torque}Nm`;
  const fuel = `${vehicle.vehicle_fuel_type_description} (${vehicle.vehicle_fuel_capacity})`;
  const driveType = `${vehicle.driveCode}`;
  const warranty = `${vehicle.vehicle_warranty_years} Yr, ${vehicle.vehicle_warranty_km}KMs`;
  const features = {
    kms,
    engineInfo,
    driveType,
    fuel,
    powerOutput,
    warranty,
  };
  const featureDetails: CarFeatureDetailsType = {
    color: dealerListing.colour,
    make: vehicle.RedbookMake.make,
    model: vehicle.RedbookFamily.model,
    mfModelCode: vehicle.modelCode,
    odometer: dealerListing.odometer,
    modelYear: vehicle.yearGroup,
    reg: vehicle.seriesPublic,
    stock: "NA",
    variant: `${vehicle.modelName} ${vehicle.engineDescription} ${vehicle.driveCode} ${vehicle.gearTypeDescription}`,
    vin: dealerListing.vin,
    year:
      vehicle.vehicle_series_model_year === null
        ? "-"
        : vehicle.vehicle_series_model_year,
  };
  const transmission: TransmissionType = {
    driveType,
    gearLocation: vehicle.gearLocationDescription,
    gears: vehicle.gearNum,
    transmissionType: vehicle.gearTypeDescription,
  };

  return (
    <Layout>
      <section id="car-details" className="mx-[5%]">
        <div className="mx-auto max-w-[1440px]">
          <Car
            images={dealerListing.DealerListingImages}
            features={features}
            featureDetails={featureDetails}
            transmission={transmission}
          />
        </div>
      </section>
    </Layout>
  );
};

export default SingleCar;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query(GET_DEALER_LISTINGS_ID_LIST);
  const arr: { id: string }[] = data.DealerListings.results;
  const paths = arr.map((listing) => {
    return {
      params: { id: listing.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const { data } = await client.query({
    query: GET_CAR_INFO_BY_ID.query,
    variables: {
      id: id,
    },
  });

  const props = { data };

  return { props, revalidate: 10 };
};
