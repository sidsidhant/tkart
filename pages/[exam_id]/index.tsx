import SingleExam from "@exams/SingleExam";
import type { NextPage } from "next";
import Head from "next/head";
import { _request } from "src/utils/request.util";

const SingleExamPage: NextPage = (prop: any) => {
  const exam = prop?.exam;

  return (
    <>
      <Head>
        <title>
          {exam.meta_title ? exam.meta_title : exam.exam} | TestKart
        </title>
        <meta
          name="description"
          content={
            exam.meta_description
              ? exam.meta_description
              : exam.short_description
          }
        />
        <meta name="keywords" content={exam?.meta_keywords?.join(",")} />
      </Head>
      <SingleExam exam={exam} />
    </>
  );
};

export default SingleExamPage;

export async function getServerSideProps(context: any) {
  let preview_token = `?preview_token="${context.query?.preview_token}"`;
  if (!context.query.preview_token) {
    preview_token = "";
  }

  const res = await _request(
    "get",
    `app/exams/${context.params.exam_id}${preview_token}`
  );

  if (res?.success) {
    return {
      props: {
        exam: res.data,
      },
    };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props: {},
    };
  }
}
