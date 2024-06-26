import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { BlogCardContainer, Content } from "./BlogCard.style";
import moment from "moment";
import blogIcon from "../../../../public/assets/images/icon-22.svg";
import blogIconTwo from "../../../../public/assets/images/icon-23.svg";

export default function BlogCard(props: { blog: any }) {
  const router = useRouter();
  const blog = props.blog;
  const navigate_to_blog = (slug: string) => {
    return router.push(`/blogs/${slug}`);
  };

  return (
    <>
      <div className="col-md-4 col-sm-12 ">
        <div
          className="blog grid-blog"
          onClick={() => {
            navigate_to_blog(blog.slug);
          }}
        >
          <div className="blog-image">
            <Image
              src={blog.featured_image}
              width={410}
              height={250}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="blog-grid-box">
            <div className="blog-info clearfix">
              <div className="post-left">
                <ul>
                  <li className="d-flex align-items-center gap-1">
                    <div className="icon-web">
                      <Image src={blogIcon} className="img-fluid" alt="" />
                    </div>
                    {/* {moment(item?.created_at)} */}
                    {moment(blog?.created_at).format("MMMM DD YYYY")}
                  </li>
                  <li className="d-flex align-items-center gap-1">
                    <div className="icons-web">
                      <Image
                        src={blogIconTwo}
                        className="img-fluid"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    {blog?.category}
                  </li>
                </ul>
              </div>
            </div>
            <h3 className="blog-title">{blog?.title}</h3>
            <div className="blog-content blog-read">
              <p>{blog?.meta_description}</p>
              <button
                onClick={() => {
                  navigate_to_blog(blog.slug);
                }}
                className="read-more btn btn-primary"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
