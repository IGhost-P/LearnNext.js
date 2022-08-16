import Layout from "../components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="This is a description" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
