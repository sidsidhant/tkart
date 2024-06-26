import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Exam } from "./ExamCard.style";

export default function ExamCard(props: { exam: any }) {
  const router = useRouter();
  const exam = props.exam;

  return (
    <div className="mainCard">
      <div
        className="d-flex examCard"
        onClick={() => router.push(`/exams/${exam.slug}`)}
      >
        <img
          src={exam.exam_content?.logo || "/assets/images/school.svg"}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <div className="examDesc">{exam.exam}</div>
    </div>
  );
}
