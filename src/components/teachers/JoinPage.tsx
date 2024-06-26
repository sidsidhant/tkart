import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoinimage from "../../../public/assets/images/login-img.png";
import google from "../../../public/assets/images/net-icon-01.png";
import testkartlogo from "../../../public/images/logos/testkart.svg";
import LogoHeader from "../../../public/images/logos/TestKart-logo.png";
import { _request } from "src/utils/request.util";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function JoinPage() {
  const [isloading, setIsloading] = useState(false);
  const [sucMessage, setSucMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const postApiCall = async (jsonData: any) => {
    const response = await _request("post", `leads/teachers/join`, jsonData);
    if (response?.success) {
      setErrorMsg(false);
      setSucMessage(true);
      setMessage(response?.message);
    } else {
      setSucMessage(false);
      setErrorMsg(true);
      setError(response?.error);
    }
  };
  const teacherSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")

      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter valid email"
      )
      .required("Please enter your email"),
    name: Yup.string().required("Please enter your name"),
    mobile_number: Yup.number().required("Please enter your mobile number"),
    academy: Yup.string().required("Please enter your academy details"),
    location: Yup.string().required("Enter your location"),
    exam_speciality: Yup.string().required("Enter your exam speciality"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile_number: "",
      academy: "",
      location: "",
      exam_speciality: "",
    },
    validationSchema: teacherSchema,
    onSubmit: (values) => {
      postApiCall(values);
    },
  });
  return (
    <div className="container fluid">
      <div className="main-wrapper log-wrap">
        <div className="row">
          <div className="col-md-6 login-bg">
            <div className="owl-carousel login-slide owl-theme">
              <div className="welcome-login">
                <div className="login-banner">
                  {/* <Image
                    src={logoinimage}
                    className="img-fluid"
                    alt="Logo"
                    width={300}
                    height={250}
                  /> */}
                  <div className="logo-box">
              <Image src={LogoHeader} alt="testkart-logo"  />
              </div>
                </div>
                <div className="mentor-course text-center">
                  <h2>Welcome to TestKart</h2>
                  <p>
                    Use your expertise to create test series and reach millions
                    of students through TestKart
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                <div className="logo-box">
              <Image src={LogoHeader} alt="testkart-logo"  />
              </div>
                  <div className="back-home">
                    <a href="/teachers">Go Back</a>
                  </div>
                </div>
                <h1>Join TestKart</h1>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Full Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.name && formik.touched.name
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your Full Name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        formik.errors.email && formik.touched.email
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your email address"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Mobile number</label>
                    <input
                      type="tel"
                      className={`form-control ${
                        formik.errors.mobile_number &&
                        formik.touched.mobile_number
                          ? "error-input"
                          : ""
                      }`}
                      inputMode="tel"
                      placeholder="Enter your mobile number"
                      name="mobile_number"
                      onChange={formik.handleChange}
                      value={formik.values.mobile_number}
                    />
                    {formik.errors.mobile_number &&
                    formik.touched.mobile_number ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.mobile_number}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label mb-1">Academy</label>
                    {/* <small style={{ color: "#685f78", fontWeight: 400 }}>
                      Enter your Coaching name or YouTube channel link
                    </small> */}
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.academy && formik.touched.academy
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your Coaching or YouTube channel link"
                      name="academy"
                      onChange={formik.handleChange}
                      value={formik.values.academy}
                    />
                    {formik.errors.academy && formik.touched.academy ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.academy}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Location</label>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.location && formik.touched.location
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your city"
                      name="location"
                      onChange={formik.handleChange}
                      value={formik.values.location}
                    />
                    {formik.errors.location && formik.touched.location ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.location}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">
                      Exam Speciality
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formik.errors.exam_speciality &&
                        formik.touched.exam_speciality
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your exam speciality"
                      name="exam_speciality"
                      onChange={formik.handleChange}
                      value={formik.values.exam_speciality}
                    />
                    {formik.errors.exam_speciality &&
                    formik.touched.exam_speciality ? (
                      <p className="text-sm  mt-2" style={{ color: "#d33d33" }}>
                        {formik.errors.exam_speciality}
                      </p>
                    ) : null}
                  </div>
                  {sucMessage && (
                    <div className="form-group text-center">
                      <p
                        className="form-control-label"
                        style={{ color: "green", textAlign: "left" }}
                      >
                        {message}
                      </p>
                    </div>
                  )}
                  {errorMsg && (
                    <div className="form-group text-center">
                      <p
                        className="form-control-label"
                        style={{ color: "red", textAlign: "left" }}
                      >
                        {error}
                      </p>
                    </div>
                  )}
                  {!isloading && (
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-start"
                        type="submit"
                      >
                        Join TestKart
                      </button>
                    </div>
                  )}
                  {isloading && (
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-start"
                        disabled={true}
                        type="button"
                      >
                        <div
                          className="spinner-border"
                          role="status"
                          style={{ height: "20px", width: "20px" }}
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      </button>
                    </div>
                  )}
                </form>
              </div>
              <div className="google-bg text-center">
                {/* <span>
                  <a href="#">Or sign in with</a>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <a href="#">
                        <Image
                          src={google}
                          alt=""
                          className="img-fluid"
                          id="img"
                        />
                        <span>Sign In using Google</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <p className="mb-0">
                  Already have an account?{" "}
                  <a
                    href="https://studio.testkart.in/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
