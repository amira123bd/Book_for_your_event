import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDisclosure } from "../hooks/useDisclosure";
import { userRoutes } from "../utils/Constants";

interface UserNavigationProps {}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
interface ListItemProps {
  route: NavItem;
}
const ListItem: React.FC<ListItemProps> = ({ route }) => {
  return (
    <motion.a
      variants={item}
      className="w-full flex flex-row justify-center  border-t-[1px] border-t-white  hover:bg-white  focus:bg-white  focus:text-brand hover:text-brand text-white py-12  sm:py-6 cursor-pointer"
    >
      <Link href={route.route} passHref>
        <h1 className="text-inherit  text-3xl sm:text-2xl  hover:text-brand ">{route.label}</h1>
      </Link>
    </motion.a>
  );
};

interface DefaultNavigationProps {
  routes: NavItem[];
  selectedRoute: UserRoute;
}
const DefaultNavigation: React.FC<DefaultNavigationProps> = ({
  routes,
  selectedRoute,
}) => {
  const [isOpen, onOpen, onClose, toggle] = useDisclosure();
  return (
    <div className="relative  h-fit shadow-sm z-10">
      <div className="flex flex-col bg-black md:hidden  overflow-visible ">
        <div className="flex flex-row w-full items-center bg-brand h-24">
          <div className="w-5/6 flex flex-row justify-center">
            {/* WIll have the selected route */}
            <h1 className="font-display text-4xl md:text-5xl text-white">
              {selectedRoute}
            </h1>
          </div>
          <button onClick={toggle as () => void}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-12 w-12 text-white ${
                isOpen ? "rotate-90" : ""
              } transition-transform duration-300`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="bevel"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          id="menu"
          className="flex flex-col justify-around absolute    top-[100%] right-0 left-0 bg-black w-full "
          variants={container}
          initial="hidden"
          animate="show"
          transition={{
            staggerChildren: 0.5,
            staggerDirection: -1,
            when: "beforeChildren",
          }}
        >
          {routes.map((r) => (
            <ListItem route={r} key={r.label} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export type UserRouteLabels =
  | "Profile"
  | "Invitation Requests"
  | "Book a place"
  | "Contact us";

export type UserRoute = "/profile" | "/invitations" | "/booking" | "/contact";

export type NavItem = { label: UserRouteLabels; route: UserRoute };

const UserNavigation: React.FC<UserNavigationProps> = ({}) => {
  const router = useRouter();
  return (
    <div >
      <DefaultNavigation
        routes={userRoutes.filter((r) => r.route !== router.pathname)}
        selectedRoute={
          userRoutes.find((r) => r.route === router.pathname)
            ?.label as UserRoute
        }
      />
    </div>
  );
};
export default UserNavigation;
