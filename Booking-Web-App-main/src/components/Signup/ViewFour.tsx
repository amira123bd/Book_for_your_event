import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { sectionAnimation } from "../../utils/Constants";
import { FormDataSharingContext } from "../FormDataSharingContext";
import { ViewFourSchema } from "../FormSchemas";
import Input from "../Inputs/Input";
import Buttons from "./FormButtons";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import useSignup from "../../hooks/createUser";
import { Spinner } from "../Loading";
import { sign } from "crypto";

interface ViewThreeProps {
  layoutId: string;
}

const ViewFour: React.FC<ViewThreeProps> = ({ layoutId }) => {
  const { data, modifyData, nextViewFn, previousViewFn } = useContext(
    FormDataSharingContext
  );
  const useFormObject = useForm({ resolver: yupResolver(ViewFourSchema) });

  const signup = useSignup();

  const onSubmit = useFormObject.handleSubmit((formData) => {
    if (formData && modifyData && nextViewFn) {
      modifyData({
        ...data,
        password: formData.password,
      });
      if (!data) {
        router.push("/");
      } else if(data.password){
        signup.mutate(data);
      }
      else {
      modifyData({
        ...data,
        password: formData.password,
      });

      }
      
    } else {
      router.push("/");
    }
  });

  useEffect(() => {
    if (signup.isSuccess) {
      if (nextViewFn) nextViewFn();
    }
  }, [nextViewFn, signup.isSuccess]);

  const router = useRouter();
  return (
    <div className="space-y-24 lg:space-y-12 px-2 min-h-[460px] flex flex-col justify-around   lg:items-center lg:px-0">
      {signup.isLoading ? (
        <Spinner />
      ) : (
        <FormProvider {...useFormObject}>
          <motion.form
            {...sectionAnimation}
            layout
            onSubmit={onSubmit}
            layoutId={layoutId}
            className="space-y-6 lg:space-y-6 w-full max-w-xl"
          >
            <Input
              label="Password"
              registerLabel="password"
              type="password"
              autoComplete="new-password"
            />
            <Input
              label="Confirm Password"
              registerLabel="passwordConfirmation"
              type="password"
            />
            {/* <SelectInput label="University" /> */}
            <Buttons
              firstButtonContent="Finish"
              lastButtonContent="Back"
              nextFunction={nextViewFn}
              backFunction={previousViewFn}
            />
            {signup.error && (
              <p className="text-2xl text-red-600">Signup failed , your email is taken</p>
            )}
          </motion.form>
        </FormProvider>
      )}
    </div>
  );
};
export default ViewFour;
