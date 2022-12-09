import React from "react";
import User from "../assets/images/user.jpeg";
import GooglePlay from "../assets/images/googleplay.svg";
import ApplePlay from "../assets/images/applelogo.svg";

const SecondBanner = () => {
  return (
    <div className="secondbanner">
      <div className="w-10/12 m-auto flex sm:justify-between items-center sm:flex-nowrap flex-wrap py-20 gap-10 justify-center flex-col-reverse sm:flex-row">
        <div className="text-white w-full sm:w-6/12">
          <p className="text-5xl font-semibold">
            Software solutions in your hands.
          </p>
          <p className="text-xl mt-10">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <div className="flex gap-2 flex-wrap mt-10">
            <div className="flex items-center border-2 rounded-md py-1 px-5 w-52 justify-center cursor-pointer gap-3">
              <img src={GooglePlay} alt="" />
              <div>
                <strong>GET IT ON</strong>
                <p className="text-xl">Google Play</p>
              </div>
            </div>
            <div className="flex items-center border-2 rounded-md py-1 px-5 w-52 justify-center cursor-pointer gap-3">
              <img src={ApplePlay} alt="" />
              <div>
                <p>GET IT ON</p>
                <p className="text-xl">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full sm:w-64 h-96 rounded-3xl p-2 text-center">
          <img
            src={User}
            alt=""
            className="w-14 h-14 rounded-full mt-20 m-auto"
          />
          <p className="text-xl">Welcome</p>
          <small>Please login to your account</small>
          <p className="bg-green-500 text-center m-auto text-white rounded-md mt-5 cursor-pointer py-1 w-32">
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
