import TeacherHeader from "@layouts/Headers/TeacherHeader";
import type { NextPage } from "next";
import Head from "next/head";
import TeachersPage from "src/components/teachers/TeachersPage";

const Teachers: NextPage = () => {
  return (
    <>
      <Head>
        {/* <title>TestKart for teachers | TestKart</title> */}
        <title>Create & Sell Exam Mock Test | Free Online Test Maker</title>
        <meta
          name="description"
          content="Explore test series made by India's top educators to boost your exam preparation for Banking, Railways, Medical, Engineering, SSC, Defence and Other Exams "
        />
        <link rel="canonical" href="https://testkart.in/teachers" />
        <meta
          name="description"
          content="Best online platform to create and sell mock test series to millions of students all over India for teachers, coaching and colleges."
        />
      </Head>

      <TeacherHeader />
      <TeachersPage />
    </>
  );
};

export default Teachers;
