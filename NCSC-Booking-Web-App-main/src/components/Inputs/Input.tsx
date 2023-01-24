import { errorMonitor } from "events";
import React, { HTMLInputTypeAttribute, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import Autocomplete from "../Autocomplete";

interface InputProps {
  placeholder?: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  registerLabel: string;
  autoComplete?: string;
  errorMessage?: string;
  areaText?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  autoComplete,
  registerLabel,
  placeholder,
  type = "text",
}) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  useEffect(() => {
    console.log(errors);
    console.log(getValues);
  }, [errors]);
  return (
    <div className="flex flex-col lg:w-full lg:items-center ">
      <div className="w-full max-w-xl">
        <label
          htmlFor={label}
          className="text-2xl mb-2 shadow-sm justify-start"
        >
          {label}
        </label>
      </div>
      <input
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        {...register(registerLabel)}
        className=" h-20 lg:h-16 border-black border text-xl font-light px-2 outline-none focus:border-pink-900   max-h-24 max-w-xl rounded-sm w-full bg-gray-50 focus:ring-red-200 focus:ring-2 focus:bg-white text-gray-800 lg:text-2xl"
      />
      <div className="mt-3 min-h-2">
        {errors[registerLabel] && (
          <p className="font-bold text-red-700 text-xl   max-w-xl w-full">
            {errorMessage ? errorMessage : errors[registerLabel].message}
          </p>
        )}
      </div>
    </div>
  );
};
export default Input;
