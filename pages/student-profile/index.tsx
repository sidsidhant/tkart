import Image from "next/image";
import React, { useEffect, useState } from "react";
import userProfile from "../public/assets/images/user11.jpg";
import userBg from "../public/assets/images/profile-bg.jpg";
import {
  FiClipboard,
  FiCreditCard,
  FiRefreshCw,
  FiSettings,
} from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { RxLockClosed } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdPersonAddAlt } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import Studentsettings from "./studentsettings";
import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import Wishlist from "./wishlist";
import TakenTest from "./taken-test";
import Timeline from "./timeline";
import { useRouter } from "next/router";
import { _request } from "src/utils/request.util";
const StudentProfile = () => {
  const router = useRouter();
  const [profiledata, setProfiledata] = useState();
  const [showData, setShowData] = useState("edit");
  // const [alreadyBuy, setAlreadyBuy] = useState(false)
  const [activeLink, setActiveLink] = useState("edit");
  const [userName, setUserName] = useState("");
  const [purchasedData, setPurchasedData] = useState([]);
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setShowData(storedTab);
      setActiveLink(storedTab);
    }

    const userName = localStorage.getItem("username");
    if (userName) {
      setUserName(userName);
    }
  }, []);

  async function getPurchasedCard() {
    try {
      const response = await _request(
        "get",
        `app/cart/purchased-items`,
        "STUDENT"
      );
   
      if (response?.success) {
        setPurchasedData(response?.data);
        // setAlreadyBuy(true)
      }
    } catch (error) {}
  }
  useEffect(() => {
    localStorage.setItem("userType", "STUDENT");
    getPurchasedCard();
  }, []);

  const handleClick = (tabName: string) => {
    setShowData(tabName);
    setActiveLink(tabName);
    localStorage.setItem("activeTab", tabName);
  };
  return (
    <div>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <div className="settings-widget dash-profile mb-3">
                <div className="settings-menu p-0">
                  <div className="profile-bg">
                    <h5>Beginner</h5>
                    <img
                      src="https://dreamslms.dreamguystech.com/html/assets/img/profile-bg.jpg"
                      alt=""
                    />
                    {/* <Image src={userBg} alt="" width={200} height={100}/> */}

                    <div className="profile-img">
                      <a href="student-profile.html">
                        <img
                          src="https://dreamslms.dreamguystech.com/html/assets/img/user/user11.jpg"
                          alt=""
                        />
                      </a>
                      {/* <Image src={userProfile} alt="" width={200} height={200}/> */}
                    </div>
                  </div>
                  <div className="profile-group">
                    <div className="profile-name text-center">
                      <h4>
                        <a href="student-profile.html">
                          {" "}
                          <>{userName}</>{" "}
                        </a>
                      </h4>
                      <p>Student</p>
                    </div>
                    <div className="go-dashboard text-center d-none">
                      <a href="" className="btn btn-primary">
                        Go to Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-widget account-settings">
                <div className="settings-menu">
                  <h3>ACCOUNT SETTINGS</h3>
                  <ul>
                    <li
                      className={`nav-item cursor-pointer ${
                        activeLink === "edit" ? "active" : ""
                      }`}
                      onClick={() => handleClick("edit")}
                    >
                      <a className="nav-link">
                        <span>
                          <FiSettings color="#FF875A" />
                        </span>
                        <i className="feather-settings"></i>
                        Edit Profile
                      </a>
                    </li>
                    <li
                      className={`nav-item cursor-pointer ${
                        activeLink === "test" ? "active" : ""
                      }`}
                      onClick={() => handleClick("test")}
                    >
                      <a className="nav-link">
                        <span>
                          <BsPerson color="#FF875A" />
                        </span>
                        <i className="feather-user"></i>
                        My Test
                      </a>
                    </li>
                    <li
                      className={`nav-item cursor-pointer ${
                        activeLink === "takenTest" ? "active" : ""
                      }`}
                      onClick={() => handleClick("takenTest")}
                    >
                      <a className="nav-link">
                        <span>
                          <FiRefreshCw color="#FF875A" />
                        </span>
                        <i className="feather-refresh-cw"></i>Test Taken
                      </a>
                    </li>
                    {/* <li
                      className={`nav-item cursor-pointer ${
                        activeLink === "cart" ? "active" : ""
                      }`}
                      onClick={() => handleClick("cart")}
                    >
                      <a className="nav-link">
                        <span>
                          <HiOutlineBell color="#FF875A" />
                        </span>
                        <i className="feather-bell"></i> My cart
                      </a>
                    </li> */}
                    {/* <li
                      className={`nav-item cursor-pointer ${
                        activeLink === "activity" ? "active" : ""
                      }`}
                      onClick={() => handleClick("activity")}
                    >
                      <a className="nav-link">
                        <span>
                          <RxLockClosed color="#FF875A" />
                        </span>
                        <i className="feather-lock"></i> Recent Activity
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-md-8">
              {showData === "edit" ? (
                <Studentsettings profiledata={profiledata} />
              ) : showData === "test" ? (
                <>
                  {purchasedData.length ? (
                    <div className="row " style={{rowGap:"20px"}}>
                      {purchasedData?.map((elem) => {
                        return (
                          <div
                            className="col-lg-4 col-md-6 col-sm-12 "
                            key={elem}
                          >
                            <TestSeriesCard data={elem} alreadyBuy />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <h3>No Test Series Found</h3>
                  )}
                </>
              ) : showData === "takenTest" ? (
                <>
                  <TakenTest />
                </>
              ) : showData === "cart" ? (
                <>
                  <Wishlist />
                </>
              ) : showData === "activity" ? (
                <>
                  <Timeline />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
