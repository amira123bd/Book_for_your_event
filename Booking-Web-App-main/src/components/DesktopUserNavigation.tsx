import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { JSXElementConstructor } from "react";
import { userRoutes } from "../utils/Constants";
import { NavItem } from "./UserNavigation";

const DesktopNavigation = () => {
  return (
    <div className=" flex-row items-center hidden md:flex  overflow--hidden w-full justify-between pb-12 px-12 max-w-[70vw] min-h-fit">
      <DesktopNavItem
        index={0}
        route={userRoutes[0]}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      />

      <DesktopNavItem
        index={1}
        route={userRoutes[1]}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        )}
      />
      <DesktopNavItem
        index={2}
        route={userRoutes[2]}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
        )}
      />
      {/* <DesktopNavItem
        index={3}
        route={userRoutes[3]}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )}
      /> */}
    </div>
  );
};
interface DesktopNavItemProps {
  route: NavItem;
  index: number /* to delay the animation*/;
  Icon: JSXElementConstructor<any>;
}
const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  Icon,
  route: currentRoute,
  index,
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ translateY: -8 }}
      animate={{ translateY: 0 }}
      transition={{ delay: index * 0.12 }}
      className={`flex flex-row items-center mx-6 hover:text-brand ${
        router.pathname === currentRoute.route ? "text-brand" : ""
      }`}
    >
      <Icon />
      <Link href={currentRoute.route} passHref>
        <a className="text-2xl lg:text-3xl  text-center ml-4 text-inherit transition-colors duration-300 ">
          {currentRoute.label}
        </a>
      </Link>
    </motion.div>
  );
};
export default DesktopNavigation;
