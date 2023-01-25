import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  child,
  parent,
  sectionAnimation,
  userRouteHeadingStyle
} from "../../utils/Constants";
import getPlanPrice from "../../utils/getPlanPrice";
import Roommate from "../Invitations/Roommate";
import getRoomTypeString from "./getRoomTypeString";
import LoadingState from "./LoadingState";

interface BookingThirdViewProps {
  userInfo: any;
  bookingInfos: any;
  cancelBooking:any
}

const BookingInformations: React.FC<BookingThirdViewProps> = ({
  bookingInfos,
  cancelBooking,
  userInfo,
}) => {
  const infoContainerStyle =
    "flex flex-row items-center justify-between w-full ";
  const infoTextStyle = "text-3xl text-brand";

  return (
    <>
      {cancelBooking.isLoading ? (
        <LoadingState />
      ) : (
        <>
          <motion.div className="flex flex-row items-center w-full max-w-screen-lg ">
            <motion.h1
              {...sectionAnimation}
              className="text-6xl font-bold w-full lg:text-5xl sm:pl-32 sm:mt-12 sm:mb-4 lg:mb-0 text-brand  text-center"
            >
              Your Booking Informations
            </motion.h1>

            <motion.button
              onClick={() => cancelBooking.mutate()}
              className="transition-opacity  hover:opacity-80 hover:scale-90  px-12 py-6 bg-red-400 border-2 border-white text-white text-xl font-bold ring-1 ring-black"
            >
              Cancel Booking
            </motion.button>
          </motion.div>
          <div className="h-12 " />
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            className="h-full w-full  flex flex-col space-y-24 lg:space-y-24 pt-12 max-w-screen-md min-h-[500px]"
          >
            <motion.div
              className={" flex flex-col max-w-screen-md  "}
              variants={child}
              initial="hidden"
              animate="show"
            >
              <h1 className=" text-6xl  font-bold  lg:text-5xl  w-full ">
                Roommates
              </h1>
              <motion.div
                className="flex flex-col justify-start px-2 w-full mt-12"
                variants={parent}
                initial="hidden"
                animate="show"
              >
                {userInfo && userInfo.roomMates.length !== 0 ? (
                  userInfo.roomMates.map((r: any) => (
                    <Roommate
                      firstName={r.firstName}
                      lastName={r.lastName}
                      key={r.id}
                    />
                  ))
                ) : (
                  <motion.h1
                    {...sectionAnimation}
                    className="text-3xl text-zinc-600 font-light"
                  >{`You don't need any roommates `}</motion.h1>
                )}
              </motion.div>
            </motion.div>
            <motion.div
              className={infoContainerStyle}
              variants={child}
              initial="hidden"
              animate="show"
            >
              <h1 className={userRouteHeadingStyle}>Room type</h1>
              <h3 className={infoTextStyle}>
                {getRoomTypeString(bookingInfos.room)}
              </h3>
            </motion.div>
            <motion.div
              className={infoContainerStyle}
              variants={child}
              initial="hidden"
              animate="show"
            >
              <h1 className={userRouteHeadingStyle}>Participation Price</h1>
              <h3 className={infoTextStyle}>
                {getPlanPrice(bookingInfos.room)}
              </h3>
            </motion.div>
            {/* <motion.div
          className={infoContainerStyle}
          variants={child}
          initial="hidden"
          animate="show"
        >
          <h1 className={userRouteHeadingStyle}>With Transport?</h1>
          <h3 className={infoTextStyle}>{bookingInfos.transport}</h3>
        </motion.div> */}

            <motion.div
              variants={child}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center"
            >
              <h3 className="font-medium text-center text-4xl text-zinc-600 mt-2">
                Payment Deadline{" "}
                <span className="font-black text-4xl mt-2">one week</span> after
                booking has taken place or the booking will be canceled
                <br /> for more informations on the payment methods
                <br />
              </h3>
              <Link href="/faq" passHref>
                <a
                  className="hover:text-6xl text-blue-800 hover:text-blue-700 text-5xl text-center w-full mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Payment Infos
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};
export default BookingInformations;
