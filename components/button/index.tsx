import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button
      className="lg:w-[296px] h-[56px] block mx-auto font-light text-lg text-light rounded"
      style={{
        background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
