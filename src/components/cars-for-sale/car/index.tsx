import React from "react";

import Carousel from "@/components/UI/carousel";
import CarFeaturesList from "./features-list";
import Accordion from "@/components/UI/accordion";
import KeyFeaturesAndDetails from "./key-features-details";

type CarFeaturesType = {
  kms: string;
  engineInfo: string;
  powerOutput: string;
  fuel: string;
  driveType: string;
  warranty: string;
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

type CarType = {
  images: [any];
  features: CarFeaturesType;
  featureDetails: CarFeatureDetailsType;
};

const Car: React.FC<CarType> = ({ images, features, featureDetails }) => {
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
      </div>
    </>
  );
};

export default Car;
