import { motion } from "framer-motion";
import useAcceptRequest from "../../hooks/useAcceptRequest";
import useRefuseRequest from "../../hooks/useRefuseRequest";

const Request: React.FC<{ name: string; id: string }> = ({ name, id }) => {
  const acceptRequest = useAcceptRequest();
  const refuseRequest = useRefuseRequest();
  return (
    <motion.div
      layout
      className="flex flex-row  items-center w-full space-x-4 mb-10 max-w-[450px]"
    >
      <div className="w-6 h-6 bg-blue-400 rounded-full animate-ping" />
      <div className="w-full flex flex-row items-center justify-between px-4">
        <p className="text-2xl lg:text-3xl">{name} </p>
        <div className="flex flex-row items-center space-x-4">
          <svg
            onClick={() => acceptRequest.mutate(id)}
            className="w-20 h-20 text-green-300 cursor-pointer hover:border-gray-400 rounded-lg hover:border-[1px] hover:border-solid py-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>

          <svg
            onClick={() => refuseRequest.mutate(id)}
            className="w-20 h-20 text-red-400 cursor-pointer hover:border-gray-400 hover:border-[1px] p-4 rounded-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Request;
