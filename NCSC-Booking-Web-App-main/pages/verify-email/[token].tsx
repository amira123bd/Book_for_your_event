import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Layout } from "../../src/components/ColoredLayout";
import Footer from "../../src/components/Footer";
import Img from "next/image";
import { FormMovingText } from "../signup";
import { useRouter } from "next/router";
import useVerifyEmail from "../../src/hooks/verifyEmail";
import { verify } from "crypto";
import { Growing, Spinner } from "../../src/components/Loading";

const TokenPage: React.FC<any> = ({}) => {
  const router = useRouter();
  const verifyEmail = useVerifyEmail();

  useEffect(() => {
    if (router.isReady) {
      if (
        router.query.token &&
        router.query.token !== "" &&
        typeof router.query.token === "string"
      ) {
        verifyEmail.mutate(router.query.token);
      } else {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (verifyEmail.isError) setTimeout(() => router.push("/"), 10000);
  }, []);

  return (
    <Layout>
      <div className="w-full flex flex-row items-center justify-start lg:mb-12 ">
        {/*  */}
        <FormMovingText />
        <div className="pb-12 px-4 md:px-12 space-y-24 w-full  pt-12 mt-0 lg:space-y-5  items-center   lg:shadow-2xl lg:relative lg:pb-12 lg:mt-5 lg:px-36 flex flex-col md:flex-row lg:w-4/6 justify-center  lg:bg-white overflow-hidden md:items-start md:justify-start shadow-md shadow-red-200 sm:h-[85vh] lg:min-h-[80vh] min-h-[400px]">
          <div className="z-1 absolute left-0 right-0 top-0 bottom-0 pointer-events-none ">
            <Img
              src="/assets/globeOverlay.png"
              layout="responsive"
              width={414}
              height={673}
              alt="overlay"
            />
          </div>
          <motion.div className="flex flex-col items-center  w-full h-full py-2 mt-0  ">
            {(!router.isReady && verifyEmail.isLoading) ||
              (verifyEmail.isIdle && (
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <h1 className="text-3xl mb-12">Please wait ...</h1>
                  <Spinner />
                </div>
              ))}
            {verifyEmail.isError && (
              <motion.div className="flex flex-col align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-40 w-40 text-brand mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="h-12" />
                <h1 className="text-3xl text-bold">
                  The token that your provided is invalid please retry again
                </h1>
              </motion.div>
            )}
            {verifyEmail.isSuccess && (
              <>
                <motion.div className="flex flex-col justify-center items-center w-full ">
                  <Img src="/assets/logo_big.png" width={312} height={321} />
                </motion.div>
                <motion.div className="flex flex-col w-full px-12 justify-center py-6 lg:py-8  ">
                  <h1 className="w-full text-center text-4xl lg:text-4xl lg:font-normal text-black font-bold">
                    Your email was successfully verified
                  </h1>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default TokenPage;
