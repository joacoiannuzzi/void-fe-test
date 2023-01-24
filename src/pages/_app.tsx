import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </MantineProvider>
    </>
  );
}
