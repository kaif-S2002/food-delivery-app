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
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 10000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerPadding: "260px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "25px",
        },
      },
    ],
  };

  const carouselData = [
    { key: "1", text: " Food Is A Never Ending Story." },
    { key: "2", text: "Tasty Food For Every Mood." },
    { key: "3", text: "Beware From Expensive Food." },
  ];
  return (
    <>
      <div className="slider-container mt-24 h-fit">
        <Slider {...settings}>
          {carouselData.map((data) => {
            return (
              <div
                className="slider-card h-full w-full p-4 rounded-xl bg-gray-300 text-gray-600 shadow-xl overflow-hidden"
                key={data.key}
              >
                <p className=" flex justify-center items-center text-6xl font-bold h-full max-sm:text-5xl">
                  {data.text}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
