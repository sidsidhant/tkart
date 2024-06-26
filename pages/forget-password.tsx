import React from "react";
import logo from "../public/assets/images/login-img.png";
import Image from "next/image";

const ForgetPassword = () => {
  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-md-6 login-bg">
            <div
              className="owl-carousel login-slide owl-theme aos"
              data-aos="fade-up"
            >
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
                    Welcome to <br />
                    TestKart Courses.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  {/* <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" /> */}
                  <div className="back-home">
                    <a href="/">Back to Home</a>
                  </div>
                </div>
                <h1>Forgot Password ?</h1>
                <div className="reset-password">
                  <p>Enter your email to reset your password.</p>
                </div>
                <form action="/">
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-start" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
