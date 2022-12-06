import React from "react";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import BlogComments from "../components/BlogComments";
import LeaveComment from "../components/LeaveComment";
import Footer from "../components/Footer";

const BlogDetailsPage = () => {
  return (
    <div>
      <Header />
      <BlogDetails />
      <BlogComments />
      <LeaveComment />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
