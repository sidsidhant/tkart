import React from "react";
import elipses from "public/images/ellipse.png";
import Image from "next/image";
import success from "public/images/success.png";

export default function ExamHeader() {
  return (
    <section id="exam-hero" className="d-flex align-items-center home-slide">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Explore exams by categories</h1>
            <h2 className="my-4">
              Explore all kind of government and private exams. Know eligibility
              criteria, Important dates and other notifications.
            </h2>
            {/* <div className="search-box">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search for exam you are preparing for..."
                  className="form-control"
                />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            {/* <img
              src="/images/exams-header.svg"
              className="img-fluid animated"
              alt=""
            /> */}
            <Image src={success} alt="main-banner" />
          </div>
        </div>
      </div>
      {/* <div className="main-banner-ellipse">
        <Image src={elipses} alt="main-banner" />
      </div> */}
    </section>
  );
}
