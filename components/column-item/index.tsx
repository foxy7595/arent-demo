import React from "react";

interface Props {
  title: string;
  content: string;
}

const ColumnItem = ({ title, content }: Props) => {
  return (
    <div className="w-full md:max-w-[200px] lg:max-w-[216px] bg-dark-600 py-4 px-2">
      <h3 className="text-center font-inter font-normal text-[22px] text-primary-300 mb-[10px] uppercase">
        {title}
      </h3>
      <div className="w-[55px] h-[1px] bg-light mx-auto mb-2"></div>
      <p className="font-light text-[18px] text-light text-center">{content}</p>
    </div>
  );
};

export default ColumnItem;
