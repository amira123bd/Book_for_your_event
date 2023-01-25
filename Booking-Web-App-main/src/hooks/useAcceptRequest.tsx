import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API } from "../utils/Constants";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export type AcceptRequestResponse = {
  message: string;
};

export default function useForgetPassword() {
  const headers = useSetHeaders();
  const queryClient = useQueryClient();
  return useMutation(
    (id: string) =>
      axios
        .post(
          getApiURL("/request/accept"),
          {
            id,
          },
          headers
        )
        .then((res: AxiosResponse<AcceptRequestResponse>): string => {
          return res.data.message;
        }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", "requests", "received"]);
        queryClient.invalidateQueries(["user", "requests", "sent"]);
        queryClient.invalidateQueries(["user", "profile"]);
      },
    }
  );
}
