import { AppProps } from 'next/app';
import Head from "next/head";
import '../styles/scss/foundation/reset.scss';
import '../assets/fonts/style.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (  
  <Component {...pageProps} />
  )
}

export default MyApp
