import React from "react";
import Chart from "../chart";

const BodyRecord = () => {
  const buttons = ["日", "週", "月", "年"];
  return (
    <div className="bg-dark-600 py-4 pl-6">
      <div className="flex items-center mb-1">
        <h3 className="max-w-[96px] font-inter text-[15px] text-light uppercase">
          my exercise
        </h3>
        <p className="font-inter text-[22px] text-light">2021.05.21</p>
      </div>
      <div className="">
        <Chart />
      </div>
      <div className="mt-4 flex items-center gap-4">
        {buttons.map((button) => (
          <button
            className="text-primary-300 font-light text-[15px] bg-white rounded-[11px] w-[56px] h-[24px] flex items-center justify-center"
            key={button}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecord;
