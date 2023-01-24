import axios, { AxiosResponse } from "axios";
import { useMutation, useQueryClient } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export type BookingBody = {
  room: number;
};

export type BookingResponse = {
  message: string;
};
export default function useBookPlace() {
  const headers = useSetHeaders();
  const queryClient = useQueryClient();
  return useMutation(
    (values: BookingBody) =>
      axios
        .post(getApiURL("/booking/add"), values, headers)
        .then((res: AxiosResponse<BookingResponse>): any => {
          return res.data;
        }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", "profile"]);
        queryClient.invalidateQueries(["user", "booking"]);
      },
    }
  );
}
