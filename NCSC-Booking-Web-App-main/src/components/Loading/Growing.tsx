import React from "react";

interface GrowingProps {
  size?: string | number;
}

const Growing: React.FC<GrowingProps> = ({ size = 8 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`spinner-grow inline-block w-20 h-20 bg-brand rounded-full opacity-0`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Growing;
