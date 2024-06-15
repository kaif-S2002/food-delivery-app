"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  let settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "180px",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerPadding: "260px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "220px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "160px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "25px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselData = [
    "Tasty food for every mood.",
    " Food Is A Never Ending Story.",
    "Beware Of Expensive Food.",
  ];
  return (
    <div className="slider-container mt-24 h-64 overflow-hidden">
      <Slider {...settings}>
        {carouselData.map((data) => {
          return (
            <div className=" h-full w-full p-4 rounded-xl text-white shadow-xl bg-neutral-500 overflow-hidden">
              <p className=" flex justify-center items-center text-6xl font-bold h-full">
                {data}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
