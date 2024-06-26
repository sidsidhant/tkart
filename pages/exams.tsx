import type { NextPage } from "next";
import Head from "next/head";
import ExamHeader from "@exams/ExamHeader";
import { _request } from "src/utils/request.util";
import Exams from "@home/Exams";
import { useEffect } from "react";
const ExamsPage: NextPage = (props: any) => {
  useEffect(() => {
    localStorage.removeItem("userType");
  }, []);
  return (
    <>
      <Head>
        <title>
          Explore all government & competitive exam&lsquo;s notifications |
          TestKart
        </title>
        <meta
          name="description"
          content="Explore engineering, banking, medical, SSC, civil services, railway, defence, police & other competitive exam's important dates and notifications."
        />
        <link rel="canonical" href="https://testkart.in/exams" />0
      </Head>
      <ExamHeader />
      {/* <section className="pt-1"> */}
      <Exams exams={props.exams} />
      {/* </section> */}
    </>
  );
};

export default ExamsPage;

export async function getServerSideProps() {
  const res = await _request("get", `app/exams`);
  if (res?.success) {
    return {
      props: {
        exams: res.data,
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
