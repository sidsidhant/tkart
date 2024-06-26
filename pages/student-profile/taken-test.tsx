import Link from "next/link";
import React, { useEffect, useState } from "react";
import { _request } from "src/utils/request.util";

const TakenTest = () => {
  const [testTakenData, setTestTakenData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPurchasedCard() {
    try {
      const response = await _request("get", `student/results`, "STUDENT");
      if (response?.success) {
        setTestTakenData(response?.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("userType", "STUDENT");
    getPurchasedCard();
  }, []);
  return (
    <div style={{ overflowX: "auto", maxHeight: "80vh", marginBottom: "50px" }}>
      {loading ? (
        <p>Loading...</p>
      ) : testTakenData.length === 0 ? (
        <p>No test taken yet.</p>
      ) : (
        <table className="table table-striped" border={1} cellPadding={10} cellSpacing={10}>
          <thead>
            <tr>
              <th>Ts Name</th>
              <th>Marks</th>
              <th>Obtain Marks</th>
              <th>View Result</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {testTakenData.map((result: any, index) => (
              <tr key={index}>
                <td>{result.test_series_title}</td>
                <td>{result.total_marks}</td>
                <td>{result.obtained_marks}</td>
               
                <td>
                  <Link
                    href={`/viewresult/${result.test_session_id}`}
                    className="result-link"
                  >
                    See full Result
                  </Link>
                </td>
               
                <td>{result.rank}</td>
                <td>{result.tests_attempted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TakenTest;
