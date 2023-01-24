import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AuthenticationContext } from "../components/AuthenticatingContext";
import { loginSchema } from "../components/FormSchemas";
import { API } from "../utils/Constants";
import getApiURL from "../utils/getApiURL";

export type UserCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};
export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { login} = useContext(AuthenticationContext)

  return useMutation(
    (values: UserCredentials) =>
      axios
        .post(getApiURL("/user/signin"), values)
        .then((res: AxiosResponse<LoginResponse>): any => {
          return res.data;
        }),
    {
      onSuccess: (data: LoginResponse) => {
        queryClient.setQueryData("user", data);
        login(data)
        router.push('/profile')
      },
      onError: (data: any) => {
        return data.message;
      },
    }
  );
}
