import { motion } from "framer-motion";
import { request } from "http";
import { child } from "../../utils/Constants";

interface RoomateProps {
  firstName: string,
  lastName:string
}
const Roommate: React.FC<RoomateProps> = ({ firstName, lastName }) => {
  return (
    <motion.div
      className="flex flex-row  items-center mt-4 space-x-2"
      variants={child}
    >
      <div className="rounded-full w-6 h-6 bg-brand" />
      <p className="text-2xl font-sans font-normal lg:text-3xl">
        {firstName + " " + lastName}
      </p>
    </motion.div>
  );
};

export default Roommate;
