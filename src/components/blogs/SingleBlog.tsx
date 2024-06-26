import Image from "next/image";
import bg_banner from "../../../public/assets/images/blog-banner.jpg";
import user from "../../../public/assets/images/user.jpg";
import blogIcon from "../../../public/assets/images/icon-22.svg";
import blogIconTwo from "../../../public/assets/images/icon-23.svg";
import blogImage from "../../../public/assets/images/blog-08.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { useRouter } from "next/router";
// import blogIcon from "../../../public/assets/images/icon-22.svg";
import moment from "moment";
import { useState } from "react";

export default function SingleBlog(props: { blog: any }) {
  const [hovered, setHovered] = useState(false);
  const [hoveredOne, setHoveredOne] = useState(false);

  const blog = props.blog;

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row single-post">
            <div className="col-md-8 m-auto text-center">
              <h1 className="blog-title  mb-4">
                    {blog?.title}
              </h1>
              <div className="author-date d-flex justify-content-between">
                <div className="author-date">
                  <b> <i className="fa fa-user"></i> Created By:</b> TestKart
                </div>
                <div className="author-date">
                  <b> <i className="fa fa-calendar"></i> Date: </b> 17/12/2023
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="blog">
             
                <div className="blog-image">
                  <a href="blog-de">
                    <Image
                      src={blog?.featured_image}
                      width={2000}
                      height={900}
                      alt=""
                    />
                  </a>
                </div>

               
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: blog?.content,
                  }}
                ></div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <ul className="pagination lms-page">
                  <li className="page-item prev">
                    <a
                      className="page-link"
                      href="javascript:void(0);"
                      onMouseEnter={() => setHoveredOne(true)}
                      onMouseLeave={() => setHoveredOne(false)}
                    >
                      <FaAngleLeft color={hoveredOne ? "#fff" : "#ED7D27"} />
                    </a>
                  </li>

                  <li className="page-item next">
                    <a
                      className="page-link"
                      href="javascript:void(0);"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <FaAngleRight color={hovered ? "#fff" : "#ED7D27"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
