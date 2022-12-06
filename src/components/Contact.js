import React from "react";
import LoveIcon from "../assets/images/loveicon.png";

const Contact = () => {
  return (
    <div className="w-10/12 m-auto mt-24">
      <p className="text-4xl font-semibold text-center">Connect With Us</p>
      <div className="flex justify-center md:gap-32 mt-10 flex-wrap sm:flex-nowrap">
        <div className="w-full lg:w-3/12">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSpayMart%2Fposts%2Fpfbid02e97vsYhX7qsc1osb9m27mcHm39ZgPX1GsNoSUpXQoycA66muGTvCHmoDuqsvSmEJl&show_text=true&width=500"
            width="100%"
            title="facebook"
            height="800"
            scrolling="yes"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <div className="bg-blue-700 p-14">
            <img src={LoveIcon} alt="" className="w-14 m-auto" />
            <p className="text-4xl text-white font-semibold">
              Follow us on Social Media
            </p>
            <div className="flex justify-center gap-5 mt-20">
              <i className="fa-brands bg-red-600 hover:bg-gray-600 cursor-pointer text-white w-12 rounded-full text-center text-2xl pt-3 h-12 fa-facebook"></i>
              <i className="fa-brands bg-red-600 hover:bg-gray-600 cursor-pointer text-white w-12 rounded-full text-center text-2xl pt-3 h-12 fa-instagram"></i>
              <i className="fa-brands bg-red-600 hover:bg-gray-600 cursor-pointer text-white w-12 rounded-full text-center text-2xl pt-3 h-12 fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
