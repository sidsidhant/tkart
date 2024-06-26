import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Callback_url = () => {
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
                  src="/images/checks.png"
                  style={{ height: "65px", width: "65px" }}
                  alt=""
                />
              </div>
              <h4 className="mt-3">
                Hey <span style={{ color: "#ff875a" }}>{paymentInfo?.name}</span>,
              </h4>
              <p className="mb-3 font-weight-600" style={{ fontWeight: "500" }}>
                Thank you for choosing{" "}
                <span style={{ color: "#ff875a" }}>{paymentInfo?.test_series_title}</span> for
                your test series needs! We appreciate your trust and are here to
                support you every step of the way.
              </p>
              <div>
                <a href={`/test-series/${paymentInfo?.hash}`} className="btn btn-orange">
                  View Test Series
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Callback_url;
