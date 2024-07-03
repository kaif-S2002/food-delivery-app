import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="categories-wrapper flex flex-col justify-center items-center p-4 pt-12 max-sm:px-0">
      <h1 className="title text-3xl font-bold mb-10 tracking-wider">
        Categories
      </h1>
      <div className="categories-container flex justify-center items-center h-fit w-full gap-12 select-none overflow-x-scroll max-sm:justify-evenly max-sm:gap-6">
        <div className="categories max-sm:ml-2">
          <a href="/veg-menu">
            <Image
              src="/images/vegThali.png"
              alt="Veg Thali"
              width={200}
              height={200}
              loading="lazy"
              className="categories-image shadow-md shadow-gray-400 w-28 h-28 max-md:min-w-20 max-md:min-h-20 max-md:h-20 max-md:w-20 rounded-full object-cover"
            />
            <p className="categories-name text-base tracking-wider font-bold mt-2 text-center max-md:text-xs">
              Veg
            </p>
          </a>
        </div>
        <div className="categories ">
          <a href="/non-veg-menu">
            <Image
              src="/images/NonVeg.png"
              alt="Non-veg"
              width={200}
              height={200}
              loading="lazy"
              className="categories-image shadow-md shadow-gray-400 w-28 h-28 max-md:min-w-20 max-md:min-h-20 max-md:h-20 max-md:w-20 rounded-full object-cover"
            />
            <p className="categories-name text-base tracking-wider font-bold mt-2 text-center max-md:text-xs">
              Non-Veg
            </p>
          </a>
        </div>
        <div className="categories ">
          <a href="/briyani-menu">
            <Image
              src="/images/briyani.png"
              alt="Briyani"
              width={200}
              height={200}
              loading="lazy"
              className="categories-image shadow-md shadow-gray-400 w-28 h-28 max-md:min-w-20 max-md:min-h-20 max-md:h-20 max-md:w-20 rounded-full object-cover"
            />
            <p className="categories-name text-base tracking-wider font-bold mt-2 text-center max-md:text-xs">
              Briyani
            </p>
          </a>
        </div>
        <div className="categories w-fit h-fit">
          <a href="/parantha-menu">
            <Image
              src="/images/parantha.png"
              alt="Parantha"
              width={200}
              height={200}
              loading="lazy"
              className="categories-image shadow-md shadow-gray-400 w-28 h-28 max-md:min-w-20 max-md:min-h-20 max-md:h-20 max-md:w-20 rounded-full object-cover"
            />
            <p className="categories-name text-base tracking-wider font-bold mt-2 text-center max-md:text-xs">
              Parantha
            </p>
          </a>
        </div>
        <div className="categories max-sm:mr-2">
          <a href="/softdrinks-menu">
            <Image
              src="/images/coldDrink.png"
              alt="Soft Drinks"
              width={200}
              height={200}
              loading="lazy"
              className="categories-image shadow-md shadow-gray-400 w-28 h-28 max-md:min-w-20 max-md:min-h-20 max-md:h-20 max-md:w-20 rounded-full object-cover"
            />
            <p className="categories-name text-base tracking-wider font-bold mt-2 text-center max-md:text-xs">
              Soft Drinks
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
