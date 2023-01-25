import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../src/components/ColoredLayout";
import MainSection from "../src/components/MainSection";

const Home: NextPage = () => {
  const router=useRouter()
 
  return (
    <Layout>
      <MainSection />
      {/* <Footer/> */}
    </Layout>
  );
};

export default Home;
