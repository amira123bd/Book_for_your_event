import { motion } from "framer-motion";
import React from "react";

interface PlanCardProps {
  id: 1 | 2 | 3;
  planName: string;
  price: number;
  selectedPlan: number | null;
  select: (id: number) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  price,
  planName,
  id,
  select,
  selectedPlan,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateZ: 20, scale: 0.7 }}
      animate={{ opacity: 1, rotateZ: 0, scale: 1 }}
      transition={{ type: "tween", duration: 0.5, delay: (id - 1) * 0.01 }}
    >
      <button
        onClick={() => select(id)}
        className={`shadow-brand drop-shadow-xl  flex flex-col justify-around items-center px-12 py-12 bg-white max-w-[380px] min-w-[300px] transition-all duration-500  mb-8 lg:mb-0
${id === selectedPlan ? " border border-[1] border-brand scale-125 " : ""}
      `}
      >
        <h1 className={`text-4xl font-medium text-brand `}>{planName}</h1>
        <div className="h-12" />
        <p className="text-3xl ">{price} DT</p>
      </button>
    </motion.div>
  );
};
export default PlanCard;
