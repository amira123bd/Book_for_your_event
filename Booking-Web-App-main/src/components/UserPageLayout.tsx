import { useRouter } from "next/router";
import { useEffect } from "react";
import useLoadProfile from "../hooks/loadProfile";
import AuthenticatedRoute from "./AuthenticatedRoute";
import DesktopNavigation from "./DesktopUserNavigation";
//import Footer from "./Footer";
import PlainLayout from "./PlainLayout";
import SideBanner from "./SideBanner";
import UserNavigation from "./UserNavigation";

interface UserPageLayoutProps {
  sideBannerLabel: string;
}

const UserPageLayout: React.FC<UserPageLayoutProps> = ({
  children,
  sideBannerLabel,
}) => {
  return (
    <AuthenticatedRoute>
      <PlainLayout>
        <div className="flex flex-row w-screen lg:h-full lg:min-h-full overflow-y-scroll   h-full  justify-center md:justify-start md:items-start overflow-x-hidden lg:overflow-hidden">
          <SideBanner label={sideBannerLabel} />
          <div className="shadow-sm shadow-black w-full min-h-full lg:min-h-full lg:ml-2 overflow-x-hidden   h-full">
            <UserNavigation />
            <div className=" px-4 pt-24  lg:h-screen flex flex-col overflow-scroll items-center  justify-start lg:w-full h-full lg:h-min-screen lg:pt-24  lg:px-12 lg:overflow-hidden">
              <DesktopNavigation />
              {children}
            </div>
          </div>
        </div>
      { /* <Footer />/*/}
      </PlainLayout>
    </AuthenticatedRoute>
  );
};
export default UserPageLayout;
