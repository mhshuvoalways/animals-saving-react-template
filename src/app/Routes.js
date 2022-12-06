import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";

const RoutesCompo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCompo;
