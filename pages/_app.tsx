import '../styles/globals.css'
import type { AppProps } from 'next/app'

import GlobalStyle from '../src/theme/GlobalStyle';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <GlobalStyle />
   <Component {...pageProps} /></>)
}

export default MyApp
