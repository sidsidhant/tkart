import { useRouter } from "next/router";
import React from "react";
import {
  BuyNow,
  Divider,
  Free,
  Meta,
  Poster,
  SeriesName,
  Stats,
  Students,
  TestSeries,
  Total,
  Vednor,
  ViewButton,
} from "./TestSeriesCard.style";
import { BsChatLeft, BsClock, BsGraphUp } from "react-icons/bs";
import { AiFillGift } from "react-icons/ai";

export default function TestSeriesCardMin() {
  const router = useRouter();
  return (
    <>
      <div className="card-test col-md-3">
        <a href="" className="card-inner">
          <div className="test-series-heading">SSC CGL Tier2</div>
          <div className="testinfo-row">
            <BsGraphUp size={12} className="me-1" />{" "}
            <span className="txt">100 Marks</span>
            <BsChatLeft size={12} className="me-1" />
            <span className="txt">100 Marks</span>
            <BsClock size={12} className="me-1" />{" "}
            <span className="txt">100 Marks</span>
          </div>
          <button className="btn btn-xs btn-tblue">
            {" "}
            <AiFillGift size={12} className="me-1" /> Take a free Test
          </button>
        </a>
      </div>
    </>
  );
}
