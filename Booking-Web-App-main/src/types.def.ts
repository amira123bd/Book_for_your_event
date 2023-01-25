export type RequestStatus = "en attente" | "accepted" | "refused";

export type User = {
  firstName: string;
  lastName: string;
  phone: string;
  booking: boolean;
  email: string;
  address: string;
  roomMates: User[];
  //studyField: string;
  //university: string;
};
export type UserRequest = {
  _id: string;
  Sender: User;
  Receiver: User;
  status: RequestStatus;
};
