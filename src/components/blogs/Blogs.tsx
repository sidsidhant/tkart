import BlogCard from "@components/blog-card/BlogCard";
import Image from "next/image";
import React from "react";
import blogImage from "../../../public/assets/images/blog-08.jpg";
import blogIcon from "../../../public/assets/images/icon-22.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function AllBlogs(props: { blogs: any }) {
  const blogs = props.blogs;
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row">
                {blogs?.map((blog: any, val: number) => (
                  <BlogCard blog={blog} key={val} />
                ))}
              </div>

              {/* <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <a
                        className="page-link"
                        href="javascript:void(0);"
                    
                      >
                        <FaAngleLeft color="#ED7D27" />
                      </a>
                    </li>
                    <li className="page-item first-page active">
                      <a className="page-link" href="javascript:void(0);">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        5
                      </a>
                    </li>
                    <li className="page-item next">
                      <a className="page-link" href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            {/* <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
              <div className="card search-widget blog-search blog-widget">
                <div className="card-body">
                  <form className="search-form">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                      />
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}

            {/* <div className="card post-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Recent Posts</h4>
                </div>
                <div className="card-body">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="/">
                          <Image
                            src={blogImage}
                            className="object-cover"
                            alt=""
                            height={1000}
                            width={1000}
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/">
                            Learn Webs Applications Development from Experts
                          </a>
                        </h4>
                        <div className="d-flex justify-content-center">
                          <Image
                            src={blogIcon}
                            className="img-fluid"
                            alt=""
                            width={20}
                            height={20}
                          />
                          3 Dec 2019
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="/">
                          <Image
                            src={blogImage}
                            className="object-cover"
                            alt=""
                            height={1000}
                            width={1000}
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/">
                            Expand Your Career Opportunities With Python
                          </a>
                        </h4>

                        <div className="d-flex justify-content-center">
                          <Image
                            src={blogIcon}
                            className="img-fluid"
                            alt=""
                            width={20}
                            height={20}
                          />
                          3 Dec 2019
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="/">
                          <Image
                            src={blogImage}
                            className="object-cover"
                            alt=""
                            height={1000}
                            width={1000}
                          />
                        </a>
                      </div>
                      <div className="post-info">
                        <h4>
                          <a href="/">
                            Complete PHP Programming Career Guideline
                          </a>
                        </h4>
                        <div className="d-flex justify-content-center">
                          <Image
                            src={blogIcon}
                            className="img-fluid"
                            alt=""
                            width={20}
                            height={20}
                          />
                          3 Dec 2019
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Categories</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Business
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Courses
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Education
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Graphics Design
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Programming
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> Web Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Archives</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> January 2022
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> February 2022
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaAngleRight color="#ED7D27" /> April 2022
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card tags-widget blog-widget tags-card">
                <div className="card-header">
                  <h4 className="card-title">Latest Tags</h4>
                </div>
                <div className="card-body">
                  <ul className="tags">
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        HTML
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Java Script
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Css
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Jquery
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        Java
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="tag">
                        React
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div>   */}
          </div>
        </div>
      </section>
    </>
  );
}
