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
              index={0}
              imageSrc={
                "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/c0.18.320.320a/p320x320/261307282_4732210456800635_7632321567050409102_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=yaJd4g3TUacAX-WErel&_nc_ht=scontent.ftun6-1.fna&oh=00_AT91PPF8RMhK6bP7HitXyWJqODr4k3LetWectpXWd7ZxBQ&oe=61D5E262"
              }
              instituteName="ISI"
              instituteStyle="text-blue-500 font-black"
              imageAlt={"Omar Chaari"}
              height={168}
              width={168}
              contactName={"Omar Chaari"}
              contactFacebookProfile={"https://www.facebook.com/omar.chaari.9"}
              phoneNumber={22595735}
            />
            <ContactCard
              index={1}
              imageSrc={
                "https://scontent.ftun6-1.fna.fbcdn.net/v/t1.6435-9/190766656_3018510961712850_1100769237137881334_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=84zus-swmjUAX8Gl5mk&tn=_Oyb-bvkUoHRkRYf&_nc_ht=scontent.ftun6-1.fna&oh=00_AT82Xmhp3xJF2KWgn__ghGwxPsf_A9DkT0RyDedUxnK3fQ&oe=61F54198"
              }
              instituteName="INSAT"
              instituteStyle="text-brand font-black"
              imageAlt={"Omar Chaari"}
              height={168}
              width={168}
              contactName={"Mohamed Ali Zaabi"}
              contactFacebookProfile={
                "https://www.facebook.com/profile.php?id=100006619279168"
              }
              phoneNumber={95373221}
            />

            <ContactCard
              index={2}
              imageSrc={
                "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-6/265914420_1590624007954106_2102599000119783064_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zCblgSsm8BQAX8sEnTm&_nc_ht=scontent.ftun6-1.fna&oh=00_AT8-r9fdfq2A0KgceFx2mssZSQjJvRU-2nX__DcZBPV4Eg&oe=61D6488D"
              }
              instituteName="INSAT"
              instituteStyle="text-brand font-black"
              imageAlt={"Amira bedoui"}
              height={168}
              width={168}
              contactName={"Amira bedoui"}
              contactFacebookProfile={
                "https://www.facebook.com/profile.php?id=100010195658651"
              }
              phoneNumber={29162338}
            />
            <ContactCard
              index={3}
              imageSrc={
                "https://scontent.ftun6-1.fna.fbcdn.net/v/t39.30808-1/c0.125.320.320a/p320x320/245245949_331566045402352_2162487007843636021_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=p4aPzrknIwYAX8VZZpH&_nc_ht=scontent.ftun6-1.fna&oh=00_AT94c9stP-ylozOD_YveFG3rf0IGqYpecQQ8Ix6WOGinmQ&oe=61D6ACA7"
              }
              instituteName="Esprit"
              instituteStyle="text-teal-500 font-black"
              imageAlt={"Azer Sebei"}
              height={168}
              width={168}
              contactName={"Azer Sebei"}
              contactFacebookProfile={"https://www.facebook.com/azer.sebei.5"}
              phoneNumber={51921428}
            />
          </div>
        </div>
      </div>
      <Footer />
    </PlainLayout>
  );
};
export default faq;
