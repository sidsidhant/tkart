import Image from "next/image";
import user1 from "../../../public/assets/images/user1.jpg";
import user5 from "../../../public/assets/images/play.svg";
import import_2 from "../../../public/assets/images/icon-01.svg";
import Faqs from "@components/faqs/Faqs";
import { Row } from "react-bootstrap";

export default function SingleExam(props: { exam: any }) {
  const exam = props.exam;
  return (
    <>
      <div className="main-wrapper">
        <div className="inner-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2>{exam?.exam}</h2>
                <p>{exam?.short_description}</p>
                <div className="instructor-wrap border-bottom-0 m-0">
                  <a
                    className="start-test py-2"
                    href={`/test-series?category=${exam?.category_slug}`}
                  >
                    Explore {exam?.exam} test series
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        <a href="/exams">Exams</a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        {exam?.exam}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                {exam?.sections && exam?.sections.length > 0 && (
                  <div className="card overview-sec">
                    <div className="card-body">
                      {exam?.sections?.map((section: any, index: number) => {
                        return (
                          <div key={index}>
                            <h2 className="subs-title">{section.title}</h2>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: section.content,
                              }}
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {exam?.faqs && exam?.faqs.length > 0 && (
                  <div className="card overview-sec">
                    <div className="card-body">
                      <Faqs faqs={exam?.faqs} />
                    </div>
                  </div>
                )}

                {exam?.popular_series && (
                  <div className="card content-sec">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <h5 className="subs-title">Popular Test Series</h5>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                          <h6>{exam?.exam}</h6>
                        </div>
                      </div>
                      <div className="course-card">
                        <div className="card-collapse">
                          <ul>
                            {[1, 2, 3, 4, 5, 6].map(
                              (item: number, index: number) => {
                                return (
                                  <li key={index}>
                                    <p className="d-flex align-item-center">
                                      <Image
                                        src={user5}
                                        alt=""
                                        width={20}
                                        height={20}
                                      />
                                      {item} Introduction to the User Experience
                                      Course
                                    </p>
                                    <div>
                                      <a href="javascript:;">View</a>
                                    </div>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="card instructor-sec d-none">
                  <div className="card-body">
                    <h5 className="subs-title">About the author</h5>
                    <div className="instructor-wrap">
                      <div className="about-instructor">
                        {exam?.avatar && (
                          <div className="abt-instructor-img">
                            <a href="javascript:;">
                              <img
                                src={exam?.avatar}
                                alt=""
                                width={40}
                                height={40}
                              />
                            </a>
                          </div>
                        )}
                        <div className="instructor-detail">
                          <h5>
                            <a href="javascript:;">{exam?.author}</a>
                          </h5>
                          <p>{exam?.designation}</p>
                        </div>
                      </div>
                    </div>
                    <p>{exam?.bio}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                {exam?.related_exams && exam.related_exams.length > 0 && (
                  <div className="sidebar-sec">
                    <div className="card include-sec ">
                      <div className="card-body">
                        <div className="cat-title">
                          <h4>Related exams</h4>
                        </div>

                        <ul className="related-exam">
                          {exam?.related_exams.map(
                            (item: any, index: number) => {
                              return (
                                <li
                                  className="d-flex justify-content-base-line cursor-pointer align-items-center"
                                  key={index}
                                >
                                  <div className="icons-web">
                                    <Image src={import_2} alt="" />
                                  </div>
                                  <a href={`/${item.slug}`} className="ms-2">
                                    {item.exam}
                                  </a>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
