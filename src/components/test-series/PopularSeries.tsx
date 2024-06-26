import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import React from "react";
import { Button, SubText, Title } from "@styles/shared.style";
import Link from "next/link";

export default function PopularSeries(props: any) {
  const data = props.data;
  return (
    <section className="py-4">
      <div className="container">
        <div className="section-title">
          <h2>Popular exams</h2>
          <p className="test-subtitle text-center">
            Check out the test series offered for popular exams
          </p>
        </div>
        <div className="row d-flex justify-content-start gap-2">
          {data &&
            data.map((item: any, index: number) => {
              return (
                <div className="col-md-3 exam-type" key={index}>
                  <Link href={item?.slug} key={index} className="exam-type">
                    <>
                      <div className="prd-icon add short">
                        <img
                          src={
                            item?.exam_content?.logo ||
                            "https://testkart.in/fav.png"
                          }
                          width="80"
                          alt={item?.exam}
                          className="m-auto"
                        />
                      </div>
                      <div className="cover">
                        <div className="my-2">{item?.exam}</div>
                      </div>
                    </>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
