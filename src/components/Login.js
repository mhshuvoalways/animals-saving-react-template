import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md m-auto pt-40 z-0">
      <div className="flex justify-center mb-5">
        <NavLink
          to="/register"
          className={({ isActive }) => isActive && "text-red-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Register</button>
        </NavLink>
        <p className="py-2 mt-5 text-2xl mx-2">|</p>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive && "text-red-600"}
        >
          <button className="py-2 mt-5 text-2xl font-bold">Login</button>
        </NavLink>
      </div>
      <form>
        <div className="shadow-md rounded-md text-left p-10">
          <label className="block">
            <span className="text-gray-700">EMAIL</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="email"
              required
            />
          </label>
          <label className="block">
            <span className="text-gray-700">PASSWORD</span>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="password"
              required
            />
          </label>
          <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-600">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
