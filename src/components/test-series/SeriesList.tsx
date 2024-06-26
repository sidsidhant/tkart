import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

export default function SeriesList(props: any) {
  const data = props.data;

  const ref = useRef(null);
  const scroll = (scrollOffset: any) => {
    // @ts-ignore
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <section className="py-5 d-none">
      <div className="container section-title">
        <h2 className="pb-1 mb-4">{data?.exam}</h2>
        <div className="d-flex">
          <div onClick={() => scroll(-20)} className="button-control">
            <div className="slider-btn">
              <AiOutlineLeftCircle color="#ed7d39" size={30} />
            </div>
          </div>
          <div className="cards-row " ref={ref}>
            {data?.test_series.map((item: any, index: number) => {
              return (
                <div key={index} className="row-cards">
                  <TestSeriesCard data={item} />
                </div>
              );
            })}
          </div>
          <div onClick={() => scroll(20)} className="button-control">
            <div className="slider-btn">
              <AiOutlineRightCircle color="#ed7d39" size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
