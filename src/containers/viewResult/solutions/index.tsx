import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import AccordionComponent from "src/newComponents/genricAccordion";
import { _request } from "src/utils/request.util";

interface Option {
  optionId: number;
  option: string;
  is_correct: boolean;
}

interface Question {
  question: string;
  options: Option[];
  option_selected: string;
  correct_option: string;
  solution: string;
  marks_obtained: number;
}

interface TestData {
  subject_id: number;
  total_questions: number;
  total_marks: number;
  obtained_marks: number;
  time_taken: number | null;
  correct_answers: number;
  wrong_answers: number;
  subject_name: string;
  section_percentge: number;
  question_array: Question[];
}

const Solution: React.FC<{ test_session_id: any }> = ({ test_session_id }) => {
  const [questionData, setQuestionData] = useState<TestData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSubject, setActiveSubject] = useState<string | undefined>(undefined);

  async function getTestSessionData() {
    try {
      const response = await _request(
        "get",
        `student/results/section/${test_session_id}`,
        "STUDENT"
      );
      if (response?.success) {
        setQuestionData(response?.data);
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

  const handleTabSelect = (subject: string | null) => {
    if (subject !== null) {
      setActiveSubject(subject);
    }
  };
  

  const renderDataBySubject = () => {
    return questionData.map((subjectData) => (
      <Tab key={subjectData.subject_id} eventKey={subjectData.subject_name} title={subjectData.subject_name}>
        <div className="solution-container">
          {subjectData.question_array.map((question, index) => (
            <div key={index} className="attempted-question card gap-2">
              <div className="question-sr-no">
                {index + 1}.
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
              </div>
  
              <div className="question-option">
                {question.options.map((option, optionIndex) => (
                  <div className="question-sr-no" key={optionIndex}>
                    {String.fromCharCode(65 + optionIndex)})
                    <div dangerouslySetInnerHTML={{ __html: option.option }} />
                  </div>
                ))}
              </div>
  
              <div className="d-flex gap-4">
                <div className="d-flex">
                  Correct Answer : <p dangerouslySetInnerHTML={{ __html: question.correct_option }} />
                </div>
                <div className="d-flex">
                  Your Answer: <p dangerouslySetInnerHTML={{ __html: question.option_selected }} />
                </div>
                <p>Marks: {question.marks_obtained}</p>
              </div>
  
              <AccordionComponent
                header="Show Solution"
                index={index}
                content={question.solution}
              />
            </div>
          ))}
        </div>
      </Tab>
    ));
  };
  

  return (
    <>
      <div className="marks-obtained">
        <span>
          Total Questions: <b>15</b>
        </span>
        <span>
          Marks: <b>25</b>
        </span>
      </div>
      <Tabs activeKey={activeSubject} onSelect={handleTabSelect}>
        {loading ? <p>Loading...</p> : renderDataBySubject()}
      </Tabs>
    </>
  );
};

export default Solution;
