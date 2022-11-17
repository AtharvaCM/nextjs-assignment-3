import React from "react";

type CarFeaturesListType = {
  kms: string;
  engineInfo: string;
  powerOutput: string;
  fuel: string;
  driveType: string;
  warranty: string;
};

const CarFeaturesList: React.FC<CarFeaturesListType> = ({
  kms,
  engineInfo,
  powerOutput,
  fuel,
  driveType,
  warranty,
}) => {
  return (
    <>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/OdometerIcon"
          alt=""
          className="mr-3 w-7"
        />
        {kms}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EngineIcon"
          alt=""
          className="mr-3 w-8"
        />
        {engineInfo}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/EnginePowerIcon"
          alt=""
          className="mr-3 w-8"
        />
        {powerOutput}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/FuelIcon"
          alt=""
          className="mr-3 w-8"
        />
        {fuel}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/DrivetrainIcon"
          alt=""
          className="mr-3 w-8"
        />
        {driveType}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/TransmissionIcon"
          alt=""
          className="mr-3 w-8"
        />
        NA
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/WarrantyIcon"
          alt=""
          className="mr-3 w-8"
        />
        {warranty}
      </div>
      <div className="flex items-center">
        <img
          src="https://images.drive.com.au/driveau/image/upload/c_scale,dpr_2.0,f_auto,q_auto:best,w_24/cms/theme/icons/AncapSafetyIcon"
          alt=""
          className="mr-3 w-8"
        />
        NA
      </div>
    </>
  );
};

export default CarFeaturesList;
