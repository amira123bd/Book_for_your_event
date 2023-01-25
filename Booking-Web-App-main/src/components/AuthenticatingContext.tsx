import Router, { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

export interface UserAuth {
  token: string | null;
  user: any;
}

interface UserContextContent {
  auth: UserAuth | null;
  login: (args: any) => void;
  isLoading?: boolean;
  logout: () => void;
  setAuth?: (data: any) => void;
  setToken?: (token: string) => void;
}

// the Auth context 
export const AuthenticationContext = createContext<UserContextContent>({
  auth: null,
  login: () => console.log("Logging in"),
  logout: () => console.log("Logging out"),
});

interface AuthenticatedRouteProps {
  options?: any | null;
}



export const AuthenticatedRouteProvider: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const router = useRouter();
  const [auth, setAuth] = useState<UserAuth | null>(null);
  const [isLoading, setLoading] = useState(true);

  const fillUser = (data: any) => {
    if (!auth?.user&&data) {
      setAuth({ token: auth?.token ? auth.token : null, user: data });
    } else {

      setAuth({
        token: auth?.token ? auth.token : null,
        user:  data ,
      });
    }
  };

  const setToken = (token: string) => {
    setAuth({ user: auth?.user, token });
  };

  const logout = () => {
    setAuth(null);
    localStorage.clear();
    if (router.isReady) router.push("/");
  };

  
  const login = (data: any) => {
    localStorage.setItem("user-token", data.token);
    setAuth({
      token: data.token,
      user: data?.user,
    });
  };


  
  useEffect(() => {
    if (typeof window !== "undefined" && !auth?.token) {
      const token = localStorage.getItem("user-token");
      if (token !== null && typeof token === "string") {
        {
          setAuth(() => {
            setLoading(false);
            return { user: auth ? auth.user : null, token };
          });
        }
      } else {
        setLoading(false);
      }
    }
  }, [setAuth, auth]);

  return (
    <>
      <AuthenticationContext.Provider
        value={{
          isLoading,
          auth,
          login,
          logout,
          setAuth: fillUser,
          setToken: setToken,
          
        }}
      >
        {children}
      </AuthenticationContext.Provider>
    </>
  );
};
