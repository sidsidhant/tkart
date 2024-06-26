import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function StudentHeader() {
  const router = useRouter();
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="/">
            <img
              src="/images/logos/testkart.svg"
              alt=""
              className="img-fluid"
            />
          </a>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link href="/">
                  <a
                    onClick={() => router.push("/")}
                    className="nav-link scrollto"
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/test-series">
                  <a
                    onClick={() => router.push("/test-series")}
                    className="nav-link scrollto"
                  >
                    Test Series
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/exams">
                  <a
                    onClick={() => router.push("/exams")}
                    className="nav-link scrollto"
                  >
                    My Tests
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu  */}
          <div className="dropdown">
            <i
              className="bi bi-list mobile-menu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={() => router.push("/")}>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => router.push("/test-series")}
                >
                  Test Series
                </a>
              </li>
              <li>
                <a className="dropdown-item">My Tests</a>
              </li>
              <li>
                <a className="dropdown-item">My Results</a>
              </li>
            </ul>
          </div>

          {/* students menu  */}
          <div className="dropdown">
            <i
              className="bi bi-person-circle nav-icons"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Billings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
