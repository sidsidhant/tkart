import React, { useState } from "react";
import logo from "../public/assets/images/login-img.png";
import LogoHeader from "../public/images/logos/TestKart-logo.png";
import Image from "next/image";
import google from "../public/assets/images/net-icon-01.png";
import facebook from "../public/assets/images/net-icon-02.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { _request } from "src/utils/request.util";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { setCookie } from "cookies-next";

const Login = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgShow, setErrorMsgShow] = useState(false);
  const [rememberChecked, setRememberChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const postApiCall = async (jsonData: any) => {
    try {
      const response = await _request("post", `student/auth/login`, jsonData);

      if (!response?.success) {
        setErrorMsgShow(true);
        setErrorMsg(response?.error);
        setTimeout(() => {
          setErrorMsgShow(false);
        }, 2000);
      } else {
        const studentToken = response?.data.token;
        localStorage.setItem("token", studentToken);
        const username = response?.data.user.name;
        const studentemail = response?.data.user.email;
        localStorage.setItem("username", username); 
        const studentId = response?.data.user?.student_id;
        localStorage.setItem("studentId", studentId);
        setCookie("studentId", studentId, { maxAge: rememberChecked ? 30 * 24 * 60 * 60 : undefined });
        localStorage.setItem("useremail", studentemail);
        if (localStorage["path"]) {
          router.push(localStorage["path"]);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
     
      console.error(error);
    }
  };
  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")

      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter valid email"
      )
      .required("Please enter your email"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      postApiCall(values);
    },
  });

  const googleAuth = () => {
    window.open(`https://api.testkart.in/auth/google/callback`, "_self");
  };
  const handleRememberChange = () => {
    setRememberChecked(!rememberChecked);
    setShowError(false); // Reset error message when the checkbox is clicked
  };

  return (
    <div>
      <div className="main-wrapper log-wrap">
        <div className="row">
          <div className="col-md-6 login-bg ">
            <div className="owl-carousel login-slide owl-theme d-none d-sm-block">
              <div className="welcome-login">
                <div className="login-banner">
                  <Image
                    src={logo}
                    className="img-fluid"
                    alt="Logo"
                    width={300}
                    height={250}
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to
                    TestKart.
                  </h2>
                  <p>
                  Unlock a world of learning possibilities. Sign in to your educational journey with TestKart today.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                  <div className="logo-box">
              <Image src={LogoHeader} alt="testkart-logo" />
            </div>
                    <div className="back-home">
                      <Link href={"/"}><FaHome className="mr-2" /> Back to Home</Link>
                    </div>
                  </div>
                  <h1>Sign into Your Account</h1>
                  <form onSubmit={formik.handleSubmit}>
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
                        <p
                          className="text-sm  mt-2"
                          style={{ color: "#d33d33" }}
                        >
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
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
                    </div>
                    <div className="forgot">
                      <span>
                        <Link className="forgot-link" href="/forget-password">
                          Forgot Password ?
                        </Link>
                      </span>
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
                      <button
                        className="btn btn-primary btn-start"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p className="my-3 text-center">
                  Dont't have an account? <a href="signup" className="sign-in-btn">Sign Up</a>
                </p>
                </div>
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

export default Login;
