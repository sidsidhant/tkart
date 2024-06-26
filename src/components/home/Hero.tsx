import React from "react";
import { Button } from "@styles/shared.style";
import { Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="hero">
      <Container>
        <Row className="containerWrapper">
          <Col className="justify-content-md-center m-auto content-one">
            <h2 className="title">
              Test<span>Kart</span>
            </h2>

            <p className="my-3">
              Start, switch, or advance your career with more than 5,000
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <div className="action-btns">
              <button className="btn-get-started">Join Free Now</button>
              <button className="btn-explore-exams">Explore exams</button>
            </div>
          </Col>
          <Col className="justify-content-center hero-img" id="content-two">
            <img
              src="/assets/images/girl-image.png"
              className="img-fluid"
              alt=""
            />
            <img
              src="/assets/images/bg-thumb.svg"
              alt=""
              className="position-absolute image1"
            />
            <img
              src="/assets/images/sound.svg"
              alt=""
              className="position-absolute"
            />
            <img
              src="/assets/images/frame-1.svg"
              alt=""
              className="position-absolute image2"
            />
            <img
              src="/assets/images/target.svg"
              alt=""
              className="position-absolute image3"
            />
            <img
              src="/assets/images/trophy.svg"
              alt=""
              className="position-absolute image4"
            />
            <img
              src="/assets/images/frame-2.svg"
              alt=""
              className="position-absolute image5"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
