import { createContext } from "react";

export type FormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  address?: string;
  socialLink?: string;

// a supprimerrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
  //studyField?: string;
  //university?: string;


  CIN?: number;
  birthDate?: Date;
  password?: string;
};
export interface DataSharingContextContent {
  data?: FormData;
  nextViewFn?: () => void;

  modifyData?: React.Dispatch<React.SetStateAction<FormData>>;
  previousViewFn?: () => void;
}

export const FormDataSharingContext = createContext<DataSharingContextContent>(
  {}
);
