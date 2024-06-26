import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { _request } from "src/utils/request.util";

// Define types for the expected data structure
interface TestSeries {
  title: string;
  total_tests: number;
  academy: {
    display_name: string;
  };
  price: number;
  discount: number;
  test_series_id: number;
}

interface TestData {
  test_series: TestSeries[];
  exam: {
    exam: string;
  };
}

const Checkout: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<TestSeries | null>(null);
  const [examName, setExamName] = useState<string | null>(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("buyingId");
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);

      // const examTitle = parsedItem?.exam;
      setData(parsedItem);
      setExamName(parsedItem?.exam.exam);
      // const actualData = parsedItem[0].test_series[0];
      // console.log("🚀 ~ file: checkout.tsx:31 ~ useEffect ~ actualData:", actualData)
      // setData(actualData);
    }
  }, []);

  const checkout = async () => {
    try {
      const test_id = data?.test_series_id;

      const testDetails = [{ test_series_id: test_id }];
      const student_id = localStorage["studentId"];
      const jsonData = {
        student_id: student_id,
        items: testDetails,
      };

      const response = await _request(
        "post",
        `app/cart/checkout`,
        jsonData,
        "STUDENT"
      );
      const res = response.data.order_id;
      localStorage.setItem("orderId", res);
      router.push("/payment");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <section className="course-content checkout-widget">
        <div className="container bg-light-grey " >
          <div className="row justify-content-between">
          <div className="col-md-7 p-4" style={{ backgroundColor: "#fff", borderRadius: "16px"}}>
              <div className="plan-header checkout_title">
                <h4>Billing Details</h4>
              </div>
              <hr />
          

              
            <div className="billing-form">
            <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your first Name"
                              // value={profiledata?.name}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label  mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your last Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label  mb-2">Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label className="form-control-label  mb-2">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your Email"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
            </div>
          </div>
          <div className="col-md-4 p-4" style={{ backgroundColor: "#fff", borderRadius: "16px"}}>
          <div className=" theiaStickySidebar ">
            <div className="student-widget select-plan-group">
              <div className="student-widget-group">
                <div className="plan-header">
                  <h4>Order Summary</h4>
                    </div>
                    <hr />  
                <div className="">
                  <p>
                   <strong> Test Series Name:</strong> <span>{data?.title}</span>{" "}
                      </p>
                      <hr />
                  <p>
                    <strong>Exam Name:</strong> <span>{examName}</span>{" "}
                      </p>
                      <hr />
                  <p>
                    <strong>Total Test:</strong> <span> {data?.total_tests} </span>{" "}
                      </p>
                      <hr />
                  <p>
                    <strong>Created By:</strong> <span>{data?.academy?.display_name}</span>{" "}
                      </p>
                      <hr />
                </div>
              </div>
            </div>
            <div className="student-widget select-plan-group student-widget-group mt-4 p-3 d-none">
              <div className="input-group">
                <input type="text" placeholder="Enter Coupon Code" />
                <button>Apply</button>
              </div>
            </div>
            <div className="student-widget select-plan-group student-widget-group">
              <div className="pricing">
                    <div className="total-amount d-flex justify-content-between align-items-center">
                    <p>
                  <strong>Total Amount:</strong> 
                    </p>
                    <p>
                    <span>₹ {data?.price}</span>
                    </p>
              </div>
                    <div className="discount d-flex justify-content-between align-items-center">
                    <p>
                  <strong>Discount : </strong>
                    </p>
                    <p>
                    <span>₹ {data?.discount}</span>
                    </p>
              </div>
                    <div className="payable-amount d-flex justify-content-between align-items-center">
                    <p>
                  <strong>Payable Amount :</strong> 
                    </p>
                    <p>
                  {/* @ts-ignore    */}
                    <span>₹ {data?.price - data?.discount}</span>
                      </p>
                     
                    </div>
                    <div className="student-widget select-plan-group student-widget-group">
              <div className="input-group">
                <input type="text" placeholder="Enter Coupon Code" className="form-control" />
                <button className="btn btn-orange">Apply</button>
              </div>
            </div>
                  </div>
                  <hr />
              <div className="plan-header">
                <button className="btn testkart-btn btn-block" onClick={() => checkout()}>Proceed to Pay</button>
              </div>
            </div>
          </div>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Checkout;
