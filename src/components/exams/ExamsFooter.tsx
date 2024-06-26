import Faqs from "@components/faqs/Faqs";
import Testimonials from "@components/testimonials/Testimonials";
import WhyTestkart from "@components/why-testkart/WhyTestkart";
import React from "react";

export default function ExamsFooter() {
  return (
    <>
      <WhyTestkart />
      <Testimonials />
      <Faqs faqs={undefined} />
    </>
  );
}
