import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { _request } from "src/utils/request.util";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const routerPath = router.asPath;
  const realRoute = routerPath.replace("/", "");

  const excludedRoutes = [
    "login",
    "signup",
    "forget-password",
    "password",
    "verifyOtp",
    "callback_url",
    // "404",
  ];

  const shouldRenderHeader = !excludedRoutes.some((route) =>
    realRoute.includes(route)
  );
  const shouldRenderFooter = shouldRenderHeader;

  return (
    <>
      {shouldRenderHeader && <Header />}
      <main style={{ minHeight: "100vh" }}>{children}</main>
      {shouldRenderFooter && <Footer />}
    </>
  );
}
