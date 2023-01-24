import { motion } from "framer-motion";
import React from "react";
import { sectionAnimation } from "../../utils/Constants";

interface FunctionalButtonProps {
  onClick: (...params: any) => any;
  style?: any;
  disabled?: boolean;
  variant?: "primary" | "secondary";

  size?: number;
}
export const sharedStyles =
  " min-w-[250px] max-h-[55px] flex flex-row items-center justify-center text-2xl";
export const primary = "bg-brand text-white font-light font-xl px-4 py-12 ";
export const secondary =
  "bg-black text-white border border-black font-light font-xl px-4 py-12 min-w-[250px] max-h-[55px] flex flex-row items-center justify-center";

export const animation =
  "transition-opacity transition-transform  hover:opacity-80 hover:scale-90";

export const FunctionalButton: React.FC<FunctionalButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled=false,
  ...props
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
    >
      <motion.button
        disabled={disabled}
        {...props}
        onClick={onClick}
        className={
          (variant === "primary" ? primary : secondary) +
          animation +
          sharedStyles
        }
      >
        {children}
      </motion.button>
    </motion.div>
  );
};

interface LinkButtonProps {
  route: string;
  variant: "primary" | "secondary";
}

export const LinkButton: React.FC<LinkButtonProps> = ({}) => {
  return <a></a>;
};
