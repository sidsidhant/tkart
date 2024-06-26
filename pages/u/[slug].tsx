import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegStar,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../public/assets/images/profile-avatar.jpg";
import icon_one from "../../public/assets/images/courses-icon.png";
import icon_two from "../../public/assets/images/ttl-stud-icon.png";
import icon_three from "../../public/assets/images/review-icon.png";
import email_icon from "../../public/assets/images/email-icon.png";
import address_icon from "../../public/assets/images/address-icon.png";
import phone_icon from "../../public/assets/images/phone-icon.png";
import TestSeriesCard from "@components/test-series-cards/TestSeriesCard";
import { _request } from "src/utils/request.util";
import Head from "next/head";
import Link from "next/link";
import { Row } from "react-bootstrap";
import { getCookie } from "cookies-next";

const AcademyDetails = (props: any) => {
  const data = props?.data;
  return (
    <>
      <Head>
        <title>{`${data?.metaTitle} | | Testkart`} </title>
        <meta name="description" content={data?.metaDescription} />
      </Head>

      <div className="">
        <div className="main-wrapper">
          <div className="page-banner instructor-bg-blk">
            <div className="container">
              <div className="row">
                {/* <div className="col-md-12 col-12"> */}
                <div className="profile-info-blk">
                  <div className="profile-info-img border-0">
                    {data && (
                      <Image
                        src={data?.logo || "https://testkart.in/fav.png"}
                        height={1000}
                        width={1000}
                        alt=""
                      />
                    )}
                  </div>
                  <h4>
                    <Link
                      href="javascript:;"
                      style={{ color: "black", cursor: "pointer" }}
                    >
                      {data?.display_name}
                    </Link>
                  </h4>
                  {/* <p>{data?.academy_name}</p> */}
                  <p>{data.about}</p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <section className="page-content course-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <Row style={{ rowGap: "20px" }}>
                    {data?.test_series.map((elem: any) => (
                      <div className="col-lg-4" key={elem}>
                        <TestSeriesCard data={elem} />
                      </div>
                    ))}
                  </Row>
                </div>
                <div className="col-lg-4">
                  <div className="card overview-sec">
                    <div className="card-body">
                      <h5 className="subs-title">Contact Details</h5>
                      <div className="contact-info-list">
                        <div className="edu-wrap">
                          <div className="edu-name">
                            <span className="p-2">
                              <Image
                                src={email_icon}
                                // width={20}
                                // height={20}
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="edu-detail">
                            <h6>Email</h6>
                            <p>
                              <a href="javascript:;">{data?.contact_email}</a>
                            </p>
                          </div>
                        </div>
                        <div className="edu-wrap">
                          <div className="edu-name">
                            <span className="p-2">
                              <Image
                                src={address_icon}
                                // width={20}
                                // height={20}
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="edu-detail">
                            <h6>Website</h6>
                            <p>{data?.website}</p>
                          </div>
                        </div>
                        <div className="edu-wrap">
                          <div className="edu-name">
                            <span className="p-2">
                              <Image
                                src={phone_icon}
                                // width={20}
                                // height={20}
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="edu-detail">
                            <h6>Phone</h6>
                            <p>
                              <a href="javascript:;">{data?.contact_phone}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AcademyDetails;

export async function getServerSideProps(context: any) {
  const studentId = getCookie('studentId', {
    req: context.req,
    res: context.res,
  });

  const slug = context.params.slug;
  let url = `app/home/teachers/${slug}`;

  if (studentId) {
    url += `?student_id=${studentId}`;
  }

  const res = await _request("get", url);

  if (res?.success) {
    return {
      props: {
        data: res.data,
      },
    };
  } else {
    return {
      props: {
        data: "Error",
      },
    };
  }
}