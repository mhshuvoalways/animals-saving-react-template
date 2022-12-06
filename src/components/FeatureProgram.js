import React from "react";
import Slider from "react-slick";
import FP1 from "../assets/images/fp1.jpg";
import FP2 from "../assets/images/fp2.jpg";
import FP3 from "../assets/images/fp3.jpg";

const FeatureProgram = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 mt-40">
      <div className="w-10/12 m-auto py-20">
        <p className="text-4xl font-semibold text-center mb-10">Get Involved</p>
        <Slider {...settings}>
          <div className="w-80 bg-white border-8">
            <img src={FP1} alt=""/>
            <div className="p-5 space-y-10">
              <p className="text-2xl font-semibold">Seniors for Seniors</p>
              <p>
                SpayMart’s adoption centers feature cats and kittens, so if
                you’re looking for the perfect feline companion, you’ve come to
                the right place.
              </p>
              <p className="text-red-600 font-semibold cursor-pointer w-28">{`READ MORE >`}</p>
            </div>
          </div>
          <div className="w-80 bg-white border-8">
            <img src={FP2} alt=""/>
            <div className="p-5 space-y-10">
              <p className="text-2xl font-semibold">Seniors for Seniors</p>
              <p>
                SpayMart’s adoption centers feature cats and kittens, so if
                you’re looking for the perfect feline companion, you’ve come to
                the right place.
              </p>
              <p className="text-red-600 font-semibold cursor-pointer w-28">{`READ MORE >`}</p>
            </div>
          </div>
          <div className="w-80 bg-white border-8">
            <img src={FP3} alt=""/>
            <div className="p-5 space-y-10">
              <p className="text-2xl font-semibold">Seniors for Seniors</p>
              <p>
                SpayMart’s adoption centers feature cats and kittens, so if
                you’re looking for the perfect feline companion, you’ve come to
                the right place.
              </p>
              <p className="text-red-600 font-semibold cursor-pointer w-28">{`READ MORE >`}</p>
            </div>
          </div>
          <div className="w-80 bg-white border-8">
            <img src={FP1} alt=""/>
            <div className="p-5 space-y-10">
              <p className="text-2xl font-semibold">Seniors for Seniors</p>
              <p>
                SpayMart’s adoption centers feature cats and kittens, so if
                you’re looking for the perfect feline companion, you’ve come to
                the right place.
              </p>
              <p className="text-red-600 font-semibold cursor-pointer w-28">{`READ MORE >`}</p>
            </div>
          </div>
          <div className="w-80 bg-white border-8">
            <img src={FP2} alt=""/>
            <div className="p-5 space-y-10">
              <p className="text-2xl font-semibold">Seniors for Seniors</p>
              <p>
                SpayMart’s adoption centers feature cats and kittens, so if
                you’re looking for the perfect feline companion, you’ve come to
                the right place.
              </p>
              <p className="text-red-600 font-semibold cursor-pointer w-28">{`READ MORE >`}</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeatureProgram;
