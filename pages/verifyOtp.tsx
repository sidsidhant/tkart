import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { MdKeyboardBackspace } from "react-icons/md";

const VerifyOtp = () => {
  return (
    <Container>
      <div className="container-otp">
        <div className="d-flex flex-row align-items-center">

        <Link href="/forget-password">
          <span  className="inline-block d-flex align-items-center cursor-pointer">
            <MdKeyboardBackspace size={20} className="mx-2"/>
          Back
          </span>
        </Link>
        </div>
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to personal@email.com <br />
          Enter the code below to confirm your email address
        </p>

        <div className="code-container">
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
          />
        </div>

        <div>
          <button type="button" className="btn-otp btn-primary">
            Verify
          </button>
        </div>

        <small className="info">
          If you didn't receive a code !! <strong> RESEND</strong>
        </small>
      </div>
    </Container>
  );
};

export default VerifyOtp;
