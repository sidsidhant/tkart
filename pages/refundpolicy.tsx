import React from "react";
import Link from "next/link";

const Refundpolicy = () => {
  return (
    <div className="container mt-5 policy">
      <div className="row bg-white p-4 mb-5">
              <div className="col-md-12">
                  <h1>Refund and Shipping Policy</h1>
          <span className="badge badge-orange">
          Last Updated: 1st Feb 2024

          </span>
          <p>
          Thank you for choosing TestKart for your test series needs. We strive to provide you with the best experience, and your satisfaction is our top priority. Please read our refund and shipping policy carefully before making a purchase.
          </p>
       
      
     
      
      <h2 className="my-4">Refund Policy:</h2>
      <h4>
      Refund Eligibility:

      </h4>
      <ul className="mb-4 policy-page-list">
        <li>
        Refund requests can only be made within 24 hours of the test series purchase.

        </li>
        <li>After the 24-hour period, no refund requests will be entertained.</li>
          </ul>
          
          <h4>
          How to Request a Refund:

        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            To request a refund, please contact our customer support team via email at <Link rel="stylesheet" href="mailto:hello@testkart.in">hello@testkart.in</Link> within the specified 24-hour window.

            </li>
            <li>Clearly state the reason for your refund request.
            </li>
          </ul>
          
          <h4>
          Refund Processing:


        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            Refunds will be processed within 7 business days after the approval of the refund request.


            </li>
            <li>The refunded amount will be credited back to the original payment method used during the purchase.

            </li>
          </ul>
          
          <h4>
          Refund Exceptions:


        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            No refunds will be provided for any test series after the 24-hour period has elapsed.



            </li>
            <li>Refunds will not be issued if a student attempts any test within the purchased test series.


            </li>
        </ul>
          

      <h2>Shipping & Cancellation Policy:</h2>
      <p>
      TestKart only deals in digital goods; therefore, no physical goods will be sent. Students can find their purchased test series in their account section after logging in.

          </p>
          <h4>
          Cancellation Policy:


        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            Test series purchases are non-cancelable after the 24-hour refund window.




            </li>
            <li>TestKart reserves the right to cancel or modify any test series without prior notice. In such cases, a full refund will be issued.



            </li>
        </ul>
          


          
        <h4>
        Contact Information:
        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            For any refund-related queries or concerns, please contact our customer support team at <Link href="mailto:hello@testkart.in">hello@testkart.in</Link>



            </li>
          </ul>
          
          <h4>
          Policy Changes:
        </h4>
        <ul className="mb-4 policy-page-list">
            <li>
            TestKart reserves the right to modify or update this refund and shipping policy at any time. Changes to the policy will be effective immediately upon posting on our website.

            </li>
        </ul>

      <p>
      By purchasing a test series from TestKart, you acknowledge that you have read and agree to abide by this refund and shipping policy.

      </p>
     
          <p>
          Thank you for choosing TestKart. We appreciate your understanding and cooperation.

          </p> 
          </div>
          </div>
    </div>
  );
};

export default Refundpolicy;
