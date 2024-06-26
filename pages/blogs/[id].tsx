import type { NextPage } from "next";
import Head from "next/head";
import ExamsFooter from "@exams/ExamsFooter";
import { _request } from "src/utils/request.util";
import SingleBlog from "@blogs/SingleBlog";

const Blog: NextPage = (props: any) => {
  const blog = props.blog;
  
  return (
    <>
      <Head>
        <title>{blog.meta_title ? blog.meta_title : blog.title}</title>
        <meta
          name="description"
          content={
            blog.meta_description
              ? blog.meta_description
              : blog.short_description
          }
        />
        <meta
          name="keywords"
          content={blog.meta_keywords ? blog.meta_keywords.join(",") : ""}
        />
      </Head>
      <SingleBlog blog={blog} />
      {/* <ExamsFooter /> */}
    </>
  );
};

export default Blog;

export async function getServerSideProps(context: any) {
  let preview_token = `?preview_token="${context.query?.preview_token}"`;

  if (!context.query.preview_token) {
    preview_token = "";
  }

  const res = await _request(
    "get",
    `app/blogs/${context.params.id}${preview_token}`
  );

  if (res.success) {
    return {
      props: {
        blog: res.data,
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
