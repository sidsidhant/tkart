import course from "../../../public/assets/images/test-series-icon.png";
import sold from "../../../public/assets/images/sold.png";
import earn from "../../../public/assets/images/earn.png";

import React from "react";
import { Container, Row } from "react-bootstrap";
import Image from "next/image";

const Studentlove = () => {
  const studentData = [
    {
      id: 1,
      studentTitle: "Expert Teachers",
      studentData: "Find expert teachers for 100+ exams",
      studentIcon: "expert-teachers.png",
    },
    {
      id: 2,
      studentTitle: "Verified Test Series",
      studentData:
        "All test series are curated carefully by real teachers and are error-free",
      studentIcon: "VerifiedTestSeries.png",
    },
    {
      id: 3,
      studentTitle: "Practice Anytime",
      studentData:
        "Attempt questions at your own pace from any device and at any time.",
      studentIcon: "PracticeAnytime.png",
    },
    {
      id: 4,
      studentTitle: "Free Test Series",
      studentData:
        "Start practicing with the free test series available on TestKart",
      studentIcon: "free-test-series.png",
    },
  ];
  return (
    <div>
      <div className="masterSkill mt-5">
        <div className="row">
          <div className="d-flex mx-auto justify-content-center teacher-love">
            <h2>Why Student Love Us?</h2>
          </div>
        </div>
        <Container>
          <div className="enroll-group">
            <Row>
              {studentData.map((elem, index) => (
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

export default Studentlove;
