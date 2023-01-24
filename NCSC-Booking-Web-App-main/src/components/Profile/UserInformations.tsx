import { motion } from "framer-motion";
import React from "react";
import { sectionAnimation } from "../../utils/Constants";
import DesktopNavigation from "../DesktopUserNavigation";

const parent = {
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
interface UserInformationsProps {
  profile: any;
}
const UserInformations: React.FC<UserInformationsProps> = ({ profile }) => {
  return (
    <>
      <motion.h1
        {...sectionAnimation}
        className="text-6xl font-bold w-full lg:text-6xl sm:pl-32 sm:mt-12 sm:mb-4 lg:mb-0 "
      >
        Welcome <span className="text-brand">User</span>
      </motion.h1>
      <div className="h-4 w-full " />

      <motion.div className="flex flex-col lg:w-5/6 lg:flex-row lg:justify-around lg:space-x-40 lg:mt-36 w-full">
        <motion.div
          className="flex flex-col w-full"
          id="infos-first-col"
          variants={parent}
          animate="show"
          initial="hidden"
        >
          <Info label="First name" value={profile.firstName} />
          <Info label="Last name" value={profile.lastName} />
          <Info label="CIN" value={profile.CIN} />
          <Info label="University" value={profile.university} />
        </motion.div>
        <motion.div
          className="flex flex-col w-full mx-auto"
          id="infos-second-col"
          variants={parent}
          animate="show"
          initial="hidden"
        >
          <Info label="Study Field" value={profile.studyField} />
          <Info label="Social Link" value={profile.socialLink} />
          <Info label="Birthday" value={profile.birthDate} />
          <Info label="Address" value={profile.address} />
        </motion.div>
      </motion.div>
</>
  );
};
export default UserInformations;

interface InfoProps {
  label: string;
  value: string | number | Date;
}
const child = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Info: React.FC<InfoProps> = ({ label, value }) => {
  return (
    <motion.div
      variants={child}
      className="flex flex-col md:flex-row   justify-between text-3xl md:text-4xl lg:text-3xl py-5 w-full"
    >
      <h3 className="font-semibold lg:font-light mb-3"> {label}</h3>
      <p className="text-left md:text-right text-3xl md:text-2xl text-brand  ">
        {value}
      </p>
    </motion.div>
  );
};
