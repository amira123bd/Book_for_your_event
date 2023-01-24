import React, { useState } from "react";
import AuthenticatedRoute from "../src/components/AuthenticatedRoute";
import AcceptRequest from "../src/components/Invitations/AcceptRequestView";
import { MainView } from "../src/components/Invitations/MainView";
import SendView from "../src/components/Invitations/SendRequestView";
import LoadingPage from "../src/components/LoadingPage";
import UserPageLayout from "../src/components/UserPageLayout";
import useLoadProfile from "../src/hooks/loadProfile";
import { User } from "../src/types.def";

export type View = "Main" | "Send" | "Accept";

const ViewContent: React.FC<{
  currentRoute: View;
  user: User;
  setView: React.Dispatch<React.SetStateAction<View>>;
}> = ({ currentRoute = "Main", setView, user }) => {
  switch (currentRoute) {
    case "Main":
      return <MainView setView={setView} user={user} />;
    case "Send":
      return <SendView setView={setView} user={user} />;
    case "Accept":
      return <AcceptRequest setView={setView} user={user} />;
    default:
      console.log("here");
      return <MainView setView={setView} user={user} />;
  }
};

interface InvitationsProps {}
const Invitations: React.FC<InvitationsProps> = ({}) => {
  const [view, setView] = useState<View>("Main");
  const { isLoading, data } = useLoadProfile();

  return (
    <AuthenticatedRoute>
      {!isLoading ? (
        <UserPageLayout sideBannerLabel="Invitations">
          <ViewContent currentRoute={view} setView={setView} user={data} />
        </UserPageLayout>
      ) : (
        <LoadingPage />
      )}
    </AuthenticatedRoute>
  );
};
export default Invitations;
