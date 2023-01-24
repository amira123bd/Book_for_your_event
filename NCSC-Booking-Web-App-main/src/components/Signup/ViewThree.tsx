import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import router from "next/router";
import React, { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sectionAnimation } from "../../utils/Constants";
import setFormAlreadyFilledValues from "../../utils/setFormAlreadyFilledValues";
import { FormDataSharingContext } from "../FormDataSharingContext";
import { ViewThreeSchema } from "../FormSchemas";
import Input from "../Inputs/Input";
import Buttons from "./FormButtons";

interface ViewThreeProps {
  layoutId: string;
}

const ViewThree: React.FC<ViewThreeProps> = ({ layoutId }) => {
  const { data, modifyData, nextViewFn, previousViewFn } = useContext(
    FormDataSharingContext
  );
  const useFormObject = useForm({
    resolver: yupResolver(ViewThreeSchema),
  });

  const onSubmit = useFormObject.handleSubmit((formData) => {
    if (formData && modifyData && nextViewFn) {
      modifyData({
        ...data,
        university: formData.university,
        studyField: formData.studyField,
      });
      setTimeout(() => nextViewFn(), 500);
    } else {
      router.push("/");
    }
  });
  useEffect(() => {
    setFormAlreadyFilledValues(
      "studyField",
      data?.studyField,
      useFormObject.setValue
    );
    setFormAlreadyFilledValues(
      "university",
      data?.university,
      useFormObject.setValue
    );
  }, []);
  return (
    <div className="space-y-24 lg:space-y-12 px-2 min-h-[460px] flex flex-col justify-around   lg:items-center lg:px-0">
      <FormProvider {...useFormObject}>
        <motion.form
          {...sectionAnimation}
          onSubmit={onSubmit}
          layout
          layoutId={layoutId}
          className="space-y-6 lg:space-y-6 h-full justify-around flex flex-col "
        >
          <Input label="Study Field" registerLabel={"studyField"} />
          <Input label="University" registerLabel={"university"} />
          {/* <Controller
            control={useFormObject.control}
            render={({ field }) => (
              <Autocomplete
                field={field}
                label="University"
                options={[{ label: "hello", value: "great" }]}
              />
            )}
            name="university"
          /> */}

          <Buttons
            firstButtonContent="Next"
            lastButtonContent="Back"
            backFunction={previousViewFn}
            // nextFunction={nextViewFn}
          />
          <p className="text-black">
            {useFormObject.formState.errors.university}
          </p>
        </motion.form>
      </FormProvider>
    </div>
  );
};
export default ViewThree;
