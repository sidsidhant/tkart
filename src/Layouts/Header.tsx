import React from "react";
import { useRouter } from "next/router";
import StudentHeader from "./Headers/StudentHeader";
import MainHeader from "./Headers/MainHeader";

export default function Header() {
  const router = useRouter();

  const getHeader = () => {
    if (router.asPath.split("/")[1] === "student") {
      return <StudentHeader />;
    } else if (router.asPath.split("/")[1].includes("teachers")) {
      return <></>;
    } else {
      return <MainHeader />;
    }
  };

  return getHeader();
}
