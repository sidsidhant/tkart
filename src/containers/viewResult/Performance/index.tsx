import moment from "moment";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Chart from "react-google-charts";

interface TestData {
  data: {
    total_marks: number;
    wrong_answers: number;
    correct_answers:number;
    unattempted:number
  };
  rank: number;
  no_of_students: number;
}

const PerformanceTab: React.FC<{ testData: TestData | null }> = ({
  testData,
}) => {
  const [chartData, setChartData] = useState<Array<Array<string | number>>>([]);

  useEffect(() => {
    if (testData) {
      // Update the chartData state based on the testData prop
      setChartData([
        ["Task", "Hours per Day"],
        ["Right Answer", testData.data.correct_answers || 10], // Adjust this based on your actual data structure
        ["Wrong Answer", testData.data.wrong_answers || 20],
        ["Unattempted",testData.data.unattempted || 5]
      ]);
    }
  }, [testData]);

  const options = {
    title: "Result",
  };

  return (
    <div className="performance-container">
      <Row>
        <Col>
          <div className="card ">
            <div className="card-header">
            <h4 >Result</h4>
           </div>
            <div className="card-body p-0 d-flex justify-content-center align-items-center">
            
              <div className="result">
              <div className="ranking">
                  <h2 className="mb-0">AIR  :</h2>
                  <div className="rank">{testData?.rank}</div>
                </div>
                <div className="result-marks">
                  <h4 className="mb-0"> Marks  :</h4>
                  <div className="rank">{testData?.data?.total_marks}</div>
                </div>
                <div className="neg-marks">
                <h4 className="mb-0">Negative Marks  :</h4>
                  <div className="rank">0</div>
                </div>
               
                <div className="attempts">
                <h4 className="mb-0"> Total Attempts student (till now)  :</h4>
                  <div className="rank"> {testData?.no_of_students}</div>
                </div>
              </div>
           
            </div>
          </div>
        </Col>
        <Col>
          <div className="card">
            <div className="card-header">
              <div className="card-header">
                <h4 >Answer Evaluation</h4>
              </div>
              <div className="card-body p-0">
              <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
              </div>
            </div>
            
           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PerformanceTab;
