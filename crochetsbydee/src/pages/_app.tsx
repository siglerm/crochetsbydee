import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
