/* eslint-disable no-undef */
import {
  CarFeatureDetailsType,
  CarFeaturesType,
  DimensionsPropsType,
  TransmissionType,
} from "@/types/index";
import { render, screen } from "@testing-library/react";

import Car from ".";

const IMAGES: { image_location: string; __typename: string }[] = [
  {
    image_location:
      "https://res.cloudinary.com/drive-mustang/vehicles/used/dDOav59RQIqnL2iu3sOo",
    __typename: "DealerListingImage",
  },
  {
    image_location:
      "https://res.cloudinary.com/drive-mustang/vehicles/used/aIhwMGmaQfWMqg3OI94S",
    __typename: "DealerListingImage",
  },
];

const FEATURES: CarFeaturesType = {
  driveType: "4XD",
  engineInfo: "2.8i, 4 cyl.",
  fuel: "Diesel (80)",
  kms: "46850 KMs",
  powerOutput: "130kW, 450Nm",
  warranty: "5 Yr, -1KMs",
};

const FEATURE_DETAILS: CarFeatureDetailsType = {
  color: "White",
  make: "Toyota",
  mfModelCode: "GUN156R-STTLHQ",
  model: "Fortuner",
  modelYear: 2019,
  odometer: "46850",
  reg: "GUN156R",
  stock: "-",
  variant: "GUN156R-STTLHQ 2.8 4XD Automatic",
  vin: "-",
  year: 2012,
};

const TRANSMISSION: TransmissionType = {
  driveType: "4XD",
  gearLocation: "Floor",
  gears: 6,
  transmissionType: "Automatic",
};

const DIMENSIONS: DimensionsPropsType = {
  frontTyres: "265/65 R17",
  frontWheels: "17x7.5",
  grossCombinationMass: "-",
  grossVehicleMass: "2750",
  height: "1835",
  kerbWeight: "2120",
  length: "4795",
  rearTyres: "265/65 R17",
  rearWheels: "17x7.5",
  tareMass: "-",
  wheelBase: "-",
  width: "1855",
};

describe("Car", () => {
  it("Renders a Car component with car image", () => {
    render(
      <Car
        images={IMAGES}
        features={FEATURES}
        featureDetails={FEATURE_DETAILS}
        transmission={TRANSMISSION}
        dimensions={DIMENSIONS}
      />
    );

    const carImages = screen.getAllByRole("img");

    // Image test
    expect(carImages[0]).toHaveAttribute("src", IMAGES[0].image_location);
  });
});
