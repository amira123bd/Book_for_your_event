import React from "react";
import { motion } from "framer-motion";

interface FormProgressTrackerProps {
  currentStep: number;
  stepsNumber: number;
  vertical?: boolean;
  otherStyling?: string;
}

const FormProgressTracker: React.FC<FormProgressTrackerProps> = ({
  currentStep,
  stepsNumber,
  vertical,
  otherStyling,
}) => {
  const array = new Array(stepsNumber).fill(0);


  return (
    <div
      className={`flex flex-${
        vertical ? "col" : "row"
      }  h-20 z-10 rounded-full items-center justify-between w-full md:w-fit ${otherStyling} `}
    >
      {array.map((i, index) => {
        return (
          <Step
            vertical={vertical}
            stepNumber={index + 1}
            key={index}
            last={index === array.length - 1}
            finished={index < currentStep}
          />
        );
      })}
    </div>
  );
};

interface StepProps {
  stepNumber: number;
  last?: boolean;
  finished?: boolean;
  vertical?: boolean;
}

const Step: React.FC<StepProps> = ({
  finished = false,
  stepNumber,
  last,
  vertical,
}) => {
  const bgColor = finished ? "brand" : "white";
  const color = finished ? "white" : "black";

  const seperator = vertical ? "h-32 w-2" : "w-12 lg:w-32 h-2";
  return (
    <div className={`flex flex-${vertical ? "col" : "row"} items-center `}>
      <div
        className={` border-4 w-20 h-20 rounded-full bg-${bgColor} text-${color} flex flex-row justify-center items-center text-xl transition-colors duration-300
        `}
      >
        {stepNumber}
      </div>
      {!last && (
        <div
          className={`rounded-xl  ${
            !vertical && "lg:ml-4"
          } bg-${bgColor} ${seperator}`}
        />
      )}
    </div>
  );
};

export default FormProgressTracker;
