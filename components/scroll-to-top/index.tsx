import React from "react";
import IconArrowUp from "../icons/arrow-up";

const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-400 bg-[rgba(255_255_255_0.0001)] fixed z-50 right-20 top-1/2 translate-y-[-50%]" onClick={scrollToTop}>
      <IconArrowUp />
    </button>
  );
};

export default ScrollToTop;
