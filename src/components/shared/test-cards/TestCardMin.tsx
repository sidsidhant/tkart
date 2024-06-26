import { Button } from "@styles/shared.style";
import React from "react";

export default function TestCardMin() {
  return (
    <>
      <div
        id="test-card"
        style={{ padding: "5px" }}
        className="row d-flex justify-content-around align-items-center"
      >
        <div className="col-md-9">
          <div className="d-flex flex-column">
            <h2 className="test">
              {/* JEE Advanced Full Length complete Mock Test */}
            </h2>
            <div className="d-flex justify-content-start align-items-center">
              <i className="bi bi-people">128k Students</i>
              <i className="bi bi-list"> 25 Total tests</i>
              <i className="bi bi-shop-window"> By TestKart Academy</i>
            </div>
          </div>
        </div>
        <Button
          color={"#ffffff"}
          background={"#ed7d39"}
          border={[1, "#ed7d39"]}
          hover={["#ed7d39", "#ffffff"]}
          width={"80px"}
        >
          View
        </Button>
      </div>
    </>
  );
}
