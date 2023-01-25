import React from "react";
import { Navbar } from "./Navbar";

interface PlainLayoutProps {}

const PlainLayout: React.FC<PlainLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen    font-sans  relative overflow-scroll overflow-x-hidden lg:overflow-hidden  relative">
      <div className="lg:absolute lg:block hidden bg-globe bg-contain  bg-no-repeat bg-center left-0 right-0 top-0  -z-10  h-screen w-full"></div>

      <Navbar />

      {children}
    </div>
  );
};
export default PlainLayout;
