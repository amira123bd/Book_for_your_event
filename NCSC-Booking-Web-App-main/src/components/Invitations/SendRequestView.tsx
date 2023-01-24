import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { View } from "../../../pages/invitations";
import useSendRequest from "../../hooks/sendRequest";
import useGetSentRequests from "../../hooks/useGetSentRequest";
import { User, UserRequest } from "../../types.def";
import { parent, sectionAnimation } from "../../utils/Constants";
import { sendRequestSchema } from "../FormSchemas";
import Input from "../Inputs/Input";
import { Spinner } from "../Loading";
import GoBackButton from "./GoBackButton";
import Roommate from "./Roommate";

const SendView: React.FC<{
  setView: React.Dispatch<React.SetStateAction<View>>;
  user: User;
}> = ({ setView, user }) => {
  const sentRequestsQuery = useGetSentRequests();
  const useFormObject = useForm({ resolver: yupResolver(sendRequestSchema) });
  const sendRequest = useSendRequest();

  const onSubmit = useFormObject.handleSubmit((data) => {
    return sendRequest.mutate(data as any);
    useFormObject.reset();
  });

  if (user.booking || user.roomMates.length === 1) return null;
  return (
    <motion.div {...sectionAnimation} className="py-12 w-full px-16 h-full ">
      <GoBackButton setView={setView} />
      {/* Loading State */}
      <div id="send-request-form">
        <h1 className="lg:text-4xl text-6xl font-bold text-brand">
          Put your friend Email
        </h1>
        <div className="h-12" />
        <FormProvider {...useFormObject}>
          <form onSubmit={onSubmit} className="flex flex-col justify-start">
            <div className="max-w-xl">
              <Input registerLabel="emailReceiver" label={"Email"} />
            </div>
            <div className="h-12" />
            {sendRequest.isLoading ? (
              <Spinner />
            ) : (
              <>
                <button
                  type="submit"
                  className="px-24 py-8 bg-brand text-2xl text-white max-w-[150px] hover:scale-90 hover:opacity-90 transition-all duration-300 "
                >
                  Send
                </button>
                <div className="h-12" />
                {sendRequest.isError && (
                  <p className="text-red-600">
                    The person you are sending a request for is not available
                  </p>
                )}
              </>
            )}
          </form>
        </FormProvider>
      </div>
      <div id="sent-requests" className="mt-24">
        <div className=" mb-12">
          <h1 className="text-5xl font-bold text-brand">Sent Requests</h1>
          <h3 className="text-2xl font-semibold">
            Invite the person you are a roommate with and he should accept the
            invitation
          </h3>
        </div>
        <motion.div
          className="flex flex-col w-full min-h-[200px]"
          variants={parent}
          initial="hidden"
          animate="show"
        >
          {sentRequestsQuery.isLoading || !sentRequestsQuery.data ? (
            <Spinner />
          ) : sentRequestsQuery.data && sentRequestsQuery?.data.length !== 0 ? (
            sentRequestsQuery?.data?.map((d: UserRequest) => (
              <Roommate
                firstName={d.Receiver.firstName}
                lastName={d.Receiver.lastName}
                key={d.Receiver.firstName + "-" + d.Receiver.lastName}
              />
            ))
          ) : (
            <motion.div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl w-full text-left">{`You didn't send any requests yet`}</h1>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default SendView;
