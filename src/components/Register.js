import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    agree: true,
  });

  const onChangeAgree = () => {
    setState({
      ...state,
      agree: !state.agree,
    });
  };

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
            <span className="text-gray-700">Name</span>
            <input
              type="name"
              placeholder="Enter Your Name"
              className="p-2 my-1 placeholder-gray-400 text-gray-600 w-full bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              name="name"
              required
            />
          </label>
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
          <label className="block">
            <span className="text-gray-700">RECAPTCHA</span>
            <div className="my-1">
              <ReCAPTCHA sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA} />
            </div>
          </label>
          <div className="flex mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={state.agree}
                className="form-checkbox cursor-pointer"
                onChange={onChangeAgree}
              />
              <span className="ml-2">
                I agree to the
                <span className="underline cursor-pointer">
                  {" "}
                  privacy policy
                </span>
              </span>
            </label>
          </div>
          {state.agree ? (
            <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-600">
              REGISTER
            </button>
          ) : (
            <button
              className="bg-gray-600 cursor-not-allowed opacity-50 text-white py-2 mt-5 w-full hover:bg-gray-600"
              type="button"
            >
              REGISTER
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
