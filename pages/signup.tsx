import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/assets/images/login-img.png";
import LogoHeader from "../public/images/logos/TestKart-logo.png";
import google from "../public/assets/images/net-icon-01.png";
import facebook from "../public/assets/images/net-icon-02.png";
import { useFormik } from "formik";
import { _request } from "src/utils/request.util";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { FaHome } from "react-icons/fa";
import { FiCheck, FiEye, FiEyeOff } from "react-icons/fi";
const Signup = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgShow, setErrorMsgShow] = useState(false);
  const [hasTwoConsecutiveSpaces, setHasTwoConsecutiveSpaces] = useState(false);
  const [hasTwoConsecutiveSpacesMsg, setHasTwoConsecutiveSpacesMsg] =
    useState("");
  const [rememberChecked, setRememberChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberChange = () => {
    setRememberChecked(!rememberChecked);
    setShowError(false); // Reset error message when the checkbox is clicked
  };

  const postApiCall = async (jsonData: any) => {
    const response = await _request("post", `student/auth/signup`, jsonData);
    if (!response?.success) {
      setErrorMsg("Email is already in use");
      setErrorMsgShow(true);
      setTimeout(() => {
        setErrorMsgShow(false);
      }, 4000);
    } else {
      const studentToken = response?.data.token;
      const username = response?.data.student.name;
      const studentemail = response?.data.student.email;
      const studentId = response?.data.student?.student_id;
      localStorage.setItem("token", studentToken);
      localStorage.setItem("username", username);
      localStorage.setItem("studentId", studentId);
      localStorage.setItem("useremail", studentemail);
      router.push('/')
    }
  };
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .max(16, "")
      .required("Please enter your name")
      .matches(/^[A-Za-z\s'-]+$/, "Please enter valid name"),
    email: Yup.string()
      .email("Invalid email")

      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter valid email"
      )

      .required("Please enter your email"),
    contact_number: Yup.string().matches(
      /^[0-9]{10}$/,
      "Please enter a valid 10-digit mobile number"
    ),
    // .required("Please enter your mobile number")
    password: Yup.string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )
      .required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact_number: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      if (values.name.includes("  ")) {
        // alert("Two consecutive spaces are not allowed");
        setHasTwoConsecutiveSpaces(true);
        setHasTwoConsecutiveSpacesMsg("Two consecutive spaces are not allowed");
        return;
      }
      if (!rememberChecked) {
        setShowError(true);
        return;
      }
      postApiCall(values);
    },
  });
  const googleAuth = () => {
    window.open(`https://api.testkart.in/auth/google/callback`, "_self");
  };

  return (
    <div className="container fluid">
      <div className="main-wrapper log-wrap">
        <div className="row">
          <div className="col-md-6 login-bg ">
            <div className="owl-carousel login-slide owl-theme d-none d-sm-block">
              <div className="welcome-login">
                <div className="login-banner">
                  {/* <img src="assets/img/login-img.png" className="img-fluid" alt="Logo"/> */}
                  <Image
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                    width={300}
                    height={250}
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>Create Your Account</h2>
                  <p>
                    Join the educational revolution! Sign up for TestKart to
                    access a world of high-quality mock tests, collaborative
                    learning, and endless possibilities for exam success. Your
                    exam preparation journey starts here!
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
                    <Image src={LogoHeader} alt="testkart-logo" />
                  </div>
                  <div className="back-home">
                    <Link href={"/"}>
                      <FaHome className="mr-2" /> Back to Home
                    </Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">Full Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        (formik.errors.name && formik.touched.name) ||
                        hasTwoConsecutiveSpaces
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your Full Name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {(formik.errors.name && formik.touched.name) ||
                    hasTwoConsecutiveSpaces ? (
                      <p
                        className="text-sm text-[#d33d33] mt-2"
                        style={{ color: "#d33d33" }}
                      >
                        {formik.errors.name || hasTwoConsecutiveSpacesMsg}
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
                    <label className="form-control-label">Mobile No</label>
                    <input
                      type="text"
                      className={`form-control ${
                        (formik.errors.contact_number &&
                          formik.touched.contact_number) ||
                        hasTwoConsecutiveSpaces
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Enter your mobile no"
                      name="contact_number"
                      onChange={formik.handleChange}
                      value={formik.values.contact_number}
                    />
                    {(formik.errors.contact_number &&
                      formik.touched.contact_number) ||
                    hasTwoConsecutiveSpaces ? (
                      <p
                        className="text-sm text-[#d33d33] mt-2"
                        style={{ color: "#d33d33" }}
                      >
                        {formik.errors.contact_number ||
                          hasTwoConsecutiveSpacesMsg}
                      </p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group" id="passwordInput">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${
                          formik.errors.password && formik.touched.password
                            ? "error-input"
                            : ""
                        }`}
                        placeholder="Enter your password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <p
                          className="text-sm text-[#d33d33] mt-2"
                          style={{ color: "#d33d33" }}
                        >
                          {formik.errors.password}
                        </p>
                      ) : null}
                      <span
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEye className="feather-eye" color="#000" />
                        ) : (
                          <FiEyeOff className="feather-eye" color="#000" />
                        )}
                      </span>
              
                    </div>

                    <div id="passwordInfo"></div>
                  </div>
                  <div className="form-check remember-me">
                    <label className="form-check-label mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        checked={rememberChecked}
                        onChange={handleRememberChange}
                      />{" "}
                      {showError && (
                        <p style={{ color: "red" }}>
                          Please check the checkbox.
                        </p>
                      )}
                      I agree to the <a href="/">Terms of Service</a> and{" "}
                      <a href="/">Privacy Policy.</a>
                    </label>
                  </div>
                  {errorMsgShow && (
                    <p
                      className=" mt-2"
                      style={{ color: "red", fontSize: "18px" }}
                    >
                      {errorMsg}
                    </p>
                  )}
                  <div className="d-grid">
                    <button className="btn btn-primary btn-start" type="submit">
                      Create Account
                    </button>
                  </div>
                </form>
                <p className="my-3 text-center">
                  Already have an account?{" "}
                  <a className="sign-in-btn" href="login">
                    Sign in
                  </a>
                </p>
              </div>
              <div className="google-bg text-center">
                <span>
                  <a href="#">Or sign in with</a>
                </span>
                <div className="sign-google" onClick={googleAuth}>
                  <ul>
                    <li>
                      <a href="#">
                        {/* <img src="assets/img/net-icon-01.png" className="img-fluid" alt="Logo"/> */}
                        <Image
                          src={google}
                          alt=""
                          className="img-fluid"
                          id="img"
                        />
                        <span>Sign In using Google</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Image
                          src={facebook}
                          alt=""
                          className="img-fluid"
                          id="img"
                        />

                        {/* <img src="assets/img/net-icon-02.png" className="img-fluid" alt="Logo"/> */}
                        <span>Sign In using Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
