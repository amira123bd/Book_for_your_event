import React from "react";
import { Layout } from "./ColoredLayout";
import { Spinner } from "./Loading";
import PlainLayout from "./PlainLayout";
interface LoadingPageProps {}

const LoadingPage: React.FC<LoadingPageProps> = ({}) => {
  return (
    <PlainLayout>
      <div className="h-[90vh] w-full  flex flex-row justify-center items-center grid grid-cols-12 gap-8">
        <div className="w-full justify-center flex flex-row col-start-1 col-end-13 ">
          <div
            className={`w-[150px] h-[150px] border-4 border-brand border-solid rounded-full animate-spin border-t-transparent`}
          />
        </div>
      </div>
    </PlainLayout>
  );
};

export default LoadingPage;
