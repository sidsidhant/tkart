import Link from "next/link";
import React from "react";

const Termscondition = () => {
  return (
    <div className="container mt-5 terms">
      <div className="row bg-white p-4 mb-5">
        <div className="col-md-12">
        <h1>Terms and Conditions:</h1>
      <span className="badge badge-orange">Last update: 14th July 2023</span>
      <p>
        Welcome to TestKart! These terms and conditions ("Terms") govern your
        use of the TestKart platform, including the website located at
        <Link href="https://testkart.in"></Link> ("Platform"). By accessing or using the Platform,
        you agree to be bound by these Terms. If you do not agree with these
        Terms, please refrain from using the Platform.
      </p>
      <h3>1. Platform Overview:</h3>
      <p>
        TestKart provides an online marketplace for test preparation. Teachers
        (Test series Creator) upload their questions, and students can purchase
        them at the price set by the teachers. TestKart processes payments and
        charges a platform fee based on the total payment.
      </p>
      <h3>2. Pricing and Payment:</h3>
      <p>
        Teachers have the sole discretion to determine the price of their test
        series. TestKart is not responsible for setting or modifying the
        pricing. Students are responsible for reviewing and accepting the price
        before making a purchase. All payments made through the Platform are
        non-refundable. TestKart reserves the right to modify the platform fee
        and payment processing terms with prior notice.
      </p>
      <h3>3. Test Series Access:</h3>
      <p>
        Upon successful payment, students gain access to the purchased test
        series. It is the responsibility of students to ensure their devices and
        internet connections meet the necessary requirements to access and
        utilize the test series.
      </p>
      <h3>4. Teacher Payments:</h3>
      <p>
        Teachers will be paid for their test series in a 30-day cycle. TestKart
        will process the payments and transfer the applicable earnings to the
        teachers' designated payment method. Teachers are responsible for
        providing accurate payment information and ensuring compliance with any
        tax obligations.
      </p>
      <h3>5. Mistakes in Test Series:</h3>
      <p>
        TestKart strives to maintain the accuracy and quality of the test series
        on the Platform. However, TestKart is not responsible for any mistakes
        or inaccuracies in the questions or content of the test series. Teachers
        are solely responsible for the content they upload, including the
        accuracy and correctness of their questions. Students are advised to use
        their discretion and report any issues or concerns regarding the test
        series to TestKart.
      </p>
      <h3>6. Intellectual Property:</h3>
      <p>
        All intellectual property rights, including copyrights and trademarks,
        in the Platform and its content belong to TestKart or its licensors.
        Users are granted a limited, non-exclusive, non-transferable right to
        access and use the Platform for personal, non-commercial purposes. Users
        must not copy, modify, distribute, or exploit any content from the
        Platform without prior written consent from TestKart.
      </p>
      <h3>7. User Conduct:</h3>
      <p>
        Users (Teachers &amp; Students) must comply with all applicable laws and
        regulations while using the Platform. Users must not engage in any
        illegal, unauthorized, or prohibited activities, including but not
        limited to:
      </p>
      <p>
        &nbsp; &nbsp;- Uploading or sharing content that infringes upon the
        rights of others.
      </p>
      <p>&nbsp; &nbsp;- Interfering with the functionality of the Platform.</p>
      <p>
        &nbsp; &nbsp;- Attempting to gain unauthorized access to the Platform or
        other users' accounts.
      </p>
      <p>
        &nbsp; &nbsp;- Engaging in any form of harassment, bullying, or
        discriminatory behavior towards other users.
      </p>
      <h3>8. Limitation of Liability:</h3>
      <p>
        TestKart shall not be liable for any direct, indirect, incidental,
        consequential, or exemplary damages arising out of or in connection with
        the use or inability to use the Platform or the content available on it.
        TestKart does not guarantee the availability, accuracy, or reliability
        of the Platform or its content. Users access and use the Platform at
        their own risk.
      </p>
      <h3>9. Modifications to Terms:</h3>
      <p>
        TestKart reserves the right to modify or update these Terms at any time.
        Users will be notified of any significant changes, and continued use of
        the Platform after the modifications indicate acceptance of the updated
        Terms.
      </p>
      <h3>10. Governing Law and Jurisdiction:</h3>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of Noida Jurisdiction. Any disputes arising from the use of the
        Platform shall be subject to the exclusive jurisdiction of the courts in
        Noida, Uttar Pradesh, India.
      </p>
      <p>
        By using the TestKart platform, you acknowledge that you have read,
        understood, and agreed to these Terms and Conditions. If you have any
        questions or concerns, please contact us at <Link href="mailto:hello@testkart.in">hello@testkart.in</Link>
      </p>
        </div>
      </div>
    </div>
  );
};

export default Termscondition;
