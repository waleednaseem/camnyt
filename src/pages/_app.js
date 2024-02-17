import "@/styles/globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function App({ Component, pageProps }) {
  return <GoogleOAuthProvider clientId="776050994955-v11s31psaqc3dt4r00ucd68j81vmd2r2.apps.googleusercontent.com">
    <Component {...pageProps} />;
  </GoogleOAuthProvider>;
}
