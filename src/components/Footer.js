import React from "react";
import FooterCat from "../assets/images/footerCat.jpg";
import Logo from "../assets/images/logo.svg";

const Footer = ({ home }) => {
  return (
    <div className="mt-28">
      {home && <img src={FooterCat} alt="" className="w-full" />}
      <div className="bg-gray-100">
        <div className="w-10/12 m-auto py-20">
          <div className="flex flex-wrap sm:flex-nowrap gap-10 justify-between">
            <div className="space-y-3 w-full sm:w-7/12">
              <img src={Logo} alt="" />
              <p>
                <strong>SPAYMART</strong> is a 501(c)3 non-profit animal welfare
                organization established in 1998 to end the unnecessary killing
                of companion animals in the New Orleans area.
              </p>
              <p>
                <strong>EIN:</strong> 72-1418016
              </p>
              <p>
                All donations are tax deductible to the fullest extent of the
                law.
              </p>
            </div>
            <div className="text-start sm:text-end">
              <p>Contact Us</p>
              <p className="mt-5 mb-3">
                <strong>Email:</strong> Info@spaymart.org
              </p>
              <p>
                <strong>Mailing address:</strong> PO Box 6493,
              </p>
              <p>Metairie, LA 70003, United States</p>
              <p className="mt-3">
                <strong>Phone:</strong> (504)454-8200
              </p>
            </div>
          </div>
          <p className="border border-red-400 w-full my-16"></p>
          <div className="flex justify-between flex-wrap">
            <small>
              © Copyright 2022{" "}
              <a href="https://mlhnshuvo.netlify.com">MH Shuvo</a>. All rights
              reserved.
            </small>
            <p>
              <small>Privacy Policy </small>
              <small> | </small>
              <small> Terms of Service</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
