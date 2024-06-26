import {
  BuyNow,
  Divider,
  Free,
  Meta,
  Stats,
  Students,
  Total,
  Vednor,
  ViewButton,
} from "@components/test-series-cards/TestSeriesCard.style";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import imge from "../../../public/assets/images/hero-img.png";
// import { useRouter } from "next/router";
import elipses from "public/images/ellipse.png";
import successImg from "public/images/success.png";
import { _request } from "src/utils/request.util";
import AlertDismissibleExample from "src/newComponents/alerts";
import AlertPopup from "src/newComponents/alerts";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { addToCart, getCartData } from "src/redux/slices/cartAction";

export default function SeriesHeader(props: any) {
  const router = useRouter();
  const test_series = props.data;
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const testSeriesString = JSON.stringify(test_series);
    localStorage.setItem("buyingId", testSeriesString);
  }, [test_series]);

  const postApiCall = async (id: number, quantity: number) => {
    setAlertMessage("");
    setAlertColor("");
    const data = {
      test_series_id: id,
      quantity: quantity,
    };
    const user_type = "STUDENT";

    try {
      const response = await _request(
        "post",
        `app/cart/add-to-cart`,
        data,
        user_type
      );

      if (response?.success) {
        const updatedCartItem = localStorage.getItem("cartItem")
          ? parseInt(localStorage.getItem("cartItem")!) + quantity
          : quantity;

        localStorage.setItem("cartItem", updatedCartItem.toString());
        localStorage.setItem("tab", "cart");
        router.push("/student-profile");
      } else if (!response?.success) {
        if (localStorage["token"]) {
          localStorage.setItem("tab", "cart");
          router.push("/student-profile");
        } else {
          router.push("/login");
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    if (
      test_series &&
      test_series.price !== undefined &&
      test_series.total_tests !== undefined
    ) {
      const calculatedPrice = test_series.price / test_series.total_tests;
      setPrice(calculatedPrice);
    }
  }, [test_series?.id]);

  const checkout = () => {
    if (localStorage["token"]) {
      router.push("/checkout");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="home-slide test-series-hero">
      <Container>
        <Row className="align-items-center g-0 justify-content-center">
          <div
            className="col-lg-6 order-lg-1 d-flex flex-column justify-content-center"
            style={{ zIndex: "999999" }}
          >
            <div className="d-flex pb-3">
              <span className="badge bg-info-soft">
                {test_series?.exam?.exam}
              </span>
            </div>
            <h1 className="singleSeriesTitle">{test_series?.title}</h1>
            <Vednor className="py-3">
              {/* <img src={test_series?.cover_photo} alt="" /> */}
              <div>
                <h3>Created by:</h3>
                <h4
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    router.push(`/u/${test_series?.academy?.slug}`)
                  }
                >
                  {test_series?.academy?.display_name}
                </h4>
              </div>
            </Vednor>
            <Stats className="text-start">
              <Total> {test_series?.total_tests} Total tests</Total>
              <Divider className="px-2">|</Divider>
              <Free> {test_series?.free_tests} Free Tests</Free>
            </Stats>

            <div className="row py-3 d-flex align-items-center">
              {!test_series?.price && (
                <div className="col-md-6">
                  {/* <ViewButton>Get started for free</ViewButton> */}
                </div>
              )}
              <div className="col-md-6">
                {test_series?.price === 0 ? (
                  ""
                ) : (
                  <BuyNow>
                    <input
                      style={{ border: "none", background: "transparent" }}
                      type="text"
                      value={`${price.toFixed(0)} / Test`}
                      disabled
                    />

                    <button onClick={() => checkout()}>BUY</button>
                  </BuyNow>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 justify-content-end d-flex ">
            <Image src={successImg} alt="test-series" />
          </div>
        </Row>
        {/* <div className="main-banner-ellipse">
          <Image src={elipses} alt="main-banner" />
        </div> */}

        <AlertPopup message={alertMessage} color={alertColor} />
      </Container>
      ;
    </section>
  );
}
