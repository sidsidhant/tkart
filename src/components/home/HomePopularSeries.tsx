import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import { useRouter } from "next/router";
import React from "react";

export default function HomePopularSeries(props: any) {
  const series = props.test_series;
  const router = useRouter();
  return (
    <section id="popular-series">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
          <div className="section-title">
          <div className="section-header">
            <div className="section-sub-head text-center w-100">
              <h2 className="">Featured Test Series</h2>
            </div>
          </div>
          <div className="section-text">
            <p className="text-center">
              Discover most popular test series for SSC, Banking, Railway, NEET,
              IIT, Mains & Advance, and other competitive exams.
            </p>{" "}
          </div>
        </div>
          </div>
        </div>
        <div className="row" style={{rowGap:"20px"}}>
          {series?.map((item: any, index: number) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <TestSeriesCard data={item}></TestSeriesCard>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 text-center">
            <div className="button">
              <button onClick={() => router.push(`/test-series`)}>
                Explore more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
