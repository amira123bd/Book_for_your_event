import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import getApiURL from "../utils/getApiURL";

type VerifyEmailResponse = {
  token: string;
  message: string;
};
export default function useVerifyEmail() {
  return useMutation(
    (token: string) =>
      axios
        .post(getApiURL("/user/account-activation"), { token })
        .then(
          (res: AxiosResponse<VerifyEmailResponse>): VerifyEmailResponse => {
            return res.data;
          }
        ),
  );
}
