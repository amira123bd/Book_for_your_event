import React from "react";
import { animation } from "../Buttons/Button";

interface ButtonsProps {
  last?: boolean;
  first?: boolean;
  firstButtonContent: string;
  lastButtonContent?: string;
  backFunction?: () => void;
  nextFunction?: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({
  last = false,
  first = false,
  firstButtonContent = "Next",
  lastButtonContent = "Back",
  backFunction,
  nextFunction,
}) => {
  return (
    <div className="flex flex-row  w-full space-x-12  max-w-xl pt-24">
      {!last && (
        <button
          type="submit"
          className={`${animation}  w-56   sm:w-60 h-24 flex flex-row justify-center items-center bg-brand text-white text-3xl font-light `}
        >
          {firstButtonContent}
        </button>
      )}
      {!first && (
        <button
          onClick={backFunction}
          className={`${animation}  w-56 sm:w-60 h-24 flex flex-row justify-center items-center bg-black text-white text-3xl font-light `}
        >
          {lastButtonContent}
        </button>
      )}
    </div>
  );
};
export default Buttons;
