import { useRouter } from "next/router";
import React from "react";
import MainFooter from "./Footers/MainFooter";
import StudentFooter from "./Footers/StudentFooter";

export default function Footer() {
  const router = useRouter();

  const getHeader = () => {
    if (router.asPath.split("/")[1] === "student") {
      return <StudentFooter />;
    } else if (router.asPath.split("/")[1] === "teachers") {
      return <></>;
    } else {
      return <MainFooter />;
    }
  };

  return getHeader();
}
