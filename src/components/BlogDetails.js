import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import blogs from "../db/blogs";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const params = useParams();

  useEffect(() => {
    const findBlog = blogs.find((el) => el.id.toString() === params.id);
    setBlog(findBlog);
  }, [params.id]);

  return (
    <div className="w-10/12 m-auto pt-56">
      <p className="text-4xl font-semibold">{blog.title}</p>
      <div className="flex justify-between items-center mt-3">
        <small>{blog.date}</small>
        <small className="bg-black text-white text-center pt-1 w-7 h-7">
          {blog.commentCount}
        </small>
      </div>
      <img src={blog.thumbnail} alt="" className="w-full my-10" />
      <p className="leading-7 font-semibold opacity-80">
        {blog.excerpt && parse(blog.excerpt)}
      </p>
    </div>
  );
};

export default BlogDetails;
