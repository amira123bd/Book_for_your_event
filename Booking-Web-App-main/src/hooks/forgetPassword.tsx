import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { API } from "../utils/Constants";
import getApiURL from "../utils/getApiURL";

export type ForgetPasswordResponse = {
  message: string;
};

export default function useForgetPassword() {
  return useMutation((email: string) =>
    axios
      .put(getApiURL(`/user/forgot-password`), {
        email,
      })
      .then((res: AxiosResponse<ForgetPasswordResponse>): string => {
        return res.data.message;
      })
  );
}
