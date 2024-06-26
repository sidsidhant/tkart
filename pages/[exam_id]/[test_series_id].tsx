import type { NextPage } from "next";
import Head from "next/head";
import PopularSeries from "@series/PopularSeries";
import SeriesList from "@series/SeriesList";
import Faqs from "@components/faqs/Faqs";
import SeriesHeader from "@series/SeriesHeader";
import WhyTestkart from "@components/why-testkart/WhyTestkart";
import TestList from "@series/TestList";
import { _request } from "src/utils/request.util";
import TestSeriesDeatils from "src/containers/TestSeries/TestSeriesDetails";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
// import TestSeriesDeatils from "src/containers/TestSeries";

const SignleTestSeries: NextPage = (props: any) => {
  const data = props.data;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${data?.test_series?.title} | | Testkart`} </title>
        <meta name="description" content={data?.test_series?.description} />
      </Head>
      <TestSeriesDeatils data={data} test={data?.test_series} />
      <WhyTestkart />
      <section className="py-60">
        <Faqs faqs={props?.data?.faqs} />
      </section>
    </>
  );
};

export default SignleTestSeries;

export async function getServerSideProps(context: any) {
  const { student_id } = context.query;
  if (context.params.exam_id !== "css") {
    if (student_id) {
      const res = await _request(
        "get",
        `app/test-series/${context.params.test_series_id}?student_id=${student_id}`
      );
      if (res?.success) {
        return {
          props: {
            data: res.data,
          },
        };
      } else {
        return {
          props: {
            data: "Error",
          },
        };
      }
    } else {
      const res = await _request(
        "get",
        `app/test-series/${context.params.test_series_id}`
      );
      if (res?.success) {
        return {
          props: {
            data: res.data,
          },
        };
      } else {
        return {
          props: {
            data: "Error",
          },
        };
      }
    }
  } else {
    return {
      props: {
        data: "NA",
      },
    };
  }
}
