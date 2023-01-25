import { NavItem } from "../components/UserNavigation";

export const sectionAnimation = {
  initial: { translateX: -9, opacity: 0 },
  animate: { translateX: 0, opacity: 1 },
  transition: { duration: 0.5 },
};



export const userRoutes: NavItem[] = [
  { label: "Profile", route: "/profile" },
  { route: "/invitations", label: "Invitation Requests" },
  { route: "/booking", label: "Book a place" },
  // { route: "/contact", label: "Contact us" },
];



export const API = "http://localhost:3001";


export const userRouteHeadingStyle = "text-6xl lg:text-5xl font-bold  ";


export const parent = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      staggerDirection: 1,
      when: "beforeChildren",
    },
  },
};
export const child = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
  },
};
