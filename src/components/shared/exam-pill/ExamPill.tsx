import React from "react";
import { Pill, Pills } from "./ExamPill.style";

export default function ExamPill(props: { categories: any[] }) {
  const categories = props.categories;
  return (
    <section className="section-bg">
      <div className="container">
        <Pills className="row">
          {categories.map((category: any, val: any) => {
            return <Pill key={val}>{category.category}</Pill>;
          })}
        </Pills>
      </div>
    </section>
  );
}
