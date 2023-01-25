import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export interface Response {
  msg: string;
  result: Request[];
}
export type AvailbleRoomsTransport = {
  rooms: number;
  transport: number;
  rest_persons:number
  
};

export default function useGetAvailableTransport() {
  const headers = useSetHeaders();
  return useQuery(["booking"], () =>
    axios
      .get(getApiURL("/booking/available"), headers)
      .then(
        (
          res: AxiosResponse<AvailbleRoomsTransport>
        ): AvailbleRoomsTransport => {
          return res.data;
        }
      )
  );
}
