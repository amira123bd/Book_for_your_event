import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sectionAnimation } from "../../utils/Constants";
import setFormAlreadyFilledValues from "../../utils/setFormAlreadyFilledValues";
import { FormDataSharingContext } from "../FormDataSharingContext";
import { ViewOneSchema } from "../FormSchemas";
import Input from "../Inputs/Input";
import Buttons from "./FormButtons";

interface ViewOneProps {
  layoutId: string;
}

const ViewOne: React.FC<ViewOneProps> = ({ layoutId }) => {
  const router = useRouter();
  const { data, modifyData, nextViewFn, previousViewFn } = useContext(
    FormDataSharingContext
  );

  const useFormObject = useForm({
    resolver: yupResolver(ViewOneSchema),
  });

  const onSubmit = useFormObject.handleSubmit((formData) => {
    if (formData && modifyData && nextViewFn) {
      modifyData({
        ...data,
        firstName: formData.firstName,
        lastName: formData?.lastName,
        email: formData.email,
        phone: formData.phone,
      });
      setTimeout(() => nextViewFn(), 500);
    } else {
      router.push("/");
    }
  });
  useEffect(() => {
    setFormAlreadyFilledValues(
      "firstName",
      data?.firstName,
      useFormObject.setValue
    );
    setFormAlreadyFilledValues(
      "lastName",
      data?.lastName,
      useFormObject.setValue
    );
    setFormAlreadyFilledValues("email", data?.email, useFormObject.setValue);
    setFormAlreadyFilledValues("phone", data?.phone, useFormObject.setValue);
  }, []);
  return (
    <div className="space-y-24 lg:space-y-12 px-2 min-h-[460px] flex flex-col justify-around   lg:items-center lg:px-0">
      <FormProvider {...useFormObject}>
        <motion.form
          onSubmit={onSubmit}
          {...sectionAnimation}
          layout
          layoutId={layoutId}
          className="space-y-6 lg:space-y-6 lg:w-full lg:flex flex-col items-center "
        >
          <Input label="First Name" registerLabel="firstName" />
          <Input label="Last Name" registerLabel={"lastName"} />
          <Input label="Email" registerLabel="email" />

          <Input label="Phone Number" registerLabel="phone" type="tel" />
          <Buttons
            first
            firstButtonContent="Next"
            backFunction={previousViewFn}
          />
        </motion.form>
      </FormProvider>
    </div>
    // {/*button place*/ }
  );
};
export default ViewOne;
