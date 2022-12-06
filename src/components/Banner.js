import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage1 from "../assets/images/banner1.jpg";
import BannerImage2 from "../assets/images/banner2.jpg";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="pt-20">
      <Slider {...settings}>
        <div className="h-96 md:h-screen relative">
          <img src={BannerImage1} className="w-full h-full" alt="" />
          <div className="absolute left-0 top-0 right-0 bottom-0 text-white bg-rgb">
            <div className="w-10/12 m-auto">
              <div className="w-full sm:w-10/12 lg:w-6/12 pt-10 md:pt-56">
                <p className="font-semibold text-2xl sm:text-6xl">
                  Globally harness multimedia based collaboration and
                  idea-sharing
                </p>
                <p className="bg-red-600 px-3 py-2 w-40 rounded-full font-semibold text-center cursor-pointer mt-10">
                  READ NOW
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-96 md:h-screen relative">
          <img src={BannerImage2} className="w-full h-full" alt="" />
          <div className="absolute left-0 top-0 right-0 bottom-0 text-white bg-rgb">
            <div className="w-10/12 m-auto">
              <div className="w-full sm:w-10/12 lg:w-6/12 pt-10 md:pt-56">
                <p className="font-semibold text-2xl sm:text-6xl">
                  Globally harness multimedia based collaboration and
                  idea-sharing
                </p>
                <p className="bg-red-600 px-3 py-2 w-40 rounded-full font-semibold text-center cursor-pointer mt-10">
                  READ NOW
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
