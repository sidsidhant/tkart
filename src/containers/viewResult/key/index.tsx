import React, { useEffect, useState } from "react";
import { _request } from "src/utils/request.util";

interface Question {
  time_taken: number;
  option_selected: string;
  correct_option: string;
}

const Key = ({ test_session_id }: any) => {
  const [questionData, setQuestionData] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  async function getTestSessionData() {
    try {
      const response = await _request(
        "get",
        `student/results/section/${test_session_id}`,
        "STUDENT"
      );
      if (response?.success) {
        setQuestionData(response?.data[0]?.question_array);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("userType", "STUDENT");
    getTestSessionData();
  }, []);
  return (
    <div className="keycontainer">
      <div className="keyHeading">
        <div>Question Paper Key</div>
        <p>Check Individual question Analysis</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Question Number</th>
                <th>Time</th>
                <th>Your Answer</th>
                <th>Correct Answer</th>
                <th>Help</th>
              </tr>
            </thead>
            <tbody>
              {questionData.map((question, index) => (
                <tr key={index}>
                  <td> {index + 1}.</td>
                  <td>{question.time_taken}</td>
                  <td>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: question.option_selected,
                      }}
                    />
                  </td>
                  <td>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: question.correct_option,
                      }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-info">Help</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Key;
