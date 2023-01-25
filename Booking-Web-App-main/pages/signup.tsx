import { motion } from "framer-motion";
import { default as Image } from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../src/components/AuthenticatingContext";
import { Layout } from "../src/components/ColoredLayout";
import Footer from "../src/components/Footer";
import {
  FormData,
  FormDataSharingContext,
} from "../src/components/FormDataSharingContext";
import FormProgressTracker from "../src/components/FormProgressTracker";
import LoadingPage from "../src/components/LoadingPage";
import ViewFour from "../src/components/Signup/ViewFour";
import ViewOne from "../src/components/Signup/ViewOne";
//import ViewThree from "../src/components/Signup/ViewThree";
import ViewTwo from "../src/components/Signup/ViewTwo";
import { useSharedViewNumber } from "../src/hooks/sharedViewTransitions";

interface SignupProps {}
interface FormContentProps {
  stepNumber: number;
  layoutId: string;
}

const FormContent: React.FC<FormContentProps> = ({ stepNumber, layoutId }) => {
  switch (stepNumber) {
    case 1:
      return <ViewOne layoutId={layoutId} />;
    case 2:
      return <ViewTwo layoutId={layoutId} />;
   // case 3:
     // return <ViewThree layoutId={layoutId} />;
    case 3:
      return <ViewFour layoutId={layoutId} />;
    default:
      return <ViewOne layoutId={layoutId} />;
  }
};

const Signup: React.FC<SignupProps> = () => {
  const { sharedViewNumber, previousView, nextView, layoutID } =
    useSharedViewNumber("form", 4, 1);

  const [data, setData] = useState<FormData>({});
  const router = useRouter();

  const { auth } = useContext(AuthenticationContext);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (auth && auth.token) router.push("/profile");
    else if(auth===null) setVisible(true);
  }, [auth]);
  return (
    <>
      {visible ?
        <Layout>
          {/*  */}
          <div className="w-full flex flex-row items-center justify-start lg:mb-12 h-full ">
            {/*  */}
            <FormMovingText />
            <div className="pb-12 px-4 md:px-12 space-y-24 w-full  pt-12 mt-0 lg:space-y-5  items-center   lg:shadow-2xl lg:relative lg:pb-12 lg:mt-5 lg:px-36 flex flex-col md:flex-row lg:w-4/6 justify-center  lg:bg-white overflow-hidden md:items-start md:justify-start shadow-md shadow-red-200 sm:min-h-[85vh] lg:min-h-[70vh]">
              <div className="z-1 absolute left-0 right-0 top-0 bottom-0 pointer-events-none ">
                <Image
                  src="/assets/globeOverlay.png"
                  layout="responsive"
                  width={414}
                  height={673}
                  alt="overlay"
                />
              </div>
              {sharedViewNumber <= 3 ? (
                <>
                  {" "}
                  <div className="space-y-12 md:w-2/3 md:ml-12 ">
                    <h1 className="text-5xl text-brand font-semibold">
                      {`Let's start by signing up`}
                    </h1>

                    <FormProgressTracker
                      otherStyling="md:hidden"
                      stepsNumber={3}
                      currentStep={sharedViewNumber}
                    />
                    <FormDataSharingContext.Provider
                      value={{
                        data,
                        modifyData: setData,
                        nextViewFn: nextView,
                        previousViewFn: previousView,
                      }}
                    >
                      <FormContent
                        stepNumber={sharedViewNumber}
                        layoutId={layoutID}
                      />
                    </FormDataSharingContext.Provider>
                  </div>
                  <FormProgressTracker
                    otherStyling="hidden md:flex"
                    vertical
                    stepsNumber={3}
                    currentStep={sharedViewNumber}
                  />
                </>
              ) : (
                <motion.div className="flex flex-col items-center  w-full h-full py-2 mt-0  ">
                  <motion.div className="flex flex-col justify-center items-center w-full ">
                    <Image
                      src="/assets/logo_big.png"
                      width={312}
                      height={321}
                      alt="logo ncsc"
                    />
                  </motion.div>
                  <motion.div className="flex flex-col w-full px-12 justify-center py-6 lg:py-8 ">
                    <h1 className="w-full text-center text-4xl lg:text-6xl lg:font-normal text-brand font-bold">
                      Thank you for signing up
                    </h1>
                    <div className="h-4" />
                    <h2 className="w-full text-center text-3xl font-light">
                      You will receive an email of confirmation
                    </h2>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
          <Footer lgHidden />
        </Layout> : <LoadingPage />}
    </>
  );
};


export default Signup;


export const FormMovingText = () => (
  <motion.div
    initial={{ translateY: -1000, opacity: 0, color: "black" }}
    animate={{ opacity: 1, translateY: 0, color: "#970000" }}
    transition={{ damping: 15, type: "spring" }}
  >
    <h1 className="font-display text-[150px] -rotate-90 -mr-52 text-brand hidden lg:block">
      BEBF
    </h1>
  </motion.div>
);
