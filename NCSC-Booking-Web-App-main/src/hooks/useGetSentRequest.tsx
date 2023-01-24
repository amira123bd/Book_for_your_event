import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { UserRequest } from "../types.def";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

interface Response {
  result: UserRequest[];
}
export default function useGetSentRequests() {
  const headers = useSetHeaders();
  return useQuery(["user", "requests", "sent"], () =>
    axios
      .get(getApiURL("/request/sendedrequests"), headers)
      .then((res: AxiosResponse<Response>): UserRequest[] => {
        return res.data.result;
      }), {
      refetchOnReconnect: true,
      initialData:[],

      staleTime: 50000,
    }
  );
}
