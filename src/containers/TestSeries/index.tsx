import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import SearchHeader from "@series/SearchHeader";
import React, { useEffect, useState } from "react";
import { _request } from "src/utils/request.util";

interface Exam {
  exam: string;
  slug: string;
}

interface FilterData {
  exam: Exam;
  slug: string;
}

const Index: React.FC = () => {
  const [originalData, setOriginalData] = useState<FilterData[]>([]);
  const [filterData, setFilterData] = useState<FilterData[]>([]);
  const [originalDataArray, setOriginalDataArray] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isFilterSelected, setIsFilterSelected] = useState<boolean>(false);

  async function fetchFilterData() {
    try {
      const token = localStorage.getItem("token");

      let url = `/app/test-series/filter`;

      if (token) {
        // Retrieve the student_id from localStorage if the user is logged in
        const studentId = localStorage.getItem("student_id");

        // Append student_id as a query parameter if it exists
        if (studentId) {
          url += `?student_id=${studentId}`;
        }
      }

      // Make the API request using the constructed URL
      const response = await _request("get", url, "STUDENT");
      const data = response.data;
      setOriginalDataArray(data);
      setFilterData(data);
      const uniqueExamSlugs = new Set();
      data.forEach((item: any) => {
        const examSlug = item.exam.slug;
        uniqueExamSlugs.add(examSlug);
      });
      setOriginalData(
        Array.from(uniqueExamSlugs).map((slug) =>
          data.find((item: any) => item.exam.slug === slug)
        )
      );
      // setOriginalData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    localStorage.setItem("userType", "STUDENT");
    fetchFilterData();
  }, []);

  const handleFilterClick = async (exam: string) => {
    try {
      const response = await _request(
        "get",
        `app/test-series/filter?slug=${exam}`,
        "STUDENT"
      );
      const data = response.data;
      setSelectedFilter(exam);
      setFilterData(data);
      setIsFilterSelected(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleClearAll = () => {
    setFilterData(originalDataArray);
    setSelectedFilter(null);
    setIsFilterSelected(false);
  };

  return (
    <div>
      <SearchHeader />
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="categories">
              <aside className="courses__sidebar">
                <div className="courses-widget">
                  <h4 className="widget-title">Categories</h4>
                  {isFilterSelected && (
                    <button onClick={handleClearAll}>Clear All</button>
                  )}
                  <hr />
                  <div className="courses-cat-list">
                    <ul className="list-wrap">
                      {originalData.map((elem, index) => (
                        <li key={index}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={elem.exam.slug === selectedFilter}
                              onChange={() => handleFilterClick(elem.exam.slug)}
                              id={`cat_${index}`}
                            />

                            <label
                              className="form-check-label"
                              onClick={() => handleFilterClick(elem.exam.slug)}
                            >
                              {elem.exam.slug}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div className="col-md-8">
            <div className="courses-top-wrap courses-top-wrap">
              {/* Your top wrap content goes here */}
            </div>

            {/* products cards will come here */}
            <div className="product-cards row">
              {filterData.map((elem, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <TestSeriesCard data={elem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
