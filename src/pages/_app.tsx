import type { AppProps } from "next/app";
// import dynamic from "next/dynamic";

import "../../styles/global.scss";

import Layout from "../components/1_sections/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // const Layout = dynamic(
  //   () => import("../components/1_sections/Layout/Layout"),
  //   { ssr: false }
  // );

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
