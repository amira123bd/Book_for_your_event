import { motion } from "framer-motion";
import { View } from "../../../pages/invitations";
import useGetReceivedRequests from "../../hooks/useGetReceivedRequests";
import { User, UserRequest } from "../../types.def";
import {
  parent,
  sectionAnimation,
  userRouteHeadingStyle,
} from "../../utils/Constants";
import { Spinner } from "../Loading";
import GoBackButton from "./GoBackButton";
import Request from "./Request";
import Roommate from "./Roommate";

const AcceptRequest: React.FC<{
  setView: React.Dispatch<React.SetStateAction<View>>;
  user: User;
}> = ({ setView, user }) => {
  const receivedRequestsQuery = useGetReceivedRequests();

  return (
    <>
      <motion.div
        {...sectionAnimation}
        className="py-12 w-full  lg:flex flex-col justify-center max-w-screen-lg px-12"
      >
        <GoBackButton setView={setView} />
        <div className="flex flex-row items-center justify-between w-full max-w-screen-md px-2 ">
          <h1 className={userRouteHeadingStyle}>Roommates </h1>
          {user && (
            <h1 className={`${userRouteHeadingStyle} text-brand`}>

            {user.roomMates.length}/{user.booking ? user.roomMates.length : 1}
            </h1>
          )}
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
        {!user.booking && user.roomMates.length !== 2 && (
          <motion.div {...sectionAnimation} className="mt-32">
            <h1 className={userRouteHeadingStyle}>Accept Requests</h1>
            <motion.div className="mt-12 min-h-[200px]">
              {receivedRequestsQuery.isLoading ? (
                <Spinner />
              ) : (
                <>
                  {receivedRequestsQuery.data &&
                  receivedRequestsQuery.data.length !== 0 ? (
                    receivedRequestsQuery.data.map((d: UserRequest) => (
                      <Request
                        id={d._id}
                        name={d.Sender.firstName + " " + d.Sender.lastName}
                        key={d.Sender.firstName + "-" + d.Sender.lastName}
                      />
                    ))
                  ) : (
                    <motion.div className="flex flex-col justify-center items-center">
                      <h1 className="text-3xl">
                        {`You haven't received any requests yet`}
                      </h1>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default AcceptRequest;
