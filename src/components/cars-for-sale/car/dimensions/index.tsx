import React from "react";

type DimensionsPropsType = {
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

const Dimensions: React.FC<DimensionsPropsType> = ({
  wheelBase,
  height,
  length,
  width,
  frontTyres,
  frontWheels,
  rearTyres,
  rearWheels,
  grossCombinationMass,
  grossVehicleMass,
  kerbWeight,
  tareMass,
}) => {
  return (
    <div id="dimensions-container">
      <div className="grid grid-cols-2 gap-x-6 md:grid-cols-2">
        <div className="bg-slate-100 p-5">Wheel Base</div>
        <div className="p-5 md:bg-slate-100">{wheelBase}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Height</div>
        <div className="p-5">{height}</div>

        <div className="bg-slate-100 p-5">Length</div>
        <div className="p-5 md:bg-slate-100">{length}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Width</div>
        <div className="p-5">{width}</div>

        <div className="bg-slate-100 p-5">Front Wheels</div>
        <div className="p-5 md:bg-slate-100">{frontWheels}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Front Tyres</div>
        <div className="p-5">{frontTyres}</div>

        <div className="bg-slate-100 p-5">Rear Wheels</div>
        <div className="p-5 md:bg-slate-100">{rearWheels}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Rear Tyres</div>
        <div className="p-5">{rearTyres}</div>

        <div className="bg-slate-100 p-5">Kerb Weight</div>
        <div className="p-5 md:bg-slate-100">{kerbWeight}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Tare Mass</div>
        <div className="p-5">{tareMass}</div>

        <div className="bg-slate-100 p-5">Gross Vehicle Mass</div>
        <div className="p-5 md:bg-slate-100">{grossVehicleMass}</div>

        <div className="bg-slate-100 p-5 md:bg-white">
          Gross Combination Mass
        </div>
        <div className="p-5">{grossCombinationMass}</div>
      </div>
    </div>
  );
};

export default Dimensions;
