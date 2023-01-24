/*
 * Layout for pages accessed for public
 */

import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen    font-sans  relative overflow-scroll  lg:overflow-hidden  ">
      <div className="absolute -z-10 hidden lg:block overflow-hidden h-screen mx-auto top-0 bottom-0  left-0 right-30 pointer-events-none ">
        <svg
          height="1400"
          viewBox="0 0 900 1902"
          className=" lg:w-[90vw] pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="839.145"
            y="-300"
            width="400"
            height="1800.7"
            transform="rotate(23.1581 522.145 -202)"
            fill="#970000"
          />
        </svg>
      </div>

      <div className="lg:absolute lg:block hidden bg-mainImage bg-contain  bg-no-repeat bg-right-bottom left-0 right-0 top-0 -z-10 bottom-0 h-screen w-screen pointer-events-none" />

      <Navbar />

      {children}
    </div>
  );
};
