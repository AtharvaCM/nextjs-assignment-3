import React from "react";

import {
  CarFeatureDetailsType,
  CarFeaturesType,
  DimensionsPropsType,
  TransmissionType,
} from "@/types/index";

import Accordion from "@/components/UI/accordion";
import Carousel from "@/components/UI/carousel";
import CarFeaturesList from "./features-list";
import Dimensions from "./dimensions";
import KeyFeaturesAndDetails from "./key-features-details";
import Transmission from "./transmission";

type CarType = {
  images: { image_location: string; __typename: string }[];
  features: CarFeaturesType;
  transmission: TransmissionType;
  featureDetails: CarFeatureDetailsType;
  dimensions: DimensionsPropsType;
};

const Car: React.FC<CarType> = ({
  images,
  features,
  featureDetails,
  transmission,
  dimensions,
}) => {
  return (
    <>
      {/* Car Title Container */}
      <div id="car-details-container" className="my-10 mx-auto w-3/4"></div>
      {/* Car Details Container */}
      <div id="car-details-container" className="my-10 mx-auto w-3/4">
        {/* Images */}
        <Carousel images={images} />
        {/* Feats Icons */}
        <div className="mt-5 mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          <CarFeaturesList
            fuel={features.fuel}
            driveType={features.driveType}
            engineInfo={features.engineInfo}
            kms={features.kms}
            powerOutput={features.powerOutput}
            warranty={features.warranty}
          />
        </div>
        {/* Accordian Start */}
        <hr />
        <Accordion
          title="Key Features & details"
          content={
            <KeyFeaturesAndDetails
              color={featureDetails.color}
              make={featureDetails.make}
              mfModelCode={featureDetails.mfModelCode}
              model={featureDetails.model}
              modelYear={featureDetails.modelYear}
              odometer={featureDetails.odometer}
              reg={featureDetails.reg}
              stock={featureDetails.stock}
              variant={featureDetails.variant}
              year={featureDetails.year}
              vin={featureDetails.vin}
            />
          }
        />

        <hr />
        <Accordion
          title="Transmission"
          content={
            <Transmission
              driveType={transmission.driveType}
              gearLocation={transmission.gearLocation}
              gears={transmission.gears}
              transmissionType={transmission.transmissionType}
            />
          }
        />

        <hr />
        <Accordion
          title="Dimensions"
          content={
            <Dimensions
              frontTyres={dimensions.frontTyres}
              frontWheels={dimensions.frontWheels}
              height={dimensions.height}
              width={dimensions.width}
              length={dimensions.length}
              wheelBase={dimensions.wheelBase}
              grossVehicleMass={dimensions.grossVehicleMass}
              grossCombinationMass={dimensions.grossCombinationMass}
              kerbWeight={dimensions.kerbWeight}
              rearTyres={dimensions.rearTyres}
              rearWheels={dimensions.rearWheels}
              tareMass={dimensions.tareMass}
            />
          }
        />
      </div>
    </>
  );
};

export default Car;
