import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { View } from "../../../pages/invitations";
import { User } from "../../types.def";
import {
  parent,
  sectionAnimation,
  userRouteHeadingStyle,
} from "../../utils/Constants";
import { FunctionalButton } from "../Buttons/Button";
import AcceptRequest from "./AcceptRequestView";
import Roommate from "./Roommate";
import SendRequestView from "./SendRequestView";

interface MainViewProps {
  setView: React.Dispatch<React.SetStateAction<View>>;
  user: User;
}


export const MainView: React.FC<MainViewProps> = ({ setView, user }) => {
useEffect(() => {
  console.log(user.roomMates.length)
})
  return (
    <>
      {/* Desktop Main View */}
      <motion.div className=" hidden  lg:grid grid-cols-12 gap-8 w-full  overflow-hidden">
        <div className="flex flex-col col-start-1 col-end-6 pl-28">
          <AcceptRequest setView={setView} user={user} />
        </div>
        <div className="flex flex-col col-start-7 col-end-13">
          <SendRequestView setView={setView} user={user} />
        </div>
      </motion.div>
      {/* Mobile Main View */}
      <motion.div
        className="w-full min-h-[70vh] lg:hidden"
        layoutId="view"
        {...sectionAnimation}
      >
        <div className="flex flex-row items-center justify-between w-full max-w-screen-md px-2 py-12 ">
          <h1 className={userRouteHeadingStyle}>Roommates </h1>
          <h1 className={`${userRouteHeadingStyle} text-brand`}>
            {user.roomMates.length}/{user.booking ? user.roomMates.length : 1}
          </h1>
        </div>
        <motion.div
          className="flex flex-col justify-start px-2 w-full mt-12"
          variants={parent}
          initial="hidden"
          animate="show"
        >
          {user && user.roomMates.length !== 0 ? (
            user.roomMates.map((r: any) => (
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
            >{`You don't have any roommates `}</motion.h1>
          )}
        </motion.div>
        {!user.booking && (
          <ActionButtons
            setSendView={() => setView("Send")}
            setAcceptView={() => setView("Accept")}
          />
        )}
      </motion.div>
    </>
  );
};
const ActionButtons: React.FC<any> = ({ setSendView, setAcceptView }) => {
  return (
    <div className="space-y-4 mt-32 w-full flex flex-col items-center">
      <FunctionalButton onClick={setSendView} variant="primary">
        {" "}
        Send request
      </FunctionalButton>
      <FunctionalButton onClick={setAcceptView} variant="secondary">
        Accept Request
      </FunctionalButton>
    </div>
  );
};
