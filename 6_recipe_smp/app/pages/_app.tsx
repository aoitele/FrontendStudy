import { AppProps } from 'next/app';
import '../styles/reset.scss';
import '../assets/fonts/style.css';
import AuthUser from '../components/userprovider/AuthUser';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthUser>
      <Component {...pageProps} />
    </AuthUser>
  );
}

export default MyApp;
