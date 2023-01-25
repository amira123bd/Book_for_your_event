import React from "react";

interface SpinnerProps {
  size?: string | number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 13 }) => {
  return (
    <div className="w-full justify-center flex flex-row">
    <div className={`w-16 h-16 border-4 border-brand border-solid rounded-full animate-spin border-t-transparent`}/>
</div>
  );
};
export default Spinner;
