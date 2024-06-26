import ExamCard from "@components/exam-card/ExamCard";
import React from "react";
import { SubText, Title } from "@styles/shared.style";

export default function ExamsBoard(props: { category: any }) {
  const category = props.category;
  return (
    <section className="py-5">
      <div className="container">
        <Title>{category?.category}</Title>
        <SubText className="mb-5">{category?.description}</SubText>
        <div className="container p-0 m-0">
          <div className="row gx-1">
            {category.exams.map((exam: any, val: number) => {
              return (
                <div className="col-md-3" key={val}>
                  <ExamCard exam={exam}></ExamCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
