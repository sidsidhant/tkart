import course from "../../../public/assets/images/test-series-icon.png";
import sold from "../../../public/assets/images/sold.png";
import earn from "../../../public/assets/images/earn.png";

import React from "react";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";

const Teacherlove = () => {
  const teacherData = [
    {
      id: 1,
      studentTitle: "Greater Reach",
      studentData: "Discover students and sell test series all over India.",
      studentIcon: "all-over-india.png",
    },
    {
      id: 2,
      studentTitle: "Set Your Own Price",
      studentData:
        "Teachers can sell their test series at their preferred price",
      studentIcon: "Listing.png",
    },
    {
      id: 3,
      studentTitle: "List Test Series For FREE",
      studentData: "TestKart doesn't charge anything for listing test series",
      studentIcon: "free-test-series.png",
    },
    {
      id: 4,
      studentTitle: "Get Paid Timely",
      studentData:
        "TestKart automatically transfer teacher's earning on a timely basis",
      studentIcon: "paid-timely.png",
    },
  ];
  return (
    <div>
      <div className="masterSkill">
        <div className="row">
          <div className="d-flex mx-auto justify-content-center teacher-love">
            <h2>Why Teachers Love Us?</h2>
          </div>
        </div>
        <Container>
          <div className="enroll-group">
            <Row>
              {teacherData.map((elem, index) => (
                <div key={index} className="student-card col-md-3">
                  <div className="student-image">
                    <Image
                      src={`/assets/images/${elem?.studentIcon}`}
                      width={60}
                      height={60}
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="student-heading">
                    <h3>{elem?.studentTitle}</h3>
                  </div>
                  <div className="studentDesc">
                    <p>{elem?.studentData}</p>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Teacherlove;
