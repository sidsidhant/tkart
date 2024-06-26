import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import icon02 from "../../../../public/assets/images/icon-02.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function TestSeriesCard(props: any) {
  const data = props?.data;
  const router = useRouter();
  const path = usePathname();
  const [time, setTime] = useState("");

  const testSeriesCard = (hash: string) => {
    // console.log(path,alreadyBuy)/
    localStorage.setItem("path", `/test-series/${hash}`);
    if (
      path === "/student-profile" ||
      path === "/test-series" ||
      path === "/"
    ) {
      const studentId = localStorage.getItem("studentId");
      router.push(`/test-series/${hash}?student_id=${studentId}`);
    } else {
      router.push(`/test-series/${hash}`);
    }
  };
  useEffect(() => {
    const duration = moment.duration(data.total_duration, "minutes");
    const formattedTime = moment.utc(duration.asMilliseconds()).format("HH:mm");
    setTime(formattedTime);
  }, [time, data.total_duration]);

  return (
    <div
      className="card card-hover"
      style={{ cursor: "pointer", height: "100%" }}
      onClick={() => testSeriesCard(data?.hash)}
    >
      {/* <Link */}
      {/* href={`/test-series/${data?.hash}`} */}
      {/* className="card-img-top" */}

      {/* // > */}
      <div className="test-img-box">
        <img
          src={data?.cover_photo}
          alt={data?.title}
          className="rounded-top-md card-img-top "
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* </Link> */}
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-info-soft">{data?.exam?.exam}</span>
          {/* <Link href={`/test-series/${data?.hash}`} className="text-muted fs-5"> */}
          <i className="fe fe-heart align-middle"></i>
          {/* </Link> */}
        </div>
        <h4 className="mb-1 text-truncate-line-2 ">
          {/* <Link href={`/test-series/${data?.hash}`} className="text-inherit"> */}
          <p className="test-title"> {data?.title}</p>
          {/* </Link> */}
        </h4>

        <small>By: {data?.academy?.display_name}</small>
        <div className="d-flex align-items-center gap-1 home-card">
          <div className="icons-web">
            <Image src={icon02} alt="" />
          </div>
          <small>
            <b>Total Time:</b>
          </small>{" "}
          {time}
        </div>
        <div className="test-count">
          <small className="total-count">{data?.total_tests} Total Test</small>{" "}
          <span>|</span>{" "}
          <small className="free-test-count">
            {data?.free_tests} Free Test
          </small>
        </div>

        {data && data.ratings && (
          <div className="lh-1 mt-2">
            <span className="rating-star">
              <i className="fa fa-star mx-1"></i>
              <i className="fa fa-star mx-1"></i>
              <i className="fa fa-star mx-1"></i>
              <i className="fa fa-star mx-1"></i>
              <i className="fa fa-star mx-1"></i>
            </span>
            <span className="text-warning ms-2">4.5</span>
            <span className="fs-6 text-muted ms-1">(9,300)</span>
          </div>
        )}
      </div>
      <div className="card-footer pl-16">
        {/* {!props.alreadyBuy && ( */}
        <div className="row align-items-center g-0">
          <div className="col">
            {/* <Link href={`/test-series/${data?.hash}`} className="text-inherit"> */}
            <div>
              {data?.price === 0 ? (
                <button className="start-test">
                  <i className="fa fa-gift" aria-hidden="true"></i> Take Free
                  Test
                </button>
              ) : data?.is_purchased ? (
                <>
                  <button className="start-test">
                    <i className="fa fa-gift" aria-hidden="true"></i> Attempt
                    Test
                  </button>
                </>
              ) : (
                <button className="start-test">
                  <i className="fa fa-shopping-cart"></i> Buy Now
                </button>
              )}
            </div>
            {/* </Link> */}
          </div>

          <div className="col-auto">
            <p className="mb-0 buy-text">
              {data?.price === 0 ? (
                <span className=""></span>
              ) : data?.is_purchased ? (
                <></>
              ) : (
                "₹ " + data?.price
              )}
            </p>
          </div>
        </div>
        {/* // )} */}
        {/* {props?.alreadyBuy && (
          <button className="start-test">
            <i className="fa fa-gift" aria-hidden="true"></i> Attempt Test
          </button>
        )} */}
      </div>
    </div>
  );
}
