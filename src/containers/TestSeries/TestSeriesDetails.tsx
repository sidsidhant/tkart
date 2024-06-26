import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import testkartImage from "../../../public/assets/images/card.png";
import { GiTakeMyMoney } from "react-icons/gi";
import {
  MdAccessTimeFilled,
  MdOutlineCreate,
  MdOutlineMenuBook,
} from "react-icons/md";
import { _request } from "src/utils/request.util";
import WhyTestkart from "@components/why-testkart/WhyTestkart";
import Faqs from "@components/faqs/Faqs";
import { CiDiscount1 } from "react-icons/ci";
import TestList from "@series/TestList";
import { useRouter } from "next/router";

const TestSeriesDeatils = ({ data }: any) => {
  const test_series = data?.test_series;

  const router = useRouter();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const testSeriesString = JSON.stringify(test_series);
    localStorage.setItem("buyingId", testSeriesString);
  }, [test_series]);

  const checkout = (id: any) => {
    if (localStorage["token"]) {
      router.push(`/checkout/${id}`);
    } else {
      router.push("/login");
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

  const navigateToAcademy = () => {
    const studentId = localStorage.getItem("studentId");
    const isLoggedIn = !!localStorage.getItem("token");

    if (isLoggedIn && studentId) {
      router.push({
        pathname: `/u/${test_series?.academy?.slug}`,
        query: { student_id: studentId },
      });
    } else {
      router.push(`/u/${test_series?.academy?.slug}`);
    }
  };
  return (
    <>
      <div className="test-series-container">
        <Container>
          <div className="test-series-details ">
            <h2>{test_series?.exam?.exam}</h2>
            <h1>{test_series?.title}</h1>
            <div className="">
              <div className="academy-details">
                Created by:{" "}
                <h6 style={{ cursor: "pointer" }} onClick={navigateToAcademy}>
                  {test_series?.academy?.display_name}
                </h6>
              </div>
            </div>

            <div className="test-details">
              <div className="free-tests">
                <span>{test_series?.total_tests}</span> Total Tests | {"   "}
                <span>{test_series?.free_tests}</span> Free Tests
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row style={{ height: "100%", width: "100%" }}>
          <Col lg={8}>
            <TestList data={data} />
          </Col>
          <Col lg={4}>
            <div className="test-series-card">
              <div className="cover-image">
                <Image
                  src={test_series?.cover_photo}
                  alt="TestKart cover Image"
                  width={1000}
                  height={500}
                />
              </div>
              <div className="card-content ">
                <span>{test_series?.exam?.exam}</span>
                <label>{test_series?.title}</label>
                <div className="">
                  <div className="academy-details">
                    Created by:{" "}
                    <h6
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push(`/u/${test_series?.academy?.slug}`)
                      }
                    >
                      {test_series?.academy?.display_name}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="test-series-price">
                <hr />
                <div className="content">
                  <label>
                    <GiTakeMyMoney size={26} /> <b>Price</b>
                  </label>
                  <span>
                    {test_series?.price === 0 ? (
                      <>Free</>
                    ) : (
                      <>₹ {test_series?.price}</>
                    )}
                  </span>
                </div>
                <hr />
                <div className="content normal">
                  <label>
                    <MdOutlineCreate size={26} /> <b>Created By</b>
                  </label>
                  <span> {test_series?.academy?.display_name}</span>
                </div>
                <hr />
                <div className="content normal">
                  <label>
                    <MdAccessTimeFilled size={26} /> <b>Total Time</b>
                  </label>
                  <span>{test_series?.total_duration} mins</span>
                </div>
                <hr />
                {test_series?.price === 0 ? (
                  <></>
                ) : test_series?.is_purchased ? (
                  <></>
                ) : (
                  <button
                    className="btn testkart-btn w-100 my-2"
                    onClick={() => checkout(test_series?.test_series_id)}
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TestSeriesDeatils;
