import "@styles/teachers.css";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layouts/Layout";
import "@styles/testseries.scss";
import "../src/Layouts/Headers/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/shared/test-series-cards/test-series.css";
import "../src/styles/helper.css";
import "@layouts/Headers/header.style.scss";
import "@styles/home.scss";
import "@styles/alert.scss";
import "@styles/ContactForm.scss"
import "@styles/view-result.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
