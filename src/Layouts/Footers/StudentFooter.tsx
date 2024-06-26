import React from "react";

export default function StudentFooter() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <img
                src="/images/logos/testkart-half-white.svg"
                alt=""
                width={"188px"}
              />
              <h4>TestKart Learning Platform Pvt. Ltd.</h4>
              <div className="footer-links">
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">About Teskart</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Compnay</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Career</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Products</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Blog</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Exams Calender</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Refer & Earn</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow us on</h4>
              <div className="social-links" style={{ marginTop: "-12px" }}>
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
              <div className="footer-links">
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Forum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <div className="copyright">
          &copy; Copyright 2022 |
          <strong>TestKart Learning Platform Pvt. Ltd.</strong> All rights
          reserved
        </div>
        <div className="credits">Made with ❤️ in india</div>
      </div>
    </footer>
  );
}
