import { useContext } from "react";
import { AuthenticationContext } from "../components/AuthenticatingContext";

const useSetHeaders = () => {
  const { auth } = useContext(AuthenticationContext);

  if (auth && auth.token) {
    return  {
      headers: {
        Authorization: `${auth.token}`,
      },
    };
  } else
    return {
      headers: {
        Authorization: `${
          typeof window !== "undefined"
            ? localStorage.getItem("user-token")
            : ""
        }`,
      },
    };
};

export default useSetHeaders;
