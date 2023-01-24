import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import AuthenticatedRoute from "../src/components/AuthenticatedRoute";
import { AuthenticationContext } from "../src/components/AuthenticatingContext";
import BookingInformations from "../src/components/Booking/BookingInformations";
import LoadingState from "../src/components/Booking/LoadingState";
import ViewContent from "../src/components/Booking/BookingPageContent";
import UserPageLayout from "../src/components/UserPageLayout";
import useBookPlace from "../src/hooks/bookPlace";
import useLoadUserBooking from "../src/hooks/loadUserBooking";
import { useSharedViewNumber } from "../src/hooks/sharedViewTransitions";
import useGetAvailableTransport from "../src/hooks/useGetAvailableTransport";
import { sectionAnimation } from "../src/utils/Constants";
import useLoadProfile from "../src/hooks/loadProfile";
import useCancelBooking from "../src/hooks/cancelBooking";

interface BookingProps {}

export const Booking: React.FC<BookingProps> = () => {
  const availableRoomsTransportQuery = useGetAvailableTransport();
  const loadUserBookingQuery = useLoadUserBooking();
  const userLoadingQuery = useLoadProfile();
  const addBooking = useBookPlace();
  const cancelBooking = useCancelBooking();

  const {
    sharedViewNumber,
    previousView,
    nextView,
    resetView,
    layoutID,
    navigateTo,
  } = useSharedViewNumber("view", 6, 1);

  useEffect(() => {
    if (availableRoomsTransportQuery.data?.rest_persons === 0)
      if (sharedViewNumber !== 4 && sharedViewNumber !== 3) {
        navigateTo(3);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableRoomsTransportQuery?.data]);
  useEffect(() => {
    if (cancelBooking.isSuccess) {
      navigateTo(1);
    }
  }, [cancelBooking.isLoading, cancelBooking.isSuccess]);

  return (
    <AuthenticatedRoute>
      <UserPageLayout sideBannerLabel="Booking">
        <>
          {userLoadingQuery.data &&
          loadUserBookingQuery.data &&
          !loadUserBookingQuery.isRefetchError ? (
            <BookingInformations
              cancelBooking={cancelBooking}
              bookingInfos={loadUserBookingQuery.data}
              userInfo={userLoadingQuery.data}
            />
          ) : (
            <>
              <motion.h1
                {...sectionAnimation}
                className="text-6xl font-bold w-full lg:text-5xl sm:pl-32 sm:mt-12 sm:mb-4 lg:mb-0 text-brand "
              >
                Choose a plan
              </motion.h1>
              <div className="h-12 " />
              {availableRoomsTransportQuery.isLoading ||
              loadUserBookingQuery.isLoading ? (
                <LoadingState />
              ) : (
                <ViewContent
                  availableRooms={availableRoomsTransportQuery}
                  addBooking={addBooking}
                  user={userLoadingQuery.data}
                  sharedViewNumber={sharedViewNumber}
                  previousView={previousView}
                  nextView={nextView}
                  layoutID={layoutID}
                  navigateTo={navigateTo}
                  resetView={resetView}
                />
              )}
            </>
          )}
        </>
      </UserPageLayout>
    </AuthenticatedRoute>
  );
};

export default Booking;
