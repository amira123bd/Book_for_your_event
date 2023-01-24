import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import getApiURL from "../utils/getApiURL";

export type SignupResponse = {
  message: string;
};

interface ChangePasswordArgs {
  newPassword: string;
  resetPasswordLink: string;
}

export default function useChangePassword() {
  const router = useRouter();
  return useMutation(
    (values: ChangePasswordArgs) =>
      axios
        .put(getApiURL("/user/reset-password"), {
          newPassword: values.newPassword,
          resetPasswordLink: values.resetPasswordLink,
        })
        .then((res: AxiosResponse<SignupResponse>): string => {
          return res.data.message;
        }),
  );
}
