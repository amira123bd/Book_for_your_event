import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

interface ContactCardProps {
  imageSrc: string;
  imageAlt: string;
  height: number;
  width: number;
  contactName: string;
  contactFacebookProfile: string;
  phoneNumber: number;
  //instituteName: string;
  //instituteStyle: string;
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  imageAlt,
  height,
  width,
  contactName,
  contactFacebookProfile,
  phoneNumber,

//A suprimerrrrrrrrrrrrrrrrrrrrrrrrrrrr
 // instituteName,
  //instituteStyle,


  index,
}) => {
  return (
    <motion.div
      className="flex flex-col bg-gray-100 rounded-lg p-4  md:m-8 ring-1 hover:ring-2 ring-red-200 shadow-sm w-full"
      initial={{ translateY: -20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className=" bg-zinc-400 rounded-lg overflow-clip w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={height}
          width={width}
          layout="responsive"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start mt-4">
        <h4 className="text-xl font-semibold">{contactName}</h4>
        <p className="text-lg text-blue-900 font-bold">
          <span className="font-medium text-md text-black">Phone number </span>
          {phoneNumber}
        </p>
        <a
          className="p-2 leading-none  font-medium mt-3 bg-blue-300  text-md uppercase hover:scale-110 text-black"
          href={contactFacebookProfile}
        >
          Profile link
        </a>
        {/*   supprimerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

        <div className="flex flex-row my-4 text-lg px-2">
          <h1 className="font-bold mr-8">Institute</h1>
          <h1 className={instituteStyle}>{instituteName}</h1>
        </div>

  */}
      </div>
    </motion.div>
  );
};
export default ContactCard;
