import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { animation } from "../src/components/Buttons/Button";
import { Layout } from "../src/components/ColoredLayout";
import Footer from "../src/components/Footer";
import Input from "../src/components/Inputs/Input";
import { Spinner } from "../src/components/Loading";
import useLogin from "../src/hooks/loginUser";
import { sectionAnimation } from "../src/utils/Constants";
import { loginSchema } from "../src/components/FormSchemas";
import NextLink from "next/link";
import OverlayBackground from "../src/components/OverlayBackground";
import LoadingPage from "../src/components/LoadingPage";
import { FormMovingText } from "./signup";
import Router, { useRouter } from "next/router";
import { AuthenticationContext } from "../src/components/AuthenticatingContext";

interface SigninFormData {
  email: string;
  password: string;
}

const Signin: React.FC<SigninFormData> = ({}) => {
  const [visible, setVisible] = useState(false);
  const useFormObject = useForm<SigninFormData>({
    resolver: yupResolver(loginSchema),
  });
  const login = useLogin();

  const { auth } = useContext(AuthenticationContext);

  const onSubmit = useFormObject.handleSubmit((data) => {
    const res = login.mutate(data);
  });
  const router = useRouter();

  useEffect(() => {
    console.log("auth here", auth);
    if (auth && auth.token) router.push("/profile");
    else if (auth === null) setVisible(true);
  }, [auth]);

  return (
    <>
      {!login.isLoading && visible ? (
        <Layout>
          {/* <div className="z-1 absolute left-0 right-0 top-0 bottom-0 pointer-events-none lg:hidden ">
        <Image
          src="/assets/globeOverlay.png"
          layout="responsive"
          width={414}
          height={673}
          alt="overlay"
        />
      </div> */}
          <div className="w-full flex flex-row items-center justify-start mb-5">
            <FormMovingText />

            <div className="px-4 md:px-12 space-y-24 w-full pt-12 lg:space-y-20   lg:w-4/6 lg:shadow-2xl lg:relative lg:pb-12 lg:mt-5 lg:px-56 flex flex-col justify-center items-center bg-white shadow-md shadow-red-300 py-12  lg:h-[70vh] lg:overflow-hidden">
              <OverlayBackground />
              {/* IMAGE OVERLAY */}
              <h1 className="text-5xl text-brand font-semibold self-start lg:text-6xl mx-[5%] lg:mx-[20%]">
                Sign in
              </h1>
              <FormProvider {...useFormObject}>
                <motion.form
                  onSubmit={onSubmit}
                  className=" px-2 justify-start max-w-screen-sm w-full flex flex-col lg:w-2/3"
                  {...sectionAnimation}
                >
                  <div className="space-y-14 lg:space-y-6  px-4">
                    <Input label="Email" registerLabel="email" />
                    <Input
                      label="Password"
                      registerLabel="password"
                      type="password"
                    />
                  </div>
                  {!login.isLoading ? (
                    <div className="w-full px-4 flex-col mt-12 lg:flex  lg:justify-center md:items-center">
                      <button
                        type="submit"
                        className={`${animation}  w-60 h-24 flex flex-row justify-center items-center bg-brand text-white text-3xl font-light    `}
                      >
                        Sign in
                      </button>
                      {login.isError && (
                        <p className="self-center py-6 text-xl text-red-800 ">
                          The Email or Password you have provided are wrong
                        </p>
                      )}
                    </div>
                  ) : (
                    <Spinner />
                  )}
                  <div className="w-full  flex flex-col   text-2xl  pt-6 lg:flex  lg:justify-around lg:items-center  lg:space-y-2">
                    <div className="flex flex-row    mr-2  w-fit ">
                      <p>{`Doesn't have an an account ?`} </p>
                      <NextLink href="signup">
                        <a className="text-brand underline hover:text-black transition-colors ml-2  ">
                          Create account
                        </a>
                      </NextLink>
                    </div>
                    <div className="flex flex-row  w-fit">
                      <p>Forget password ? </p>
                      <NextLink href="forget-password">
                        <a className="text-brand underline hover:text-black transition-colors ml-4 ">
                          Reset password
                        </a>
                      </NextLink>
                    </div>
                  </div>
                </motion.form>
              </FormProvider>
            </div>
          </div>
          <Footer lgHidden />
        </Layout>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};
export default Signin;
