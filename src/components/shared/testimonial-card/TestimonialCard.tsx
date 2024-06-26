import React from "react";
import {
  Student,
  Testimonial,
  TestimonialConatiner,
} from "./TestimonialCard.style";

export default function TestimonialCard() {
  return (
    <TestimonialConatiner>
      <Student>
        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
        <div>
          <h3>Mabel Mora</h3>
          <h4>223 TestKart tests | 23 TestKart Rank</h4>
          <h5>AIR 1 | SSC CGL 2022</h5>
        </div>
      </Student>
      <Testimonial>
        Voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate
      </Testimonial>
    </TestimonialConatiner>
  );
}
