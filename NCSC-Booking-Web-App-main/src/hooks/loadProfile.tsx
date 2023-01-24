import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthenticationContext } from "../components/AuthenticatingContext";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export default function useLoadProfile() {
  const { setAuth, logout } = useContext(AuthenticationContext);

  const headers = useSetHeaders();
  return useQuery(
    ["user", "profile"],
    () =>
      axios
        .get(getApiURL("/user/loadprofile"), headers)
        .then((res) => res.data.user),
    {
      onSuccess: (data) => {
        if (setAuth && data) {
          setAuth(data);
        }
      },
      onError: () => {
        logout();
      },
    }
  );
}
