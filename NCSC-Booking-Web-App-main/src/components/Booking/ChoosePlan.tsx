import { motion } from "framer-motion";
import { useContext } from "react";
import { FunctionalButton } from "../Buttons/Button";
import BookingContext from "./BookingContext";
import PlanCard from "./PlanCard";

const BookingFirstView = () => {
  const { user, selectPlan, selectedPlan, submit, availableRooms } =
    useContext(BookingContext);

    console.log(availableRooms.data);
  return (
    <>
      <h3 className="text-3xl font-medium">All plans are full pension</h3>

      <motion.div
        layoutId="view"
        className="flex flex-col lg:flex-row justify-around  h-full w-full px-12 items-center pb-12 "
      >
        {availableRooms.data.rest_persons > 0 ? (
          <>
            {availableRooms.data.rest_persons >= 1 && (
              <PlanCard
                id={1}
                selectedPlan={selectedPlan}
                planName="Individual Room"
                price={220}
                select={selectPlan}
              />
            )}
            {availableRooms.data.rest_persons >= 2 && (
              <PlanCard
                select={selectPlan}
                id={2}
                planName="Two person room"
                selectedPlan={selectedPlan}
                price={170}
              />
            )}
            {availableRooms.data.rest_triple_rooms > 0 && (
              <PlanCard
                select={selectPlan}
                id={3}
                planName="Three person room"
                selectedPlan={selectedPlan}
                price={220}
              />
            )}
          </>
        ) : (
          <h1 className="text-3xl font-medium">
            Sold out for now, we might add more rooms later !
          </h1>
        )}
      </motion.div>
      <div className="h-12" />
      <div className="pb-12 h-[300px] flex flex-col items-center">
        {selectedPlan !== user.roomMates.length + 1 && (
          <p className="text-2xl font-bold text-red-600 max-w-2/3 text-center">
            Please you need suitable number of roommates to choose this plan
          </p>
        )}
        {selectedPlan && (
          <FunctionalButton
            onClick={submit}
            variant="primary"
            disabled={selectedPlan !== user.roomMates.length + 1}
          >
            Choose
          </FunctionalButton>
        )}
        <div className="h-12" />
      </div>
    </>
  );
};

export default BookingFirstView;
