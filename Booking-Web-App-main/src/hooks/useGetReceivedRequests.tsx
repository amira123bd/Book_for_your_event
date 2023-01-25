import axios from "axios";
import { useQuery } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export default function useGetReceivedRequests() {
  const headers = useSetHeaders();
  return useQuery(
    ["user", "requests", "received"],
    () =>
      axios
        .get(getApiURL("/request/receivedrequests"), headers)
        .then((res) => res.data.result),
    {
      refetchOnReconnect: true,

      staleTime: 50000,
    }
  );
}
