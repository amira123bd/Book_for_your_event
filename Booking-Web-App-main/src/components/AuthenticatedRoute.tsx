/*
 *@remarks this component is to protect authenticated routes
 */
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import useLoadProfile from "../hooks/loadProfile";
import { AuthenticationContext } from "./AuthenticatingContext";
import LoadingPage from "./LoadingPage";

interface AuthenticatedRouteProps {
  options?: any | null;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const { auth, isLoading } = useContext(AuthenticationContext);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const loadProfile = useLoadProfile();
  useEffect(() => {
    if (router.isReady && !isLoading && !auth) {
      router.push("/");
    }
  }, [router.isReady, isLoading]);
  useEffect(() => {
    if (!loadProfile.isLoading) {
      setVisible(true);
    }
  }, [loadProfile.isLoading]);

  return <>{!isLoading ? <>{children}</> : <LoadingPage />}</>;
};
export default AuthenticatedRoute;
