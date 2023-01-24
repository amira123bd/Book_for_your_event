import { motion } from "framer-motion";
import { sectionAnimation } from "../../utils/Constants";
import Spinner from "../Loading/Spinner";

const LoadingState = () => (
  <motion.div className="flex flex-col justify-center items-center h-full w-full" {...sectionAnimation}>
    <Spinner />
  </motion.div>
);

export default LoadingState;
