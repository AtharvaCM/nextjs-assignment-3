import React from "react";

type TransmissionType = {
  driveType: string;
  gears: number;
  transmissionType: string;
  gearLocation: string;
};

const Transmission: React.FC<TransmissionType> = ({
  driveType,
  gearLocation,
  gears,
  transmissionType,
}) => {
  return (
    <div id="transmission-container">
      <div className="grid grid-cols-2 gap-x-6 md:grid-cols-2">
        <div className="bg-slate-100 p-5">Drive Type</div>
        <div className="p-5 md:bg-slate-100">{driveType}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Number of Gears</div>
        <div className="p-5">{gears}</div>

        <div className="bg-slate-100 p-5">Transmission Type</div>
        <div className="p-5 md:bg-slate-100">{transmissionType}</div>

        <div className="bg-slate-100 p-5 md:bg-white">Gear Location</div>
        <div className="p-5">{gearLocation}</div>
      </div>
    </div>
  );
};

export default Transmission;
