import React from "react";

import Carousel from "@/components/UI/carousel";
import CarFeaturesList from "./features-list";

type CarFeaturesType = {
  kms: string;
  engineInfo: string;
  powerOutput: string;
  fuel: string;
  driveType: string;
  warranty: string;
};

type CarType = {
  images: [any];
  features: CarFeaturesType;
};

const Car: React.FC<CarType> = ({ images, features }) => {
  return (
    <>
      {/* Car Title Container */}
      <div id="car-details-container" className="my-10 mx-auto w-3/4"></div>
      {/* Car Details Container */}
      <div id="car-details-container" className="my-10 mx-auto w-3/4">
        {/* Images */}
        <Carousel images={images} />
        {/* Feats Icons */}
        <div className="mt-5 grid grid-cols-2 gap-6 md:grid-cols-4">
          <CarFeaturesList
            fuel={features.fuel}
            driveType={features.driveType}
            engineInfo={features.engineInfo}
            kms={features.kms}
            powerOutput={features.powerOutput}
            warranty={features.warranty}
          />
        </div>
      </div>
    </>
  );
};

export default Car;
