import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AuthenticatedRoute from "../src/components/AuthenticatedRoute";
import { Spinner } from "../src/components/Loading";
import UserInformations from "../src/components/Profile/UserInformations";
import UserPageLayout from "../src/components/UserPageLayout";
import useLoadProfile from "../src/hooks/loadProfile";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const { isLoading, isError, data} = useLoadProfile();

  const router = useRouter();

  useEffect(() => {
    if (isError) {
      router.push("/");
    }
  }, [isError]);

    return (
    <AuthenticatedRoute>
      <div className="flex flex-row w-screen lg:h-full lg:min-h-full    justify-center md:justify-start md:items-start overflow-x-hidden">
        <UserPageLayout sideBannerLabel="Profile">
          {isLoading ? (
            <div className="w-full h-full flex flex-col justify-center items-center shadow-md shadow-zinc-400 min-h-screen">
              <Spinner />{" "}
            </div>
          ) : (
            <UserInformations profile={data} />
          )}
        </UserPageLayout>
      </div>
    </AuthenticatedRoute>
  );
};
export default Profile;
