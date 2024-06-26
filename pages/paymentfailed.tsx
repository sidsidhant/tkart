import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Paymentfailed = () => {
  const [paymentInfo, setPaymentInfo] = useState<any>();
  useEffect(() => {
    const pay_info = JSON.parse(localStorage["paymentInfo"]);
    setPaymentInfo(pay_info.data);
  }, []);
  return (
    <Container>
      <div className="row">
        <div className="col-md-8 m-auto">
          <div
            className="d-flex justify-content-center align-items-center  "
            style={{ minHeight: "80vh" }}
          >
            <div className="text-center card p-5">
              <div>
                <img
                  src="/images/fail.png"
                  style={{ height: "65px", width: "65px" }}
                  alt=""
                />
              </div>
              <h4 className="mt-3">OOPS!!,</h4>
              <p className="mb-3 font-weight-600" style={{ fontWeight: "500" }}>
                Your payment for the test series on{" "}
                <span style={{ color: "#ff875a" }}>{paymentInfo?.title}</span>{" "}
                couldn't be processed. Please review your payment details and
                try again.
              </p>
              <div>
                <a href={`/checkout/${paymentInfo?.test_series_id}`} className="btn btn-orange">
                  Retry Payment
                </a>
              </div>

              <div className="mt-4">
                <a href="/" style={{ color: "#ff875a", fontWeight: "600" }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    className="mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>{" "}
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Paymentfailed;
