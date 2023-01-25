import { motion } from "framer-motion";
import React from "react";

interface ErrorViewProps {
  errorMessage: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ errorMessage }) => {
  return (
    <motion.div className="w-full h-full items-center  flex flex-col min-h-[400px] justify-start ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-40 w-40 text-brand mx-auto "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="h-12" />
      <h1 className="text-3xl text-bold">{errorMessage}</h1>
    </motion.div>
  );
};
export default ErrorView;
