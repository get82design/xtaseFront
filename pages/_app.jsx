import { fetchAPI } from './../lib/api';
import { getStrapiMedia } from './../lib/media';
import '../styles/globals.css'
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from './../components/Layout/Layout';
import { extendTheme } from "@chakra-ui/react"
import { DialogProvider } from '../components/Dialog/DialogContext';
import { DialogEvent } from '../components/Dialog/DialogEvent';
import { appWithTranslation } from 'next-i18next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#D7A989",
      // ...
      800: "#D9A988",
      900: "#F0B09F",
    },
  },
})

const queryClient = new QueryClient()

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <DialogProvider>
              <Layout logo={global.attributes.logo} copyright={global.attributes.copyright}>
                <DialogEvent />
                <Component {...pageProps} />
              </Layout>
            </DialogProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate:
    {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      logo: "*"
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default appWithTranslation(MyApp);
