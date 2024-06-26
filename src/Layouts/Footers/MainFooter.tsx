import Image from "next/image";
import React from "react";
import LogoFooter from "../../../public/images/logos/white-logo.png";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <div className="mb-3 footer-logo-box">
                <Image className="footer-logo" src={LogoFooter} alt="logo" />
              </div>

              <p>
                Test Preparation Platform directly by Top Educators & Institutes
              </p>

              <div className="social-links mt-3">
                <Link href="https://twitter.com/testkart_in" className="twitter ">
                  <i className="bx bxl-twitter fa-2x mr-2"></i>
                </Link>
                <Link href="https://www.facebook.com/testkart.in/" className="facebook ">
                  <i className="bx bxl-facebook fa-2x mr-2"></i>
                </Link>
                <Link href="https://www.instagram.com/testkart/" className="instagram ">
                  <i className="bx bxl-instagram fa-2x mr-2"></i>
                </Link>
                <Link href="https://in.linkedin.com/company/testkart" className="linkedin">
                  <i className="bx bxl-linkedin fa-2x mr-2"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Popular Exam</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/neet-ug">Neet UG</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/jee-mains">Jee Mains</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/cat">CAT</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ctet">CTET</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ugc-net">UGC NET</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/jnvst">JNVST</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ntpc">NTPC</Link>
                </li>

               
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Banking Exams</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/ibps-clerk">IBPS Clerk</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ibps-po">IBPS PO</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/sbi-clerk">SBI Clerk</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/sbi-po">SBI PO</Link>
                </li>
                
                
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ibps-so">IBPS SO</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/rrb-office-assistant">RRB OA</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/rbi-assistant">RBI Assistant</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>SSC & Others Exam</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ssc-gd-constable">GD Constable</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/ssc-cgl">SSC CGL</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ssc-chsl">SSC CHSL</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="/delhi-police-head-constable">Delhi Police Head Constable</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/delhi-police-constable">Delhi Police Constable</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ssc-mts">SSC MTS</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/ssc-je-ce">SSC JE CE</Link>
                </li>
              </ul>

              <div
                className="trustpilot-widget d-none"
                data-locale="en-US"
                data-template-id="5419b6a8b0d04a076446a9ad"
                data-businessunit-id="64843f82a768b6c94e722162"
                data-style-height="24px"
                data-style-width="100%"
                data-theme="light"
                data-min-review-count="10"
                data-style-alignment="center"
                style={{
                  background: "white",
                  marginTop: "20px",
                  display: "flex",
                }}
              >
                <a
                  href="https://www.trustpilot.com/review/testkart.in"
                  target="_blank"
                  // rel="noopener"
                  rel="noreferrer"
                >
                  Trustpilot
                </a>
              </div>
              {/* <div className="reviews"> */}
              {/* </div> */}
            </div>
          </div>

          <div className="row mt-3 ">
            <div className="col-md-8 m-auto">
              <div className="d-flex justify-content-between regular-link">
                <div>
                  <Link href="/Contactus">Contact Us</Link>
                </div>
                <div>
                  <Link href="/teachers">Create Your Test Series</Link>
                </div>
                <div>
                  <Link href="/privacypoilicy">Privacy Policy</Link>
                </div>
                <div>
                  <Link href="/terms&condition">Terms & Condition</Link>
                </div>
                <div>
                  <Link href="/refundpolicy">Refund Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <div className="copyright">
          &copy; Copyright 2024 |
          Onlymenu Enterprise All Rights Reserved
        </div>
        <div className="credits">Made with ❤️ in india</div>
      </div>
    </footer>
  );
}
