import React from "react";
import Image from "next/image";

const banner = () => {
  return (
    <>
      <div className="banner-wrapper overflow-hidden">
        <div className="banner flex justify-center  items-center h-fit w-full text-white ">
          <h1 className="banner-heading select-none max-lg:text-8xl max-sm:text-7xl max-lg:pl-10">
            FOOD BOWL.
          </h1>
        </div>
      </div>
    </>
  );
};

export default banner;
