import type { NextPage } from "next";
import Head from "next/head";
import StudentLogin from "src/components/student/auth/StudentLogin";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Student | TestKart</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <StudentLogin />
    </>
  );
};

export default Login;
