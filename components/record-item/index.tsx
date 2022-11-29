import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  buttonTitle: string;
  img: string;
}

const RecordItem = ({ title, buttonTitle, img }: Props) => {
  return (
    <div className="w-full md:w-[288px] h-[288px] bg-black border-[24px] mix-blend-luminosity border-primary-300 relative">
      <div className={`w-full h-full mix-blend-luminosity opacity-50`}>
        <Image
          src={img}
          alt={title}
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
        <p className="uppercase text-primary-300 font-inter text-[25px] text-center mb-[10px]">
          {title}
        </p>
        <button className="font-light text-sm text-light w-[160px] h-[20px] text-center block mx-auto bg-primary-400">
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default RecordItem;
