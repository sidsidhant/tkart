/* eslint-disable @next/next/no-page-custom-font */
import Landing from "@home/Landing";
import { getCookie } from "cookies-next";
import type { NextPage } from "next";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { _request } from "src/utils/request.util";

const Home: NextPage = (props: any) => {
  useEffect(() => {
    localStorage.removeItem("userType");
  }, []);
  const params = useParams();
  // const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ""}${
  //   router.asPath
  // }`;
  return (
    <>
      <Head>
        <title>
          TestKart | India&lsquo;s best mock test-series platform by top teacher
          & institutes.
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Attempt test series of all government and competitive exams made by top teachers of India such as SSS, Railways, UPSC, IBPS, NEET, JEE, CAT, CTET & other exams."
        />

        <link rel="canonical" href="https://testkart.in/" />
        {/* <!-- TrustBox script --> */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        {/* <!-- End TrustBox script --> */}
      </Head>

      <Landing data={props.data} />
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const studentId = getCookie('studentId', { req: context.req, res: context.res });

  // Construct the API URL based on the presence of studentId
  const apiUrl = studentId ? `app/home?student_id=${studentId}` : 'app/home';

  const res = await _request('get', apiUrl);

  if (res?.success) {
    return {
      props: {
        data: res.data,
      },
    };
  } else {
    return {
      props: {
        data: 'Error',
      },
    };
  }
}
