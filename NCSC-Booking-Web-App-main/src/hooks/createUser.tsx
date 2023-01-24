import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { FormData } from "../components/FormDataSharingContext";
import { API } from "../utils/Constants";
import { dateString } from "../utils/dateString";
import getApiURL from "../utils/getApiURL";

export type SignupResponse = {
  message: string;
};

export default function useSignup() {
  return useMutation((values: FormData) =>
    axios
      .post(getApiURL("/user/signup"), {
        ...values,
        birthDate: dateString(new Date(values.birthDate as Date)),
        phone: values.phone?.toString(),
      })
      .then((res: AxiosResponse<SignupResponse>): string => {
        return res.data.message;
      })
  );
}
