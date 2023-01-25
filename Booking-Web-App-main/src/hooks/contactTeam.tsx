import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import getApiURL from "../utils/getApiURL";
import useSetHeaders from "../utils/setHeaders";

export type ContactContent = {
  email: string;
  msg: string;
  name: string;
};

export type ContactResponse = {
  message:string
};
export default function useContactTeam() {
  const headers = useSetHeaders();
  return useMutation((values: ContactContent) =>
    axios
      .post(getApiURL("/contact"), values, headers)
      .then((res: AxiosResponse<ContactResponse>): any => {
        return res.data;
      })
  );
}
