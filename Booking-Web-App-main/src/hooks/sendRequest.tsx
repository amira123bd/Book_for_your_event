import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export default function useSendRequest() {
  const queryClient = useQueryClient();
  const headers = useSetHeaders();
  return useMutation(
    (emailReceiver: string) =>
      axios
        .post(getApiURL("/request/send"), emailReceiver, headers)
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["user", "requests", "sent"]);
      },
    }
  );
}
