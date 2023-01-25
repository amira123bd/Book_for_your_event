import React from "react";

interface pingingIconProps {
  content: string;
}

const pingingIcon: React.FC<pingingIconProps> = ({ content }) => {
  const svgClassName = `h-12 w-12  animate-bounce text-brand mt-12 ml-auto mx-auto `;
  if (content === "Text")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={svgClassName}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    );
  else return null;
};
export default pingingIcon;
