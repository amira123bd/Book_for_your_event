import React from "react";
import Image from "next/image";

interface OverlayBackgroundProps {}

const OverlayBackground: React.FC<OverlayBackgroundProps> = ({}) => {
  return (
    <div className="z-1 absolute left-0 right-0 top-0 bottom-0 pointer-events-none ">
      <Image
        src="/assets/globeOverlay.png"
        layout="responsive"
        width={414}
        height={673}
        alt="overlay"
      />
    </div>
  );
};
export default OverlayBackground;
