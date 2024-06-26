import { Button } from "@styles/shared.style";
import React, { useEffect, useMemo, useState } from "react";
import icon02 from "../../../../public/assets/images/icon-02.svg";
import Image from "next/image";
import icon01 from "../../../../public/assets/images/icon-01.svg";
import { useRouter } from "next/router";
import { FaLock, FaLockOpen } from "react-icons/fa";

export default function TestCard(props: {
  test: any;
  type: string;
  test_series: string;
  alreadyBuy: boolean;
}) {
  const test = props?.test;
  // const is_purchased = props?.is_purchased;

  const type = props?.type;
  const test_series: any = props?.test_series;
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(test);
  }, [data]);
  const router = useRouter();
  const open_test = () => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (localStorage["token"]) {
        if (hostname === "localhost") {
          window.open(
            `https://testkart.in/exam-portal/instructions/?test_id=${test.test_id}`,
            "Popup"
          );
        } else {
          window.open(
            `https://testkart.in/exam-portal/instructions/?test_id=${test.test_id}`,
            "Popup"
          );
        }
      } else {
        router.push("/login");
      }
    }
  };

  const checkout = (id: any) => {
    if (localStorage["token"]) {
      router.push(`/checkout/${id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div
        id="test-card"
        className="row d-flex justify-content-around align-items-center "
      >
        <div className="col-md-9">
          <div className="d-flex flex-column width-fit-content">
            `{" "}
            {type === "FREE" ? (
              <div className="free width-fit-content">{test?.title}</div>
            ) : test_series?.is_purchased ? (
              <div className="free ">{test?.title}</div>
            ) : (
              <div className="free paid">{test?.title}</div>
            )}
            `
            <div className="d-flex justify-content-start align-items-center gap-3">
              <div className="icons-web">
                <Image src={icon01} alt="" />
              </div>
              {test.subjects.map((elem: any) => (
                <div className="" key={elem.id}>
                  <p> {elem?.name}</p>
                  <p> {elem?.total_questions}</p>
                </div>
              ))}

              <div className="icons-web">
                <Image src={icon02} alt="" />
              </div>

              {/* <span className="mx-2">{parsedData[11][0]} question</span> */}

              {/* <i className="bi bi-file-earmark"> 360 marks</i> */}
              <span className="subjectlist">{test?.duration} minutes</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-button">
          {type === "FREE" ? (
            <Button
              color={"#ffffff"}
              background={"#25CD71"}
              border={[1, "#25CD71"]}
              hover={["#25CD71", "#ffffff"]}
              width={"100px"}
              onClick={open_test}
            >
              <FaLockOpen className="mr-1" /> Start
            </Button>
          ) : test_series?.is_purchased ? (
            <Button
              color={"#ffffff"}
              background={"#25CD71"}
              border={[1, "#25CD71"]}
              hover={["#25CD71", "#ffffff"]}
              width={"fit-content"}
              onClick={open_test}
            >
              <FaLockOpen className="mr-1" /> Start
            </Button>
          ) : (
            <Button
              color={"#ffffff"}
              background={"#ed7d39"}
              border={[1, "#ed7d39"]}
              hover={["#ed7d39", "#ffffff"]}
              width={"fit-content"}
              onClick={() => checkout(test_series?.test_series_id)}
            >
              <FaLock className="mr-1" /> Unlock
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
