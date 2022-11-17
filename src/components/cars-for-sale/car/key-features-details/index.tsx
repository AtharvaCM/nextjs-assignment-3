import React from "react";

type KeyFeaturesAndDetailsType = {
  make: string;
  model: string;
  variant: string;
  color: string;
  mfModelCode: string;
  odometer: string;
  year: number;
  modelYear: number;
  reg: string;
  vin: string;
  stock: string;
};

const KeyFeaturesAndDetails: React.FC<KeyFeaturesAndDetailsType> = ({
  make,
  model,
  color,
  variant,
  odometer,
  mfModelCode,
  year,
  modelYear,
  reg,
  vin,
  stock,
}) => {
  return (
    <div id="key-features-details-container">
      {/* Outer Grid */}
      <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
        {/* Col 1 Inner Grid */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="bg-slate-100 p-5">Make</div>
          <div className="p-5 md:bg-slate-100">{make}</div>

          <div className="bg-slate-100 p-5 md:bg-white">Model</div>
          <div className="p-5">{model}</div>

          <div className="bg-slate-100 p-5">Variant</div>
          <div className="p-5 md:bg-slate-100">{variant}</div>

          <div className="bg-slate-100 p-5 md:bg-white">Color</div>
          <div className="p-5">{color}</div>

          <div className="bg-slate-100 p-5">Manufacturer Model Code</div>
          <div className="p-5 md:bg-slate-100">{mfModelCode}</div>

          <div className="bg-slate-100 p-5 md:bg-white">Odometer</div>
          <div className="p-5">{odometer}</div>
        </div>

        {/* Col 2 Inner Grid */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="bg-slate-100 p-5">Year</div>
          <div className="p-5 md:bg-slate-100">{year}</div>

          <div className="bg-slate-100 p-5 md:bg-white">Model Year</div>
          <div className="p-5">{modelYear}</div>

          <div className="bg-slate-100 p-5">Reg</div>
          <div className="p-5 md:bg-slate-100">{reg}</div>

          <div className="bg-slate-100 p-5 md:bg-white">VIN</div>
          <div className="p-5">{vin}</div>

          <div className="bg-slate-100 p-5">Stock</div>
          <div className="p-5 md:bg-slate-100">{stock}</div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesAndDetails;
