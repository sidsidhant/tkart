import Image from "next/image";
import React from "react";
import Exams from "@home/Exams";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../../public/assets/images/banner_img.png";
import pencil from "../../../public/assets/images/questions-icon.png";
import grad from "../../../public/assets/images/gratuate-icon.svg";
import cert from "../../../public/assets/images/teacher-icon.png";
import course from "../../../public/assets/images/test-series-icon.png";
import heroImage from "public/images/main.png";
import elipses from "public/images/ellipse.png";
import shape from "public/images/shape1.png";
import shapeTwo from "public/images/shape2.png";

import icon01 from "../../../public/assets/images/icon-01.svg";
// import { BiSearchAlt2 } from "react-icons/bi"
import { FaCheckCircle, FaHeart, FaArrowRight, FaSearch } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import HomePopularSeries from "@home/HomePopularSeries";
import ForTeachers from "@home/ForTeachers";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import WhyTestkart from "@components/why-testkart/WhyTestkart";
import Teacherlove from "./teacherlove";
import Studentlove from "./studentlove";
import Contact from "pages/contact";
// import categoriesIcon from "../../../public/assets/images/categories-icon-02.png"
const Landing = (props: any) => {
  
  return (
    <>
      <section className="home-slide d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto">
              <div className="home-slide-face aos" data-aos="fade-up">
                <div className="home-slide-text ">
                  <h5>India&apos;s First</h5>
                  <h1>
                    Test Preparation Platform directly by{" "}
                    <span>Top Educators & Institutes</span>
                  </h1>
                  <p>
                    Get 100% ready for final exam with best online mock test
                    series
                  </p>
                  <div>
                  <Link href={"/exams"} className="btn testkart-btn">Get Started</Link>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="girl-slide-img aos" data-aos="fade-up">
                <Image src={heroImage} alt="" width={1000} height={1000} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner-shape-1">
          <Image src={shape} alt="books" />
        </div>
        {/* <div className="main-banner-ellipse">
          <Image src={elipses} alt="main-banner" />
        </div> */}
        <div className="main-banner-shape-2">
          <Image src={shapeTwo} alt="main-banner" />
        </div>
      </section>

      <section className="section student-course">
        <Container>
          <div className="course-widget d-none">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="course-full-width">
                  <div
                    className="blur-border course-radius align-items-center aos"
                    data-aos="fade-up"
                  >
                    <div className="online-course d-flex align-items-center">
                      <div className="course-img">
                        <Image
                          src={pencil}
                          alt="pencil"
                          height={70}
                          width={70}
                        />
                      </div>
                      <div className="course-inner-content">
                        <h4>
                          <span>1 Lakh</span>+
                        </h4>
                        <p>Questions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="course-full-width">
                  <div
                    className="blur-border course-radius aos"
                    data-aos="fade-up"
                  >
                    <div className="online-course d-flex align-items-center">
                      <div className="course-img">
                        <Image
                          src={course}
                          alt="pencil"
                          height={70}
                          width={70}
                        />
                      </div>
                      <div className="course-inner-content">
                        <h4>
                          <span>1000</span>+
                        </h4>
                        <p>Tests</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="course-full-width">
                  <div
                    className="blur-border course-radius aos"
                    data-aos="fade-up"
                  >
                    <div className="online-course d-flex align-items-center">
                      <div className="course-img">
                        <Image src={cert} alt="pencil" height={70} width={70} />
                      </div>
                      <div className="course-inner-content">
                        <h4>
                          <span>100</span>+
                        </h4>
                        <p>Educators</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="course-full-width">
                  <div
                    className="blur-border course-radius aos"
                    data-aos="fade-up"
                  >
                    <div className="online-course d-flex align-items-center">
                      <div className="course-img">
                        <Image src={grad} alt="pencil" height={80} width={80} />
                      </div>
                      <div className="course-inner-content">
                        <h4>
                          <span>25</span>K +
                        </h4>
                        <p>Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* <Container> */}
      <Exams exams={props?.data?.exams} />
      <section className="hero-banner">
        <Container>
          <HomePopularSeries test_series={props?.data?.test_series} />
        </Container>
      </section>
      {/* </Container> */}
      <Studentlove />
      <WhyTestkart />

   
      <section className="">
        <Container>
          <ForTeachers />
        </Container>
      </section>
      <section className="hero-banner">
        <Teacherlove />
      </section>
    </>
  );
};

export default Landing;
