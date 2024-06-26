import type { NextPage } from "next";
import Head from "next/head";
import SearchHeader from "@series/SearchHeader";
import PopularSeries from "@series/PopularSeries";
import SeriesList from "@series/SeriesList";
import Faqs from "@components/faqs/Faqs";
import { _request } from "src/utils/request.util";
import { useEffect } from "react";
import Index from "src/containers/testSeries";

const TestSeries: NextPage = (props: any) => {
  const data = props.data;
  useEffect(() => {
    localStorage.setItem("test-series-name", JSON.stringify(data?.test_series));
  }, [data]);
  return (
    <>
      <Head>
        <title>
          Test Series by Top Teachers & Institutes of India | TestKart
        </title>
        <meta
          name="description"
          content="Explore test series made by India's top educators to boost your exam preparation for Banking, Railways, Medical, Engineering, SSC, Defence and Other Exams "
        />
        <link rel="canonical" href="https://testkart.in/test-series" />
      </Head>
      <Index />

      {/* <PopularSeries data={data?.popular_exams} /> */}
      {data?.test_series?.map((item: any, index: number) => {
        return <SeriesList data={item} key={index} />;
      })}
      <section className="py-60">
        <Faqs faqs={data?.faqs} />
      </section>
    </>
  );
};

export default TestSeries;

export async function getServerSideProps(context: any) {
  const res = await _request("get", `app/test-series`);
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
