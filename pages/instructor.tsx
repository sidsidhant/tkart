import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import profile from "../public/assets/images/profile-avatar.jpg";
import icon_one from "../public/assets/images/courses-icon.png";
import icon_two from "../public/assets/images/ttl-stud-icon.png";
import icon_three from "../public/assets/images/review-icon.png";
import email_icon from "../public/assets/images/email-icon.png";
import address_icon from "../public/assets/images/address-icon.png";
import phone_icon from "../public/assets/images/phone-icon.png";
// import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";

const Instructor = () => {
  return (
    <div className="">
      <div className="main-wrapper">
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Courses
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        All Courses
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        The Complete Web Developer Course 2.0
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-banner instructor-bg-blk">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="profile-info-blk">
                  <a href="javascript:;" className="profile-info-img">
                    {/* <img
                  src="assets/img/instructor/profile-avatar.jpg"
                  alt=""
                  className="img-fluid"
                /> */}
                    <Image src={profile} height={1000} width={1000} alt="" />
                  </a>
                  <h4>
                    <a href="javascript:;">Jenny Wilson</a>
                    <span>Beginner</span>
                  </h4>
                  <p>Instructor</p>
                  <ul className="list-unstyled inline-inline profile-info-social">
                    <li className="list-inline-item">
                      <a href="javascript:;">
                        <FaFacebook color="#000" />
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:;">
                        <FaTwitter color="#000" />
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:;">
                        <FaInstagram color="#000" />
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:;">
                        <FaLinkedin color="#000" />
                        {/* <i className="fa-brands fa-linkedin"></i> */}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">About Me</h5>
                    <p>
                      Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shortcuts. Even if the client is being
                      careless. Some quick example text to build on the card
                      title and bulk the card&apos;s content Moltin gives you
                      platform.
                    </p>
                    <p className="mb-0">
                      As a highly skilled and successfull product development
                      and design specialist with more than 4 Years of My
                      experience lies in successfully conceptualizing,
                      designing, and modifying consumer products specific to
                      interior design and home furnishings.
                    </p>
                  </div>
                </div>

                <div className="card education-sec">
                  <div className="card-body pb-0">
                    <h5 className="subs-title">SSC Test Series</h5>
                    {/* <div className="row">
                      {[1, 2, 3].map((val) => {
                        return (
                          <div className="col-md-6" key={val}>
                            <TestSeriesCard></TestSeriesCard>
                          </div>
                        );
                      })}
                    </div> */}
                  </div>
                </div>

                <div className="card education-sec">
                  <div className="card-body pb-0">
                    <h5 className="subs-title">SSC Test Series</h5>
                    {/* <div className="row">
                      {[1, 2, 3].map((val) => {
                        return (
                          <div className="col-md-6" key={val}>
                            <TestSeriesCard></TestSeriesCard>
                          </div>
                        );
                      })}
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">Profile Overview</h5>
                    <div className="rating-grp">
                      <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <span className="d-inline-block average-rating mx-2 align-items-center">
                          <span>4.0</span> (15)
                        </span>
                      </div>
                      <div className="course-share d-flex align-items-center justify-content-center">
                        <a href="#rate">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="profile-overview-list">
                      <div className="list-grp-blk d-flex">
                        <div className="flex-shrink-0">
                          {/* <img
                            src="assets/img/instructor/courses-icon.png"
                            alt="Courses"
                          /> */}
                          <Image src={icon_one} width={40} height={40} alt="" />
                        </div>
                        <div className="list-content-blk flex-grow-1 ms-3">
                          <h5>32</h5>
                          <p>Courses</p>
                        </div>
                      </div>
                      <div className="list-grp-blk d-flex">
                        <div className="flex-shrink-0">
                          <Image src={icon_two} width={40} height={40} alt="" />
                        </div>
                        <div className="list-content-blk flex-grow-1 ms-3">
                          <h5>11,604</h5>
                          <p>Total Students</p>
                        </div>
                      </div>
                      <div className="list-grp-blk d-flex">
                        <div className="flex-shrink-0">
                          <Image src={icon_three} width={40} height={40} alt="" />
                        </div>
                        <div className="list-content-blk flex-grow-1 ms-3">
                          <h5>12,230</h5>
                          <p>Reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">Contact Details</h5>
                    <div className="contact-info-list">
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <Image src={email_icon} width={20} height={20} alt="" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Email</h6>
                          <p>
                            <a href="javascript:;">
                              <span
                                className="__cf_email__"
                                data-cfemail="c4aea1aaaabdb3ada8b7abaa84a1bca5a9b4a8a1eaa7aba9"
                              >
                                [email&#160;protected]
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <Image src={address_icon} width={20} height={20} alt="" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Address</h6>
                          <p>877 Ferry Street, Huntsville, Alabama</p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <Image src={phone_icon} width={20} height={20} alt="" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Phone</h6>
                          <p>
                            <a href="javascript:;">+1(452) 125-6789</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Instructor;
