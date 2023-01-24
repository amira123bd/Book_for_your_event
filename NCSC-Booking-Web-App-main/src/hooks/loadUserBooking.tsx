import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export default function useLoadUserBooking() {
  const headers = useSetHeaders();
  return useQuery(
    ["user", "booking"],
    () =>
      axios.get(getApiURL("/booking/byuseremail"), headers).then((res) => {
        return res.data.result;
      }),
    {
      retry: false,
    }
  );
}
