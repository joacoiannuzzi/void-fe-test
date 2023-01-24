import type { AppProps } from 'next/app';

import { rtlCache } from '@/rtl-cache';
// import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div dir="rtl">
      <MantineProvider
        theme={{ dir: 'rtl' }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
