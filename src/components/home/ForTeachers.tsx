import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import teacher from "../../../public/assets/images/about.png";

export default function ForTeachers() {
  return (
    <>
      {/* <section id="teachers">
        <div className="feature-head text-center section-title">
          <h2>
            Test<span>Kart</span> For Teachers
          </h2>
          <div className="section-text-two">
            Use your expertise to create test series and reach millions of
            students through TestKart
          </div>
        </div>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-3">
              <div className="teacher-box">
                <div className="teacher">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <div className="name">
                    <h3>Harper Smith</h3>
                  </div>
                  <div className="coaching">
                    <h3>TestKart Academy</h3>
                  </div>
                  <div className="stats">
                    <h3>23 Test Series | 450 Tests</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teacher-box">
                <div className="teacher">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <div className="name">
                    <h3>Harper Smith</h3>
                  </div>
                  <div className="coaching">
                    <h3>TestKart Academy</h3>
                  </div>
                  <div className="stats">
                    <h3>23 Test Series | 450 Tests</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teacher-box">
                <div className="teacher">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <div className="name">
                    <h3>Harper Smith</h3>
                  </div>
                  <div className="coaching">
                    <h3>TestKart Academy</h3>
                  </div>
                  <div className="stats">
                    <h3>23 Test Series | 450 Tests</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="teacher-box">
                <div className="teacher">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="meta">
                  <div className="name">
                    <h3>Harper Smith</h3>
                  </div>
                  <div className="coaching">
                    <h3>TestKart Academy</h3>
                  </div>
                  <div className="stats">
                    <h3>23 Test Series | 450 Tests</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 join-btn">
              <button className="btn-active">JOIN TESTKART</button>
            </div>
            <div className="col-md-6 know-more-btn">
              <button className="btn-inactive">Know more</button>
            </div>
          </div>
        </div>
      </section> */}
      <div className="row">
        <div className="col-md-6">
          <div className="teacher-image">
            <Image src={teacher} alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="join-mentor">
            <h2>
              Test<span style={{ color: "#ed7d39" }}>Kart</span> for Teachers
            </h2>
            <p>
              Use your expertise to create test series and reach millions of
              students through TestKart
            </p>
            <ul className="course-list">
              <li>
                <FaCheckCircle
                  color="#ed7d39"
                  style={{ marginRight: "15px" }}
                />
                Discover new students from all over India
              </li>
              <li>
                <FaCheckCircle
                  color="#ed7d39"
                  style={{ marginRight: "15px" }}
                />
                Monetize your Test Series
              </li>
              <li>
                <FaCheckCircle
                  color="#ed7d39"
                  style={{ marginRight: "15px" }}
                />
                Create Test Series with Ease
              </li>
              <li>
                <FaCheckCircle
                  color="#ed7d39"
                  style={{ marginRight: "15px" }}
                />
                Detailed Analysis report and support
              </li>
            </ul>
            <div className="button">
              <Link href="/teachers">
                <button>Join Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
