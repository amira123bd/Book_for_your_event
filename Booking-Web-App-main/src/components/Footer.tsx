import React from "react";
import Img from "next/image";

interface FooterProps {
  lgHidden?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ lgHidden = false }) => {
  if (lgHidden) {
    return (
      <>
        <footer className=" flex-row justify-end --z-10 hidden  pr-12 lg:hidden ">
          <Img src="/assets/securinets.png" width="100" height="70" />
        </footer>
        <footer
          className=" h-32 py-2 bottom-0 flex flex-row   justify-center items-center lg:justify-end w-full space-x-4 lg:hidden relative scroll-m-0 "
          id="logo"
        >
          <h1 className="font-display text-[120px] opacity-10  absolute text-brand w-fit  mx-auto    left-0 right-0">
            BEBF
          </h1>
          <Img src="/assets/securinets.png" width="100" height="70" />
        </footer>
      </>
    );
  }

  return (
    <>
      <footer className=" flex-row justify-end -z-10 hidden lg:flex pr-12 absolute bottom-0 left-0 right-0">
        <Img src="/assets/securinets.png" width="100" height="70" />
      </footer>
      <footer
        className=" h-32 py-2 bottom-0 flex flex-row   justify-center items-center lg:justify-end w-full space-x-4 lg:hidden relative scroll-m-0 "
        id="Securinets Official Logo"
      >
        <h1 className="font-display text-[120px] opacity-10  absolute text-brand w-fit  mx-auto    left-0 right-0">
        BEBF
        </h1>
        <Img src="/assets/securinets.png" width="100" height="70" />
      </footer>
    </>
  );
};

export default Footer;
