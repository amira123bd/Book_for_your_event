/* eslint-disable react/jsx-no-target-blank */
import { LayoutGroup, motion } from "framer-motion";
import Img from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Link } from "../components/Links";
import { AuthenticationContext } from "./AuthenticatingContext";

interface NavbarProps {}

const MobileNavbar = () => {
  const [viewNumber, setViewNumber] = useState<number>(1);
  const svgAnimation: any = {
    initial: { translateX: -2 },
    animate: { translateX: 2 },
    transition: {
      repeatType: "reverse",
      repeat: Infinity,
      duration: 0.4,
    },
  };
  const divStyling: string =
    "flex flex-row lg:hidden items-center text-2xl justify-evenly bg-transparent w-screen py-4 h-[100px] align-center";
  const sharedAnimation: any = {
    initial: { translateY: -5, translateX: -10, opacity: 0 },
    animate: { translateY: 0, translateX: 0, opacity: 1 },
    transition: { duration: 0.6 },
  };
  const { auth, logout } = useContext(AuthenticationContext);

  const ViewOne = () => {
    return (
      <motion.div
        {...sharedAnimation}
        className={divStyling}
        layout
        layoutId="navbar"
      >
        <div className="w-1/5">
          <Img
            src="/assets/logo.png"
            width="90px"
            height="90px"
            // layout="responsive"
          />
        </div>

        <Link href="/" label="Home" />

        {!auth || !auth.token ? (
          <Link href="/signin" label="Sign in" />
        ) : (
          <Link href="/profile" label="Profile" />
        )}

        <motion.svg
          onClick={() => setViewNumber(viewNumber + 1)}
          {...svgAnimation}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-brand cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      </motion.div>
    );
  };

  const ViewTwo = () => {
    return (
      <motion.div
        {...sharedAnimation}
        className={divStyling}
        layoutId="navbar"
        layout
      >
        <motion.svg
          {...svgAnimation}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-brand cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setViewNumber(viewNumber - 1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </motion.svg>

        <Link href="/contact" label="Contact" />
        <a
          href="https://www.facebook.com/Securinets"
          target="_blank"
          className={`font-sans text-black  transition-colors duration-200 hover:opacity-95 hover:text-white `}
        >
          FAQ
        </a>

        <motion.svg
          {...svgAnimation}
          onClick={() => setViewNumber(viewNumber + 1)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-brand cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      </motion.div>
    );
  };
  const ViewThree = () => {
    return (
      <motion.div
        {...sharedAnimation}
        className={divStyling}
        layoutId="navbar"
        layout
      >
        <motion.svg
          {...svgAnimation}
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-brand cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setViewNumber(viewNumber - 1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </motion.svg>

        <Link href="/FAQ" label="FAQ" />

        {!auth || !auth.token ? (
          <Link href="/signup" label="Booking" />
        ) : (
          <motion.button
            className="flex flex-row justify-center items-center px-24 py-8 bg-red-700 text-white hover:scale-90 hover:opacity-90"
            onClick={logout}
          >
            Logout
          </motion.button>
        )}
      </motion.div>
    );
  };

  const CurrentView = ({}) => {
    switch (viewNumber) {
      case 2:
        return <ViewTwo />;
      case 3:
        return <ViewThree />;
      default:
        return <ViewOne />;
    }
  };
  return (
    <div className="flex flex-row lg:hidden items-center text-2xl justify-evenly bg-transparent w-screen py-4 min-h-[100px] align-center">
      <LayoutGroup>
        <CurrentView />
      </LayoutGroup>
    </div>
  );
};

const DesktopNavbar = () => {
  const router = useRouter();
  const { auth, logout } = useContext(AuthenticationContext);

  return (
    <div
      className=" self-center mx-auto p-10 w-screen h-40  flex-row items-center bg-transparent space-x-64 max-w-screen-lg hidden lg:flex my-1"
      id="Navbar"
    >
      <div>
        <Img
          src="/assets/logo.png"
          width="110px"
          height="110px"
          // layout="responsive"
        />
      </div>
      <div className="flex flex-row items-center space-x-32 text-2xl w-2/5">
        <Link href="/" label="Home" />
        <a
          href="https://www.facebook.com/events/624992241977950"
          target="_blank"
          className={`font-sans text-black  transition-colors duration-200 hover:opacity-95 hover:text-white `}
        >
          About
        </a>

        <Link
          href={auth && auth.token ? "/booking" : "/signup"}
          label="Booking"
        />
        <Link
          href="/contact"
          label="Contact"
          invert={
            router.pathname === "/" ||
            router.pathname === "/about" ||
            router.pathname === "/signin" ||
            router.pathname === "/signup"
          }
        />
      </div>

      {!auth || !auth.token ? (
        <NextLink href="/signin">
          <button className="text-2xl bg-black px-6 py-4 text-white  font-light font-sans transition-all duration-200 hover:scale-90 hover:shadow-lg ">
            Sign in
          </button>
        </NextLink>
      ) : (
        <button
          className="text-2xl bg-white px-6 py-4 text-red-800 ring-1 ring-red-200 font-white font-sans transition-all duration-200 hover:scale-90 hover:shadow-lg "
          onClick={logout}
        >
          Logout
        </button>
      )}
    </div>
  );
};
export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <LayoutGroup>
      <DesktopNavbar />
      <MobileNavbar />
    </LayoutGroup>
  );
};
