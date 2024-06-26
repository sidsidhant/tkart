import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="error-box">
          <div className="error-logo">
            <a href="index.html">
              <img
                src="../assets/images/testkart.svg"
                className="img-fluid"
                alt="Logo"
              />
            </a>
          </div>
          <div className="error-box-img">
            <img src="../assets/images/error-01.png" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3"> Oh No! Error 404</h3>
          <p className="h4 font-weight-normal">
            This page you requested counld not found. May the force be with you!
          </p>
          {/* <Link href="/" className="btn btn-primary">
            <div className="button">
              <button>Back to Home</button>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default index;
