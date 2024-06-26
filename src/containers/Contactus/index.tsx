import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactForm from "./contactusform";

const ContactUs = () => {
  return (
    <>
      <div className="container my-4">
        <Row className="phn-column-reverse">
          <div className="col-md-7">
            <h1>
              Contact Test
              <span style={{ color: " rgb(237, 125, 57)" }}>Kart</span>
            </h1>
            <p>
              TestKart is an online test preparation platform for all types of
              competitive exams in India. Here all the test series are made by
              teachers, coaching institutions, schools and colleges.
            </p>
            <p>
              Our mission is to provide quality and affordable test preparation
              to students across India. We believe that everyone should have the
              opportunity to achieve their dreams, regardless of their financial
              background.
            </p>
            <p>
              Our vision is to be the leading online test preparation platform
              in India. We want to help students succeed in their exams and
              achieve their goals.
            </p>

            <p>
              We offer a wide range of test series for all major competitive
              exams in India developed by top teachers, coaching institutes,
              schools and colleges.
            </p>

            <p className="bg-white p-3">
            <b> Registered Address:</b> Sonvarsha Ghat, Chautham, Khagaria, Bihar, 851201 <br />
            <b>Email:</b> hello@testkart.in <br />
            <b>Mobile:</b> +91 9334581138  <br />
            </p>
            <p>We also offer a variety of other resources, such as:</p>
            <div className="bullet-points">
              <ul>
                <li>Free Practice Test</li>
                <li>Online Exam Portal</li>
                <li>Blogs</li>
              </ul>
            </div>
            <p>
              We are committed to providing our students with the best possible
              test preparation experience. We have partnered with experienced
              and qualified educators who are passionate about helping students
              succeed. We also offer a variety of features that make our
              platform easy to use and convenient for students.
            </p>

            
          </div>
          <div className="col-md-5">
            <ContactForm />
          </div>
        </Row>
      </div>
    </>
  );
};

export default ContactUs;
