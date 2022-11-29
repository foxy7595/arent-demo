import React from "react";

interface Props {
    icon:React.ReactNode;
    title:string;
}

const MealTime = ({icon, title}:Props) => {
  return (
    <div className="bg-[url('/Photo/clip_path.png')] w-[134px] h-[134px] flex flex-col items-center justify-center bg-center bg-no-repeat">
      {icon}
      <span className="font-inter text-xl text-light">{title}</span>
    </div>
  );
};

export default MealTime;
