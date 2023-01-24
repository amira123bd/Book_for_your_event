import React from "react";
import Img from "next/image";

interface BackgroundProps {}

export const Background: React.FC<BackgroundProps> = ({}) => {
  return (
    <div className="w-full bg-white  left-12" >
      <Img
        src="/assets/Background.svg"
        alt="Background png"
        layout="fill"
      />
    </div>
  );
};
