/* eslint-disable react/jsx-no-target-blank */
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { animation } from "../src/components/Buttons/Button";
import Input from "../src/components/Inputs/Input";
import { Spinner } from "../src/components/Loading";
import PlainLayout from "../src/components/PlainLayout";
import useContactTeam, { ContactContent } from "../src/hooks/contactTeam";

interface contactProps {}

const contactShema = yup.object().shape({
  email: yup.string().email("Please insert a valid email"),
  name: yup
    .string()
    .min(3, "Name should be more than 3 characters")
    .max(30, "Name is too long"),
  msg: yup.string().min(30).max(300),
});
const Contact: React.FC<contactProps> = ({}) => {
  const hookFormObject = useForm({ resolver: yupResolver(contactShema) });
  const contactTeam = useContactTeam();
  const onSubmit = hookFormObject.handleSubmit((data) => {
    contactTeam.mutate(data as ContactContent);
    hookFormObject.reset();
  });

  useEffect(() => {
    console.log(contactTeam.data);
  }, [contactTeam.isLoading]);
  return (
    <PlainLayout>
      <section className="text-gray-600 body-font relative flex justify-center flex-col">
        <div className="container px-8 py-28 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-5xl  lg:text-7xl font-bold text-brand  mb-6 ">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl">
              We are always looking forward for your thoughts and feedback !
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <FormProvider {...hookFormObject}>
              <form className="flex flex-wrap -m-4" onSubmit={onSubmit}>
                <div className="w-full flex-col flex md:flex-row">
                  <div className="p-2 md:w-1/2">
                    <div className="relative">
                      <Input label="Name" registerLabel="name" />
                    </div>
                  </div>
                  <div className="p-2  md:w-1/2">
                    <div className="relative">
                      <Input label="Email" registerLabel="email" />
                    </div>
                  </div>
                </div>
                <div className="p-2 lg:p-4 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7  text-gray-600 text-2xl mb-2 shadow-sm justify-start  "
                    >
                      Message
                    </label>
                    <textarea
                      {...hookFormObject.register("msg")}
                      id="message"
                      name="msg"
                      className="w-full bg-gray-50 bg-opacity-50 rounded border border-black focus:border-pink-900 focus:bg-white focus:ring-2 focus:ring-red-200  text-xl lg:text-2xl outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out lg:h-96 h-52 "
                    />
                    {hookFormObject.formState.errors &&
                      hookFormObject.formState.errors["message"] && (
                        <p className="font-bold text-red-700 text-xl max-w-xl w-full">
                          Please your message should be longer than 30
                          characters
                        </p>
                      )}
                  </div>
                </div>
                <div className="p-2 w-full justify-around flex flex-col items-center ">
                  {contactTeam.isLoading ? (
                    <Spinner />
                  ) : (
                    <button
                      type="submit"
                      className={`${animation}  w-56   sm:w-60 h-24 flex flex-row justify-center items-center bg-brand text-white text-3xl font-light mb-4`}
                    >
                      Send
                    </button>
                  )}
                  {contactTeam.isSuccess && (
                    <p className="text-2xl text-green-600 font-bold">
                      Your message was well received , stay tuned for our
                      response.
                    </p>
                  )}
                  {contactTeam.isError && (
                    <p className="text-2xl text-red-600">
                      An error has occurred , try again later
                    </p>
                  )}
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center text-3xl">
                  <a className="text-red-400">ncsc.securinets@gmail.com</a>
                  <p className="leading-normal my-5">
                    Centre Urbain
                    <br />
                    Institut National des Sciences Appliquées et de
                    Technologie,INSAT
                  </p>
                  <span className="inline-flex">
                    <a
                      className="ml-4 text-gray-500 hover:text-red-900 hover:scale-110"
                      href="https://www.facebook.com/events/624992241977950"
                    >
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>

                    <a
                      className="ml-4 text-gray-500 hover:text-red-900 hover:scale-110"
                      href="https://www.instagram.com/nationalcybersecuritycongress/?utm_medium=copy_link&fbclid=IwAR3i4H2THPAHr4tzVEA-cVqwT-r2TFUBLGmEayg4zhlJmADdF8Bx4dE-mIo"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>

                    <a className="bg-gray-500 hover:scale-110 hover:bg-red-900 ml-3" href="https://www.linkedin.com/company/securinets/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="h-12 w-12"
                        viewBox="0 0 192 192"
                      >
                        {
                          <g
                            fill="none"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth="1"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="10"
                            strokeDasharray=""
                            strokeDashoffset="0"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                          >
                            <path d="M0,192v-192h192v192z" fill="none"></path>
                            <g fill="#ffffff">
                              <g id="surface1">
                                <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                              </g>
                            </g>
                          </g>
                        }
                      </svg>
                    </a>
                  </span>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </PlainLayout>
  );
};
export default Contact;
