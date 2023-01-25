import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sectionAnimation } from "../../utils/Constants";
import { dateString } from "../../utils/dateString";
import setFormAlreadyFilledValues from "../../utils/setFormAlreadyFilledValues";
import { FormDataSharingContext } from "../FormDataSharingContext";
import { ViewTwoSchema } from "../FormSchemas";
import Input from "../Inputs/Input";
import Buttons from "./FormButtons";

interface ViewTwoProps {
  layoutId: string;
}

const ViewTwo: React.FC<ViewTwoProps> = ({ layoutId }) => {
  const { data, modifyData, nextViewFn, previousViewFn } = useContext(
    FormDataSharingContext
  );
  const useFormObject = useForm({
    resolver: yupResolver(ViewTwoSchema),
  });

  const router = useRouter();
  const onSubmit = useFormObject.handleSubmit((formData) => {
    if (formData && modifyData && nextViewFn) {
      modifyData({
        ...data,
        address: formData.address,
        socialLink: formData.socialLink,
        CIN: formData.CIN,
        birthDate: formData.birthDate,
      });
      setTimeout(() => nextViewFn(), 500);
    } else {
      router.push("/");
    }
  });

  useEffect(() => {
    setFormAlreadyFilledValues(
      "address",
      data?.address,
      useFormObject.setValue
    );
    setFormAlreadyFilledValues(
      "socialLink",
      data?.socialLink,
      useFormObject.setValue
    );
    setFormAlreadyFilledValues("CIN", data?.CIN, useFormObject.setValue);
    if (data?.birthDate) {
      const day =
        data?.birthDate?.getDate() < 10
          ? `0${data.birthDate.getDate()}`
          : data.birthDate.getDate();

      const month =
        data?.birthDate?.getMonth()+1 < 10
          ? `0${data.birthDate.getMonth()+1}`
          : data.birthDate.getMonth()+1;
      const dateString = `${data?.birthDate?.getFullYear()}-${month}-${day}`;
      setFormAlreadyFilledValues(
        "birthDate",
        dateString,
        useFormObject.setValue
      );
    }
  }, [data]);
  return (
    <div className="space-y-24 lg:space-y-12 px-2 min-h-[460px] flex flex-col justify-around   lg:items-center lg:px-0">
      <FormProvider {...useFormObject}>
        <motion.form
          {...sectionAnimation}
          onSubmit={onSubmit}
          layout
          layoutId={layoutId}
          className="space-y-6 lg:space-y-6 lg:w-full lg:flex flex-col items-center "
        >
          <Input label="Address" registerLabel="address" />
          <Input
            label="Facebook or Linkedin profile"
            registerLabel="socialLink"
          />
          <Input label="CIN Number" registerLabel="CIN" />
          <Input label="Birth date" registerLabel="birthDate" type="date" />
          {/* <SelectInput label="University" /> */}
          <Buttons
            firstButtonContent="Next"
            lastButtonContent="Back"
            backFunction={previousViewFn}
          />
        </motion.form>
      </FormProvider>
    </div>
    // {/*button place*/ }
  );
};
export default ViewTwo;
