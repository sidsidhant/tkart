import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { SlBadge } from "react-icons/sl";
export default function Highlights() {
  return (
    <section id="hightlights">
      <h1 className="title">
        India&lsquo;s Top Teachers and Institutes are on TestKart
      </h1>
      {/* <div className="container">
        <div className="row icon-box-conatiner justify-content-center">
          <div className="icon-box col-md-4">
            <div className="row align-items-center">
              <div className="icon col-md-3">
                <img
                  src="assets/images/best-tests.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="content col-md-9">
                <h4 className="title">1000+ MOCK TEST</h4>
                <p className="description">
                  1000+ Mock test series available to attempt for preparation of
                  all types of competitive exams.
                </p>
              </div>
            </div>
          </div>
          <div className="icon-box col-md-4">
            <div className="row align-items-center">
              <div className="icon col-md-3">
                <img
                  src="assets/images/school.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="content col-md-9">
                <h4 className="title">TOP TEACHERS</h4>
                <p className="description">
                  All the mock test series available on this platform are
                  carefully curated by top teachers of their respective fields.
                </p>
              </div>
            </div>
          </div>
          <div className="icon-box col-md-4">
            <div className="row align-items-center">
              <div className="icon col-md-3">
                <img
                  src="assets/images/community.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="content col-md-9">
                <h4 className="title">REAL EXPERIENCE</h4>
                <p className="description">
                  Experience the real exam environment on TestKart and train
                  yourself for the actual exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col
            md={3}
            xs={6}
            className="d-flex hero-content justify-content-center align-items-center"
          >
            <div className="d-flex flex-column align-items-center">
              <SlBadge size={44} color="#0ea5e9"/>
              <div className="mt-2 font-weight-bold"> <b>316,600+</b>  </div>
              <div className="">Quailified Instructor</div>
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex hero-content justify-content-center align-items-center"
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              <SlBadge size={44} color="#f59e0b" />
              <div className="mt-2 font-weight-bold"><b>316,600+</b></div>
              <div className="">Quailified Instructor</div>
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex hero-content  justify-content-center align-items-center"
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              <SlBadge size={44} color="#754ffe"/>
              <div className="mt-2 font-weight-bold"><b>316,600+</b></div>
              <div className="">Quailified Instructor</div>
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex hero-content justify-content-center align-items-center"
          >
            {" "}
            <div className="d-flex flex-column align-items-center">
              <SlBadge size={44} color="#38a169"/>
              <div className="mt-2 font-weight-bold"><b>316,600+</b></div>
              <div className="">Quailified Instructor</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
