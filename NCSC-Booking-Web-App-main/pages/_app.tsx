import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, QueryObserver } from "react-query";
import { AuthenticatedRouteProvider } from "../src/components/AuthenticatingContext";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BOOKI</title>
        <meta
          name="description"
          content="The National Cybersecurity Congress Official Website"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthenticatedRouteProvider>
          <Component {...pageProps} />

          {/* <ReactQueryDevtools/> */}
        </AuthenticatedRouteProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
