import React from "react";
import ContactCard from "../src/components/ContactCard";
import Footer from "../src/components/Footer";
import PlainLayout from "../src/components/PlainLayout";
import { userRouteHeadingStyle } from "../src/utils/Constants";

interface faqProps {}

const faq: React.FC<faqProps> = ({}) => {
  return (
    <PlainLayout>
      <div className="flex flex-col items-center pt-12">
        <h1
          className={`${userRouteHeadingStyle} text-brand drop-shadow-sm px-4 lg:mt-[2%] lg:text-7xl`}
        >
          For payment reach for one from our team !{" "}
        </h1>
        <p className="text-3xl px-4 lg:text-4xl text-gray-600 mt-4 ">
          You should only pay after you booked a place !
        </p>
        <div className="flex items-center justify-center w-screen min-h-[70vh] p-10  ">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-[80vw]  w-full">
           
           

            <ContactCard
              index={2}
              imageSrc={
                "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/265914420_1590624007954106_2102599000119783064_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zCblgSsm8BQAX8sEnTm&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8-r9fdfq2A0KgceFx2mssZSQjJvRU-2nX__DcZBPV4Eg&oe=61D6488D"
              }
              imageAlt={"Amira bedoui"}
              height={168}
              width={168}
              contactName={"Amira bedoui"}
              contactFacebookProfile={
                "https://www.facebook.com/profile.php?id=100010195658651"
              }
              phoneNumber={29162338}
            />

           
          </div>
        </div>
      </div>
      <Footer />
    </PlainLayout>
  );
};
export default faq;
