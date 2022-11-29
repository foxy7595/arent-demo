import React from "react";

interface Props {
  date: string;
  time: string;
  desc: string;
}

const DiaryItem = ({ date, time, desc }: Props) => {
  return (
    <li className="w-full xl:w-[231px] h-[231px] border-[2px] border-[#707070] p-4">
      <h5 className="font-inter font-normal text-lg text-dark-500 mb-0">
        {date}
      </h5>
      <p className="font-inter font-normal text-lg text-dark-500 mt-[-8px] mb-2">
        {time}
      </p>
      <p className="font-light text-xs text-dark-500">{desc}</p>
    </li>
  );
};

export default DiaryItem;
