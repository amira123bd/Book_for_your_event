/* eslint-disable react/jsx-no-target-blank */
import React, { useContext, useState } from "react";
import Img from "next/image";
import { FunctionalButton, LinkButton } from "../Buttons/Button";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import PingingIcon from "./PingingIcon";
import { sectionAnimation } from "../../utils/Constants";
import { AuthenticationContext } from "../AuthenticatingContext";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
  const [content, setContent] = useState<"Text" | "Buttons">("Text");
  const router = useRouter();

  const { auth } = useContext(AuthenticationContext);
  return (
    <>
      <div className=" flex flex-col lg:grid lg:grid-cols-12 w-full lg:h-full pb-12 lg:overflow-hidden">
        <motion.div
          className="lg:hidden w-full mx-auto   items-center justify-center mb-16"
          {...sectionAnimation}
        >
          <Img
            src="/assets/hero.jpg"
            width={1920}
            height={1002}
            layout="responsive"
          />
        </motion.div>
        <div className="flex flex-col col-start-1 col-end-7 pt-4 lg:pt-32 h-full space-y-24 px-6 lg:pl-14 pr-2 ">
          <UnchangingHeaderText />

          <div className="lg:hidden h-fit pb-12 mb-12 flex flex-col items-center justify-center space-y-8 text-2xl ">
            <FunctionalButton
              variant="primary"
              onClick={() => {
                auth && auth.user && auth.user.token
                  ? router.push("/profile")
                  : router.push("/signup");
              }}
            >
              <div className="flex flex-row items-center space-x-4">
                <p>Participate</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </FunctionalButton>
            <a
              href="https://www.facebook.com/events/624992241977950"
              target="_blank"
            >
              <FunctionalButton
                variant="secondary"
                onClick={() => router.push("")}
              >
                Visit our event page
              </FunctionalButton>
            </a>
          </div>
          <DynamicContent
            content={content}
            setContent={setContent}
            router={router}
          />
        </div>
      </div>
    </>
  );
};

const UnchangingHeaderText = () => (
  <motion.div
    {...sectionAnimation}
    id="Main Text"
    className="flex flex-col space-y-4"
  >
    <h1 className="text-5xl sm:text-6xl text-bold">
      National Cybersecurity Congress
    </h1>
    <h3 className="text-2xl lg:text-4xl font-light">
      The biggest Cybersecurity related Event made so far !
    </h3>
    <div className="h-4 lg:hidden" />
    <p className="text-3xl lg:text-2xl font-light w-full">
      <span className="font-semibold text-brand w-full">
        NCSC National Cyber Security Congress
      </span>
      , a <span className="font-semibold text-brand">3</span> day congress held
      in a hotel in which we organize workshops , conferences and competitions ,
      assured by our Alumnis and known experts in cybersecurity.
    </p>
  </motion.div>
);

const Buttons = ({ router, user }: any) => (
  <motion.div
    layoutId="main-section-content"
    layout
    key={2}
    className="pb-12 mb-12 flex flex-col items-center justify-center space-y-8 text-2xl "
    initial={{ translateX: -3, opacity: 0 }}
    exit={{ opacity: 0, translateY: 1 }}
    animate={{
      opacity: 1,
      translateY: 0,
    }}
    transition={{
      duration: 0.2,
    }}
  >
    <FunctionalButton
      variant="primary"
      onClick={() => {
        user && user.token ? router.push("/profile") : router.push("/signup");
      }}
    >
      <div className="flex flex-row items-center space-x-4">
        <p>Participate</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </FunctionalButton>
    <a href="https://www.facebook.com/events/624992241977950" target="_blank">
      <FunctionalButton variant="secondary" onClick={() => router.push("")}>
        Visit our event page
      </FunctionalButton>
    </a>
  </motion.div>
);
interface DynamicContentProps {
  content: "Text" | "Buttons";
  router: any;
  setContent: React.Dispatch<React.SetStateAction<"Text" | "Buttons">>;
}
const DynamicContent: React.FC<DynamicContentProps> = ({
  content,
  router,
  setContent,
}) => {
  return (
    <div
      className="text-3xl  w-full hidden lg:block"
      onMouseEnter={(event) => {
        setContent("Buttons");
      }}
    >
      <AnimatePresence presenceAffectsLayout>
        {content === "Text" ? (
          <motion.div
            layoutId="main-section-content"
            layout
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            exit={{ opacity: 0, translateY: -2, translateX: 2 }}
            transition={{ duration: 0.4, easings: "easeInOut" }}
          >
            <p className="text-3xl font-light w-full">
              <span className="font-semibold text-brand w-full">
                NCSC National Cyber Security Congress
              </span>
              , a <span className="font-semibold text-brand">3</span> day
              congress held in a hotel in which we organize workshops ,
              conferences and competitions , assured by our Alumnis and known
              experts in cybersecurity.
            </p>
          </motion.div>
        ) : (
          <Buttons router={router} />
        )}
      </AnimatePresence>
      <PingingIcon content={content} />
    </div>
  );
};

export default Index;
