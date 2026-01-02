import { GA4Initializer } from "@/components/gtag";
import "@/styles/globals.css";
import "@/styles/fonts.css";   // adjust path if needed


export default function App({ Component, pageProps }) {
  return (
    <>
      <GA4Initializer/>
      <Component {...pageProps} />
    </>
  );
}
