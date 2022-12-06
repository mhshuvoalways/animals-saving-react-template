import React from "react";
import { Link } from "react-router-dom";
import blogs from "../db/blogs";

const RecentPost = () => {
  return (
    <div className="bg-gray-200 py-20 -m-5">
      <div className="w-10/12 m-auto">
        <p className="text-4xl font-semibold text-center mb-10">Recent Post</p>
        <div className="flex justify-center md:justify-between gap-5 flex-wrap">
          {blogs.map((el) => (
            <div className="bg-white w-full md:w-72 shadow rounded-md">
              <img src={el.thumbnail} alt="" className="w-full" />
              <div className="p-4">
                <Link
                  to={`/blog/${el.id}`}
                  className="text-xl font-semibold hover:underline cursor-pointer"
                >
                  {el.title.length > 45
                    ? el.title.substring(0, 45) + "..."
                    : el.title}
                </Link>
                <div className="flex justify-between items-center mt-3">
                  <small>{el.date}</small>
                  <small className="bg-black text-white text-center pt-1 w-7 h-7">
                    {el.commentCount}
                  </small>
                </div>
                <p className="mt-2">
                  {el.excerpt.length > 120
                    ? el.excerpt.substring(0, 120) + "..."
                    : el.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
