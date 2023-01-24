import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { animation } from "../src/components/Buttons/Button";
import { Layout } from "../src/components/ColoredLayout";
import Footer from "../src/components/Footer";
import Input from "../src/components/Inputs/Input";
import { Spinner } from "../src/components/Loading";
import { sectionAnimation } from "../src/utils/Constants";
import * as yup from "yup";
import useForgetPassword from "../src/hooks/forgetPassword";

const schema = yup.object().shape({
  email: yup.string().email("Email is not valid"),
});
const ForgetPasswordPage: React.FC<any> = ({}) => {
  const useFormObject = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });
  const forgetPassword = useForgetPassword();

  const onSubmit = useFormObject.handleSubmit((data) => {
    const res = forgetPassword.mutate(data.email);
  });

  return (
    <Layout>
      <div className="w-full flex flex-row items-center justify-start mb-5">
        <motion.div
          initial={{ translateY: -1000, opacity: 0, color: "black" }}
          animate={{ opacity: 1, translateY: 0, color: "#970000" }}
          transition={{ damping: 15, type: "spring" }}
        >
          <h1 className="font-display text-[150px] -rotate-90 -mr-52 text-brand hidden lg:block">
            NCSC
          </h1>
        </motion.div>

        <div className="px-4 md:px-12 space-y-24 w-full pt-12 lg:space-y-20   lg:w-4/6 lg:shadow-2xl lg:relative lg:pb-12 lg:mt-5 lg:px-56 flex flex-col justify-center items-center bg-white shadow-md shadow-red-300 py-12  min-h-[400px] lg:min-h-[70vh]">
          <div className="z-1 absolute left-0 right-0 top-0 bottom-0 pointer-events-none ">
            <Image
              src="/assets/globeOverlay.png"
              layout="responsive"
              width={414}
              height={673}
              alt="overlay"
            />
          </div>

          {forgetPassword.isSuccess ? (
            <>
              <motion.div className="flex flex-col justify-center items-center w-full ">
                <Image
                  src="/assets/logo_big.png"
                  width={312}
                  height={321}
                  alt="NCSC Logo"
                />
              </motion.div>
              <motion.div className="flex flex-col w-full px-12 justify-center py-6 lg:py-8  ">
                <h1 className="w-full text-center text-4xl lg:text-4xl lg:font-normal text-black font-bold">
                  An email was sent to you, check your inbox
                </h1>
              </motion.div>
            </>
          ) : (
            <>
              <h1 className="text-4xl text-brand font-semibold self-start lg:text-5xl lg:ml-24">
                Forget password{" "}
              </h1>
              <FormProvider {...useFormObject}>
                <motion.form
                  onSubmit={onSubmit}
                  className=" px-2 justify-start max-w-screen-sm w-full flex flex-col lg:w-2/3"
                  {...sectionAnimation}
                >
                  <div className="space-y-14 lg:space-y-6  px-4">
                    <Input label="Email" registerLabel="email" />
                  </div>
                  {!forgetPassword.isLoading ? (
                    <div className="w-full px-4   flex flex-col mt-12 lg:justify-center lg:items-center">
                      <button
                        type="submit"
                        className={`${animation}  w-60 h-24 flex flex-row justify-center items-center bg-brand text-white text-3xl font-light    `}
                      >
                        Confirm
                      </button>
                      {forgetPassword.isError && (
                        <p className="text-2xl mt-12 text-red-500 text-center mx-auto">
                          {`The email doesn't exist `}
                        </p>
                      )}
                    </div>
                  ) : (
                    <Spinner />
                  )}
                </motion.form>
              </FormProvider>
            </>
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default ForgetPasswordPage;
