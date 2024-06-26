import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
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
  test_series_id: any;
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
  const [checkoutData, setCheckoutData] = useState<any>();

  useEffect(() => {
    const storedItem = localStorage.getItem("buyingId");
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      setData(parsedItem);
      setExamName(parsedItem?.exam.exam);
    }
    const callPreCheckout = async (testId: any) => {
      try {
        const jsonData: any = {
          test_series_id: testId,
        };
        const response = await _request(
          "post",
          "app/cart/pre-checkout",
          jsonData,
          "STUDENT"
        );
        setCheckoutData(response.data);
        localStorage.setItem("checkOut", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error calling pre-checkout API:", error);
      }
    };
    const test_id = router?.query?.checkout;
    callPreCheckout(test_id);
  }, [router?.query?.checkout]);

  const checkout = async (id: any) => {
    try {
      const test_id = id;
      const testDetails = [{ test_series_id: test_id }];
      const student_id = localStorage["studentId"];
      const jsonData = {
        student_id: student_id,
        items: testDetails,
      };

      await _request("post", `app/cart/checkout`, jsonData, "STUDENT")
        .then((res) => {
          localStorage.setItem("payInfo", JSON.stringify(res.data));
        })
        .then(() => {
          handlePayment();
        });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const onFail = async (orderId: any) => {
    try {
      const JSON_data = {
        order_id: orderId,
      };
      const response_one = await _request(
        "post",
        `app/cart/payment-failure`,
        JSON_data,
        "STUDENT"
      );
      localStorage.setItem("paymentInfo", JSON.stringify(response_one));
      //@ts-ignore
      if (response_one?.success) {
        router.push(
          "/paymentfailed"
          // ?paymentid=" + response_one.razorpay_payment_id
        );
      }
      // Handle failure response as needed
    } catch (error) {
      console.error("Error making failure API call:", error);
      // Handle error as needed
    }
  };

  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(() => {
    const initiatePayment = JSON.parse(localStorage.getItem("payInfo") || "");
    const checkoutData = JSON.parse(localStorage.getItem("checkOut") || "");
    localStorage.removeItem("payInfo");
    localStorage.removeItem("checkOut");
    const options: RazorpayOptions = {
      // key: `${process.env.RZPAY_TEST_KEY}`,
      key: `${process.env.RZPAY_LIVE_KEY}`,
      amount: initiatePayment?.razorpayAmount,
      currency: "INR",
      name: "TestKart",
      description: checkoutData?.test_series_name ?? "Test Transaction",
      image:
        "https://testkart.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTestKart-logo.9511065a.png&w=1080&q=75",
      order_id: initiatePayment?.razorpayOrderId,
      handler: async (response) => {
        try {
          const JSON_data = {
            payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          };
          const data = await _request(
            "post",
            `app/cart/payment-success`,
            JSON_data,
            "STUDENT"
          );
          localStorage.setItem("paymentInfo", JSON.stringify(data));
          //@ts-ignore
          if (data?.success) {
            router.push(
              "/paymentsuccess?paymentid=" + response.razorpay_payment_id
            );
          }
        } catch (error) {
          // onFail(initiatePayment?.razorpayOrderId);
          console.error("An error occurred:", error);
        }
      },
      prefill: {
        name: checkoutData?.name,
        email: checkoutData?.email,
        contact: checkoutData?.mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ed7d39",
      },
      // callback_url: "https://testkart.in/callback_url",
      // redirect: true,
    };

    const rzpay = new Razorpay(options);
    rzpay.on("payment.failed", function (response: any) {
      onFail(initiatePayment?.orderId);
    });
    rzpay.open();
  }, [Razorpay]);

  return (
    <div>
      <section className="course-content checkout-widget">
        <div className="container bg-light-grey ">
          <div className="row justify-content-between">
            <div
              className="col-md-7 p-4"
              style={{ backgroundColor: "#fff", borderRadius: "16px" }}
            >
              <div className="plan-header checkout_title">
                <h4>Billing Details</h4>
              </div>
              <hr />

              <div className="billing-form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-control-label mb-2">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your first Name"
                          value={checkoutData?.name}
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-control-label  mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your last Name"
                          value={checkoutData?.name}
                        />
                      </div>
                    </div> */}
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-control-label  mb-2">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Phone"
                          value={checkoutData?.mobile}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="form-control-label  mb-2">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={checkoutData?.email}
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-md-4 p-4"
              style={{ backgroundColor: "#fff", borderRadius: "16px" }}
            >
              <div className=" theiaStickySidebar ">
                <div className="student-widget select-plan-group">
                  <div className="student-widget-group">
                    <div className="plan-header">
                      <h4>Order Summary</h4>
                    </div>
                    <hr />
                    <div className="">
                      <p>
                        <strong> Test Series Name:</strong>{" "}
                        <span>{data?.title}</span>{" "}
                      </p>
                      <hr />
                      <p>
                        <strong>Exam Name:</strong> <span>{examName}</span>{" "}
                      </p>
                      <hr />
                      <p>
                        <strong>Total Test:</strong>{" "}
                        <span> {data?.total_tests} </span>{" "}
                      </p>
                      <hr />
                      <p>
                        <strong>Created By:</strong>{" "}
                        <span>{data?.academy?.display_name}</span>{" "}
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
                        <input
                          type="text"
                          placeholder="Enter Coupon Code"
                          className="form-control"
                        />
                        <button className="btn btn-orange">Apply</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="plan-header">
                    <button
                      className="btn testkart-btn btn-block"
                      onClick={() => checkout(router?.query?.checkout)}
                    >
                      Proceed to Pay
                    </button>
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
