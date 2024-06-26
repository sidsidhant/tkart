import TestimonialCard from "@components/testimonial-card/TestimonialCard";
import React from "react";
import { SubText, Title } from "@styles/shared.style";

export default function Testimonials() {
  return (
    <section id="students">
      <div className="container">
        <div className="section-title">
          <Title>What students say</Title>
          <SubText>
            Dont just take our word for it,our results speak for themselves.
          </SubText>
        </div>

        <div className="row">
          {[1, 2, 3, 4, 5].map((val) => {
            return (
              <div className="col-md-4" key={val}>
                <TestimonialCard></TestimonialCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
