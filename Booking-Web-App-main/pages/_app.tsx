import "../styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider} from "react-query";
import { AuthenticatedRouteProvider } from "../src/components/AuthenticatingContext";
import Head from "next/head";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BOOKI</title>
        <meta
          name="description"
          content="Booking website"
        />
       
      </Head>
      
      <QueryClientProvider client={queryClient}>
        <AuthenticatedRouteProvider>
          <Component {...pageProps} />

        </AuthenticatedRouteProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
