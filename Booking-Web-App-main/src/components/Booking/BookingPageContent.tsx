import React, { useEffect, useState } from "react";
import { UseMutationResult } from "react-query";
import { BookingBody } from "../../hooks/bookPlace";
import BookingContext from "./BookingContext";
import BookingFirstView from "./ChoosePlan";
import ErrorView from "./ErrorView";
import LoadingState from "./LoadingState";

interface ViewContentProps {
  sharedViewNumber: number;
  resetView: () => void;
  previousView: () => void;
  nextView: () => void;
  addBooking: UseMutationResult<any, unknown, BookingBody, unknown>;
  navigateTo: (view: number) => void;
  layoutID: string;
  user: any;
  availableRooms:any
}

type Plans = 1 | 2 | 3 | null;
const ViewContent: React.FC<ViewContentProps> = ({
  availableRooms,
  sharedViewNumber,
  user,
  addBooking,
  nextView,
  navigateTo,
}) => {
  // const [selectedTransport, setUserTransport] = useState<"true" | "false">(
  //   "true"
  // );
  const [selectedPlan, setSelectedPlan] = useState<Plans | null>(null);

  const selectPlan = (id: number | null) => {
    if (id === selectedPlan) {
      setSelectedPlan(null);
    } else if (id === 1 || id === 2 || id === 3) {
      setSelectedPlan(id);
    }
  };
  useEffect(() => {
    if (addBooking.isLoading && sharedViewNumber !== 3) {
      console.log('here')
      navigateTo(2);
    }
  }, [addBooking.isLoading]);

  const confirmBooking = () => {
    if (!selectedPlan) return;
    addBooking.mutate({ room: selectedPlan });
  };

  switch (sharedViewNumber) {
    case 1:
      return (
        <BookingContext.Provider
          value={{
            selectedPlan,
            selectPlan,
            availableRooms,
            user,
            confirmBooking,
            submit: confirmBooking,
          }}
        >
          <BookingFirstView />
        </BookingContext.Provider>
      );
    case 2:
      return <LoadingState />;
    case 3:
      return <ErrorView errorMessage="No available rooms" />;
    case 4:
      return (
        <ErrorView errorMessage="There are no available places in the bus" />
      );
    case 5:
      return <ErrorView errorMessage="Sorry an error has occurred" />;
    default:
      return (
        <BookingContext.Provider
          value={{ selectedPlan, user, selectPlan, submit: nextView }}
        >
          <BookingFirstView />
        </BookingContext.Provider>
      );
  }
};
export default ViewContent;
