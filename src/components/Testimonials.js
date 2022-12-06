import React from "react";
import Slider from "react-slick";
import Testi1 from "../assets/images/testi1.png";
import Testi2 from "../assets/images/testi2.png";
import Testi3 from "../assets/images/testi3.png";
import Testi4 from "../assets/images/testi4.png";
import Testi5 from "../assets/images/testi5.png";
import Testi6 from "../assets/images/testi6.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-10/12 m-auto mt-16">
      <Slider {...settings}>
        <img src={Testi1} alt="" className="w-48" />
        <img src={Testi2} alt="" className="w-48" />
        <img src={Testi3} alt="" className="w-48" />
        <img src={Testi4} alt="" className="w-48" />
        <img src={Testi5} alt="" className="w-48" />
        <img src={Testi6} alt="" className="w-48" />
      </Slider>
    </div>
  );
};

export default Testimonials;
