import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export type cancelBooking = {
  message: string;
};

export default function useCancelBooking() {
  const headers = useSetHeaders();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(
    () =>
      axios
        .post(getApiURL("/booking/delete"), {}, headers)
        .then((res: AxiosResponse<cancelBooking>): string => {
          return res.data.message;
        }),
    {
      onSuccess: () => {
        // router.reload()
        queryClient.invalidateQueries(['user'])
        queryClient.invalidateQueries(['booking'])
      },
    }
  );
}
