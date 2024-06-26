import Image from "next/image";
import Link from "next/link";
import React from "react";
import tutor_one from "../../../public/assets/images/tutor-one.png";
import slider_two from "../../../public/assets/images/slider-02.png";
import banner_vector from "../../../public/assets/images/banner-vector.svg";
import avtar_one from "../../../public/assets/images/avatar-01.jpg";
import skills_One from "../../../public/assets/images/skills-01.svg";
import skills_Two from "../../../public/assets/images/skills-02.svg";
import skills_Three from "../../../public/assets/images/skills-03.svg";
import skills_Four from "../../../public/assets/images/skills-04.svg";
import joing from "../../../public/assets/images/joing-us-skill.png";
import award_new from "../../../public/assets/images/award-new.svg";
import icon16 from "../../../public/assets/images/contactleftimg.jpg";
import Contact from "pages/contact";
import { Col, Row } from "react-bootstrap";

export default function TeachersPage() {
  return (
    <>
      <div className="page_wrapper home-slide">
        <section className="teachers_banner_section">
          {/* <div className="hero_bg">
          {" "}
          <img src="images/teachers/hero-bg.png" alt="image" />{" "}
        </div> */}
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 m-auto text-center"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <div className="banner_text">
                  <h1>
                  Create & Sell Mock Test Series to <span> Millions of Students</span> for Free

                  </h1>
                  <p>
                  
                    India’s <span className="color-testkart">No. 1</span> Free Test Series Builder & Marketplace For Teachers
                  </p>
                </div>

                <div className="trial_box text-center">
                  <Link href="#join">
                    <button type="button" className="btn">
                      Get Started For Free
                    </button>
                  </Link>
                </div>
                <div className="trial_box_list">
                  <ul>
                    <li>
                      <i className="icofont-check-circled"></i> Easy To Create
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i> Sell & Monetize
                    </li>
                    <li>
                      <i className="icofont-check-circled"></i>Timely Withdrawl
                    </li>
                  </ul>
                </div>
                <div className="used_app">
                  <ul>
                    <li>
                      <img src="images/teachers/used01.png" alt="image" />
                    </li>
                    <li>
                      <img src="images/teachers/used02.png" alt="image" />
                    </li>
                    <li>
                      <img src="images/teachers/used03.png" alt="image" />
                    </li>
                    <li>
                      <img src="images/teachers/used04.png" alt="image" />
                    </li>
                  </ul>
                  <p>
                    1k + <br />
                    Sign Ups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am teachers_features_section" id="features">
          {/* <div className="feature_section_bg">
          <img src="images/teachers/section-bg.png" alt="image" />{" "}
        </div> */}
          <div className="container">
            <div className="features_inner">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <h2>
                  Get all the tools you need to create <br />
                  an awesome <span>test series</span> for your students
                </h2>
                <p className="mt-4">
                With TestKart, Teachers can create test series for free and reach millions of students without worrying about website and mobile app.
                </p>
              </div>
              <div className="features_block">
                <div className="row">
                  <div className="col-md-3">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="image">
                        <img
                          src="images/teachers/secure_data.png"
                          alt="image"
                        />
                      </div>
                      <div className="text">
                        <h4>
                          Create unlimited <br /> test series for{" "}
                          <span className="color-testkart"> FREE</span>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1700"
                    >
                      <div className="image">
                        <img src="images/teachers/functional.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>
                          Add <span className="color-testkart">staff </span>to
                          manage test series
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1900"
                    >
                      <div className="image">
                        <img src="images/teachers/live-chat.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>
                          Sell at your own <br />{" "}
                          <span className="color-testkart">price</span>
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div
                      className="feature_box"
                      data-aos="fade-up"
                      data-aos-duration="1900"
                    >
                      <div className="image">
                        <img src="images/teachers/support.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>
                          {" "}
                          <span className="color-testkart"> Withdraw</span>{" "}
                          earning at regular interval
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am about_app_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about_img"
                  data-aos="fade-in"
                  data-aos-duration="1500"
                >
                  <div className="frame_img">
                    <img
                      className="moving_position_animatin"
                      src="images/teachers/about-group-01.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_text">
                  <div
                    className="section_title"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                  >
                    <h2>
                      Some awesome words about <span>TestKart.</span>
                    </h2>
                    <p>
                      Managing and selling test series was never easy before,
                      TestKart&apos;s studio makes everything easy for me and my
                      team. Also, their support team is very helpful for us.
                    </p>
                  </div>
                  <ul
                    className="app_statstic"
                    id="counter"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    <li>
                      <div className="icon">
                        <img src="images/teachers/download.png" alt="image" />
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value">1</span>
                          <span>k+</span>
                        </p>
                        <p>Sign Ups</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="images/teachers/followers.png" alt="image" />
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value">10</span>
                          <span>k+</span>
                        </p>
                        <p>Students</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="images/teachers/reviews.png" alt="image" />
                      </div>
                      <div className="text">
                        <p>
                          <span className="counter-value">1500</span>
                          <span>+</span>
                        </p>
                        <p>Reviews</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon"></div>
                      <div className="text">
                        <p>
                          <span className="counter-value">50k</span>
                          <span>+</span>
                        </p>
                        <p>Test Taken</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-4">
                  <a href="#join" className="teachers_orange_btn">
                    Upload Your Own test series
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="row_am teachers_how_it_works" id="how_it_work">
          {/* <div className="how_section_bg">
          {" "}
          <img src="images/teachers/section-bg.png" alt="image" />{" "}
        </div> */}
          <div className="container">
            <div className="how_it_inner">
              <div
                className="section_title"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <div className="mb-5">
                <h2 >
                How TestKart’s <span>Mock Test Series</span> Works for Teachers?

                </h2>
              </div>
              </div>
              <div className="step_block">
                <ul>
                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <h4>Create Your Account</h4>
                      <p>
                        Sign up on TestKart from <a href="">here</a>
                        for free and let students discover you
                      </p>
                    </div>
                    <div className="step_number number1">
                      <h3>01</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <img src="images/teachers/download_app.jpg" alt="image" />
                    </div>
                  </li>
                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <h4>Create Test Series</h4>
                      <p>
                        Upload questions, answers and list your Test Series on
                        TestKart marketplace
                      </p>
                    </div>
                    <div className="step_number number2">
                      <h3>02</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <img
                        src="images/teachers/create_account.jpg"
                        alt="image"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className="step_text"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      <h4>Start Earning</h4>
                      <p>Generate revenue for your hard work and expertise.</p>
                    </div>
                    <div className="step_number number3">
                      <h3>03</h3>
                    </div>
                    <div
                      className="step_img"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <img src="images/teachers/enjoy_app.jpg" alt="image" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="join">
          <div className="container responsivedevice">
            {/* <h2 style={{ textAlign: "center" }} className="mb-5">
              Contact Us
            </h2>
            <Row>
              <Col sm={12} md={12}>
                <Contact />
              </Col>
            </Row> */}
            <div className="row">
            <div className="col-md-10 m-auto contact-inner-area p-5">
              <div
                className="section-title-one aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <span className="sub">Contact Us</span>
                <h2>
                  Ready to Get Started? Fill up the form and our team{" "}
                  <span>contact you</span>
                </h2>

                <Row>
                  <Col sm={12} md={12}>
                    <Contact />
                  </Col>
                </Row>
              </div>
            </div>
           </div>
          </div>
        </section>

        <section className="row_am faq_section" id="faqs">
          {/* <div className="faq_bg">
          <img src="images/teachers/section-bg.png" alt="image" />{" "}
        </div> */}
          <div className="container">
            <div
              className="section_title"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <h2>
                <span>FAQ</span> - Frequently Asked Questions
              </h2>
            </div>
            <div className="faq_panel">
              <div className="accordion" id="teachersfaq">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link active"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <i className="icon_faq icofont-plus"></i> Who can join
                        TestKart?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#teachersfaq"
                  >
                    <div className="card-body">
                      <p>
                      Teachers, Coaching Institutes, Colleges or any Individual who wants to sell mock test series for any competitive examinations can join TestKart and start selling immediately with the help of our marketplace. 

                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <i className="icon_faq icofont-plus"></i>I already have a website and mobile app then why should I sell with TestKart?

                      </button>
                    </h2>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#teachersfaq"
                >
                  <div className="card-body">
                    <p>
                    TestKart is not here to compete with Teachers or any educators, It is here to accelerate your test series business by unlocking new source of traffic through our marketplace where millions of students visits every month to search and buy test series for various competitive examinations.

                    </p>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration="1500">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button
                      type="button"
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      <i className="icon_faq icofont-plus"></i>How much TestKart charges?

                    </button>
                  </h2>
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#teachersfaq"
              >
                <div className="card-body">
                  <p>
                  TestKart is free to join, there no fee on joining and uploading test series. TestKart works on revenue sharing model means you only have to pay a small percentage when a student purchase your test series.
                  </p>
                </div>
              </div>
              <div className="card" data-aos="fade-up" data-aos-duration="1500">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      type="button"
                      className="btn btn-link collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      <i className="icon_faq icofont-plus"></i>How teachers will be paid?

                    </button>
                  </h2>
                </div>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#teachersfaq"
              >
                <div className="card-body">
                  <p>
                  TestKart release payments on 3rd of every month. E.g. If a teacher has total sum of Rs.5000 in their wallet accumulated between 1st Jan to 31st Jan then on 3rd Feb Rs.5000 will be transferred to their respective bank account.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="purple_backdrop"></div>
      </div>

      {/* second page */}

     

      <section className="goals-section-five-one d-none">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-x-4 col-lg-3 col-md-12 col-sm-12"
              data-aos="fade-down"
            >
              <div className="header-five-title mb-0">
                <h2 className="mb-0">Achieve your Goals with DreamsLMS</h2>
              </div>
            </div>
            <div className="col-x-8 col-lg-9 col-md-12 col-sm-12">
              <div className="row text-center align-items-center">
                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-one">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">145</span>
                      </h4>
                      <p className="mb-0">Expert Tutors</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-two">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">23495</span>
                      </h4>
                      <p className="mb-0">Cetified Courses</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-three">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">20</span>+
                      </h4>
                      <p className="mb-0">Online students</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-3" data-aos="fade-down">
                  <div className="goals-count-five goals-five-four goals-five-last">
                    <div className="goals-content-five course-count ms-0">
                      <h4>
                        <span className="counterUp">58370</span>
                      </h4>
                      <p className="mb-0">Online Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="master-section-five d-none">
        <div className="container">
          <div className="master-five-vector">
            <img
              className="ellipse-right"
              src="assets/img/bg/master-vector-left.svg"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12" data-aos="fade-down">
              <div className="section-five-sub">
                <div className="header-five-title">
                  <h2>How TestKart Works?</h2>
                  {/* <p>Pick Your Favourite Course</p> */}
                </div>
                {/* <div className="career-five-content">
                  <p data-aos="fade-down">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    .
                  </p>
                  <p className="mb-0" data-aos="fade-down">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    of eLearning learners report our hands-on content directly
                    helped their careers.
                  </p>
                </div> */}
                {/* <a href="course-list.html" className="learn-more-five button">
                  Learn More
                </a> */}
                {/* <button className="button">Learn More</button> */}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      {/* <img
                    src="assets/img/skills/skills-01.svg"
                    className="bg-warning"
                    alt="Stay motivated"
                  /> */}
                      <Image
                        src={skills_One}
                        alt=""
                        width={50}
                        height={50}
                        className="bg-warning p-2"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Create Your Account</h3>
                      <p>
                        Sign up on TestKart from herefor free and let students
                        discover you
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      {/* <img
                    src="assets/img/skills/skills-02.svg"
                    className="bg-info"
                    alt="Stay motivated"
                  /> */}
                      <Image
                        src={skills_Two}
                        alt=""
                        width={50}
                        height={50}
                        className="bg-info p-2"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Create Test Series</h3>
                      <p>
                        Upload questions, answers and list your Test Series on
                        TestKart marketplace
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      {/* <img
                    src="assets/img/skills/skills-03.svg"
                    className="bg-danger"
                    alt="Stay motivated"
                  /> */}
                      <Image
                        src={skills_Three}
                        alt=""
                        width={50}
                        height={50}
                        className="bg-danger p-2"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Start Earning</h3>
                      <p>Generate revenue for your hard work and expertise.</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-6" data-aos="fade-down">
                  <div className="skill-five-item">
                    <div className="skill-five-icon">
                      <Image
                        src={skills_Four}
                        alt=""
                        width={50}
                        height={35}
                        className="bg-light-green"
                      />
                    </div>
                    <div className="skill-five-content">
                      <h3>Build skills your way, from labs to courses</h3>
                      <p>
                        eLearning learners report our hands-on content directly
                        helped their careers.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" hero-banner d-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-down">
              <div className="experienced-five-group">
                <div className="instructor-vector-left">
                  <img src="assets/img/bg/instructor-vector-left.svg" alt="" />
                </div>
                <div className="developer-five-list">
                  <ul>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          {/* <img
                      src="assets/img/profiles/profile-01.png"
                      alt="Course Instructor"
                    /> */}
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                    <li className="column-img">
                      <div className="developer-profile-five">
                        <div className="developer-image">
                          <Image
                            src={avtar_one}
                            alt=""
                            width={70}
                            height={70}
                          />
                        </div>
                        {/* <div className="profile-five-ovelay">
                    <h5>Daziy Millar</h5>
                    <p>PHP Expert</p>
                  </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="instructor-vector-right">
                  <img src="assets/img/bg/instructor-vector-right.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-down">
              <div className="experienced-five-sub">
                <div className="header-five-title header-five-title-inner">
                  <h2 className="ex-five-title">
                    Experienced Course Instructor
                  </h2>
                </div>
                <div className="career-five-content">
                  <p className="ex-five-content">
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    . Get certified, master modern tech skills, and level up
                    your career — whether you’re starting out or a seasoned pro.
                    95% of eLearning learners report our hands-on content
                    directly helped their careers.
                  </p>
                </div>
                <a href="instructor-list.html" className="learn-more-five">
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section-five d-none">
        <div className="container">
          <div className="row align-items-center text-center justify-content-between">
            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">145</span>
                  </h4>
                  <p className="mb-0">Expert Tutors</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">2,3495</span>
                  </h4>
                  <p className="mb-0">Cetified Courses</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">20</span>+
                  </h4>
                  <p className="mb-0">Online students</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
              <div className="count-five count-five-last count-five-0">
                <div className="count-content-five course-count ms-0">
                  <h4>
                    <span className="counterUp">58,370</span>
                  </h4>
                  <p className="mb-0">Online Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="share-knowledge-five d-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="section-five-sub">
                <div className="header-five-title">
                  <h2>
                    Some awesome words about <span>TestKart.</span>
                  </h2>
                </div>
                <div className="career-five-content">
                  <p>
                    Managing and selling test series was never easy before,
                    TestKart&apos;s studio makes everything easy for me and my
                    team. Also, their support team is very helpful for us.
                  </p>
                </div>
                {/* <div className="knowledge-list-five">
                  <ul>
                    <li>
                      <div className="knowledge-list-group">
                        <Image src={award_new} width={20} height={20} />
                        <p>Best Courses</p>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="knowledge-list-group">
                        <Image src={award_new} width={20} height={20} />

                        <p>Best Courses</p>
                      </div>
                    </li>
                  </ul>
                </div> */}

                <a href="#join" className="teachers_orange_btn">
                  Upload Your Own test series
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-down">
              <div className="joing-count-five text-center">
                {/* <img src="assets/img/joing-us-skill.png" alt="" /> */}
                <Image src={joing} width={400} height={500} alt="" />
                <div className="joing-count-five-one course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">10</span>K<span>+</span>
                  </h3>
                  <p className="joing-count-text">Students</p>
                </div>
                <div className="joing-count-five-two course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">15</span>K +
                  </h3>
                  <p className="joing-count-text"> Sign Ups</p>
                </div>
                <div className="joing-count-five-three course-count">
                  <h3 className="joing-count-number">
                    <span className="counterUp">500</span>
                  </h3>
                  <p className="joing-count-text">Test Taken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="leading-section-five d-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6" data-aos="fade-down">
              <div className="leading-five-content">
                <h2>Unlimited access</h2>
                <p>to 360+ courses and 1,600+ hands-on labs</p>
              </div>
            </div>
            <div className="col-lg-8 col-sm-6" data-aos="fade-down">
              <div className="lead-group-five">
                <div className="leading-slider-five owl-carousel owl-theme">
                  <div className="item">
                    <div className="lead-img">
                      <img
                        className="img-fluid"
                        alt=""
                        src="assets/img/client/client-01.svg"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="lead-img">
                      <img
                        className="img-fluid"
                        alt=""
                        src="assets/img/client/client-02.svg"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="lead-img">
                      <img
                        className="img-fluid"
                        alt=""
                        src="assets/img/client/client-03.svg"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="lead-img">
                      <img
                        className="img-fluid"
                        alt=""
                        src="assets/img/client/client-04.svg"
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="lead-img">
                      <img
                        className="img-fluid"
                        alt=""
                        src="assets/img/client/client-05.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
