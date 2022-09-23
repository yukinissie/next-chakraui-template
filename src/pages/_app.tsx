import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Next App</title>
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);
export default MyApp;
