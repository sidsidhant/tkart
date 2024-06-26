import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import GenricTabs from "src/newComponents/tabs";
import PerformanceTab from "./Performance";
import Solution from "./solutions";
import Key from "./key";
import { _request } from "src/utils/request.util";
import { useParams } from "next/navigation";
import moment from "moment";
interface TestSessionData {
  data: {
    total_marks: number;
    time_taken: number;
    student_test_session: {
      session_start_time: string;
      session_end_time: string;
      test_sery: {
        title: string;
        exam: {
          slug: string;
        };
      };
    };
  };
  duration: number;
  subject_names: string;
  no_of_sections: string;
}
const ViewResults = () => {
  const router = useParams();

  const [testSessionData, setTestSessionData] = useState<TestSessionData>();
  
  const tabs = [
    {
      label: "Your Performance",
      //@ts-ignore
      content: <PerformanceTab testData={testSessionData} />,
    },
    { label: "Solutions", content: <Solution test_session_id={router?.id} /> },
    { label: "Key", content: <Key test_session_id={router?.id} /> },
    { label: "Top Rankers", content: <div>Content for Tab 3</div> },
  ];

  async function getTestSessionData() {
    try {
      const response = await _request(
        "get",
        `student/results/${router?.id}`,
        "STUDENT"
      );
      if (response?.success) {
        setTestSessionData(response);
      }
    } catch (error) { }
  }

  useEffect(() => {
    localStorage.setItem("userType", "STUDENT");
    getTestSessionData();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="background-banner test-series-container mb-4">
        <Container>
          <div className="test-name">
            {testSessionData?.data.student_test_session?.test_sery?.title}
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="test-details-left">
                <div className="test-label">
                  <div className="sub d-flex justify-content-between align-items-start">
                    <div>
                      <b>Subjects:</b>
                    </div>
                    <div className="ml-3">{testSessionData?.subject_names}</div>
                  </div>
                  <div className="sub d-flex justify-content-start align-items-start">
                    <div className="mr-5">
                      <b>No. of Sections:</b>
                    </div>
                    <div>{testSessionData?.no_of_sections}</div>
                  </div>
                  <div className="sub d-flex justify-content-start align-items-start">
                    <div className="mr-5">
                      <b>Total Marks:</b>
                    </div>
                    <div>{testSessionData?.data?.total_marks}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="test-details-left">
                <div className="sub d-flex justify-content-between align-items-start">
                  <div>
                    <b>Duration:</b>
                  </div>
                  <div className="ml-3">{testSessionData?.duration} mins</div>
                </div>

                <div className="sub d-flex justify-content-between align-items-start">
                  <div>
                    <b>Start Time:</b>
                  </div>
                  <div className="ml-3">
                    {moment(
                      testSessionData?.data.student_test_session
                        ?.session_start_time
                    ).format("DD-MM-YYYY HH:mm:ss")}
                  </div>
                </div>

                <div className="sub d-flex justify-content-between align-items-start">
                  <div>
                    <b>End Time:</b>
                  </div>
                  <div className="ml-3">
                    {moment(
                      testSessionData?.data.student_test_session
                        ?.session_end_time
                    ).format("DD-MM-YYYY HH:mm:ss") || ""}
                  </div>
                </div>

                <div className="sub d-flex justify-content-between align-items-start">
                  <div>
                    <b>Time Taken:</b>
                  </div>
                  <div className="ml-3">
                    {moment(testSessionData?.data?.time_taken).format("mm:ss")}{" "}
                    mins
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="test-details-container">
           
            
          </div> */}
        </Container>
      </div>
      <Container>
        <GenricTabs tabs={tabs} />
      </Container>
    </div>
  );
};

export default ViewResults;
