import {AppProps} from "next/app";
import '../styles/scss/foundation/reset.scss'



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp