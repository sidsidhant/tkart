import React, { useEffect, useState } from "react";
import { _request } from "src/utils/request.util";
// replace 'your-api-utils' with the actual path to your API utility file

const Payment = () => {
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    const orderid = localStorage.getItem("orderId"); // Use getItem instead of direct access
    //@ts-ignore
    setOrderId(orderid);
  }, []);

  const onSucces = async () => {
    try {
      const JSON = {
        order_id: orderId,
      };
      const response_one = await _request(
        "post",
        `app/cart/payment-success`,
        JSON,
        "STUDENT"
      );
      // Handle success response as needed
    } catch (error) {
      console.error("Error making success API call:", error);
      // Handle error as needed
    }
  };

  const onFail = async () => {
    try {
      const JSON = {
        order_id: orderId,
      };
      const response_one = await _request(
        "post",
        `app/cart/payment-failure`,
        JSON,
        "STUDENT"
      );
      // Handle failure response as needed
    } catch (error) {
      console.error("Error making failure API call:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="group-button ">
      <button onClick={onSucces}>Success</button>
      <button onClick={onFail}>Failure</button>
    </div>
  );
};

export default Payment;
