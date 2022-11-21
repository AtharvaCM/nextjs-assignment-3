export type CarFeaturesType = {
  kms: string;
  engineInfo: string;
  powerOutput: string;
  fuel: string;
  driveType: string;
  warranty: string;
};

export type CarFeatureDetailsType = {
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

export type TransmissionType = {
  driveType: string;
  gears: number;
  transmissionType: string;
  gearLocation: string;
};

export type DimensionsPropsType = {
  wheelBase: string;
  height: string;
  length: string;
  width: string;
  frontWheels: string;
  frontTyres: string;
  rearWheels: string;
  rearTyres: string;
  kerbWeight: string;
  tareMass: string;
  grossVehicleMass: string;
  grossCombinationMass: string;
};
