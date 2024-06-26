import React from "react";
import Link from "next/link";

const Privacypoilicy = () => {
  return (
    <div className="container mt-5 policy">
      <div className="row bg-white p-4 mb-5">
        <div className="col-md-12">
        <h1>Privay Policy</h1>
      <span className="badge badge-orange"> Last update: 14th July 2023</span>
          <p>
            TestKart.in is committed to protecting your privacy. We collect and use
            your personal information only in ways that are described in this
            privacy policy.
          </p>
        </div>
     
     
      
      <h3>What information do we collect?</h3>
      <p>
        We may collect the following information when you visit
       <Link rel="stylesheet" href="/"> https://testkart.in/</Link>
      </p>
      <ul className="mb-4 policy-page-list">
        <li>
          Your name
        </li>
        <li>
          Your email address
        </li>
        <li>
          Your phone number
        </li>
        <li>
          Your IP address
        </li>
        <li>
          The type of browser you use
        </li>
        <li>
          The type of operating system you use
        </li>
        <li>
          The pages you visit on TestKart.in
        </li>
      </ul>
      <h3>How do we use your information?</h3>
      <p>
        We use your information to provide you with the services you request, to
        improve our website, and to contact you about our products and services.
      </p>
      <p>
        We may also share your information with third-party service providers
        who help us provide our services, such as payment processors and email
        providers.
      </p>
      <h3>How do we protect your information?</h3>
      <p>
        We take steps to protect your information from unauthorized access, use,
        or disclosure. These steps include using secure servers and encryption.
      </p>
      <h3>How long do we keep your information?</h3>
      <p>
        We keep your information for as long as it is necessary to provide you
        with the services you request, to improve our website, and to contact
        you about our products and services.
      </p>
      <h3>How can you access or change your information?</h3>
      <p>
        You can access or change your information by visiting the profile
        section after log in.
      </p>
      <h3>How can you delete your information?</h3>
      <p>You can delete your information by deleting your account.</p>
      <h3>How can you opt out of receiving marketing emails?</h3>
      <p>
        You can opt out of receiving marketing emails by clicking the
        "unsubscribe" link at the bottom of the email.
      </p>
      <h3>Changes to this privacy policy</h3>
      <p>
        We may change this privacy policy from time to time. If we make any
        material changes to this privacy policy, we will notify you by email or
        by posting a notice on our website.
      </p>
      <h3>Contact us</h3>
      <p>
        If you have any questions about this privacy policy, please write us at 
        <Link href="mailto:hello@testkart.in"> hello@testkart.in</Link>
      </p>
      <p>
        <br />
      </p>
      </div>
      </div>
  );
};

export default Privacypoilicy;
