import { motion } from "framer-motion";
import { useContext } from "react";
import { sectionAnimation } from "../../utils/Constants";
import { FunctionalButton } from "../Buttons/Button";
import SelectOptions from "../SelectOptions";
import BookingContext from "./BookingContext";
interface SecondViewProps {}

const BookingSecondView: React.FC<SecondViewProps> = ({}) => {
  const { nextView, selectedTransport, setUserTransport,submit } =
    useContext(BookingContext);

  return (
    <motion.div layoutId="view" {...sectionAnimation} className="h-full w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl">Will you join us on the bus ? </h2>
        <div className="h-12" />
        <div className="flex flex-row space-x-24">
          <div className="space-x-8 flex flex-row items-center">
            <SelectOptions
              currentValue={selectedTransport}
              values={["true", "false"]}
              setGlobalState={setUserTransport}
            />
          </div>
        </div>
        <div className="h-28 " />
        <p className="text-inherit text-2xl font-medium">
          This will add additional fees !
        </p>
        <div className="h-24" />
        <FunctionalButton onClick={submit} variant="primary">
          Confirm plan
        </FunctionalButton>
      </div>
    </motion.div>
  );
};

export default BookingSecondView;
