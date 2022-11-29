import React from "react";

interface Props {
  img: string;
  date: string;
  time: string;
  title: string;
  tag: string;
}

const MealItem = ({ img, date, time, title, tag }: Props) => {
  return (
    <div className="md:max-w-[234px]">
      <div className="w-full h-full max-h-[145px] relative mb-[5px]">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 bg-primary-300 flex items-center px-2 py-[3px] gap-x-2">
          <p className="font-inter font-normal text-[15px] text-light">
            {date}
          </p>
          <p className="font-inter font-normal text-[15px] text-light">
            {time}
          </p>
        </div>
      </div>
      <p className="font-light text-[15px] text-dark-500">{title}</p>
      <p className="font-light text-xs text-primary-400">{tag}</p>
    </div>
  );
};

export default MealItem;
