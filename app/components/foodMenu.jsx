import React from "react";
import Image from "next/image";

const FoodMenu = () => {
  return (
    <div className="foodMenu-wrapper flex flex-col justify-center items-center mx-auto p-4 pt-12">
      <h1 className="title text-3xl font-bold mb-8">Categories</h1>
      <div className="foods-container flex justify-center items-center h-fit w-fit gap-x-8 gap-y-5 select-none max-lg:grid max-md:grid-cols-2 max-lg:grid-cols-4">
        <div className="food ">
          <a href="/veg-menu">
            <Image
              src="/assets/vegThali.png"
              alt="Veg Thali"
              width={200}
              height={200}
              className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
            />
            <p className="food-name text-base font-bold mt-2 text-center">
              Veg
            </p>
          </a>
        </div>
        <div className="food ">
          <a href="/non-veg-menu">
            <Image
              src="/assets/NonVeg.png"
              alt="Non-veg"
              width={200}
              height={200}
              className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
            />
            <p className="food-name text-base font-bold mt-2 text-center">
              Non-Veg
            </p>
          </a>
        </div>
        <div className="food ">
          <a href="/briyani-menu">
            <Image
              src="/assets/briyani.png"
              alt="Briyani"
              width={200}
              height={200}
              className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
            />
            <p className="food-name text-base font-bold mt-2 text-center">
              Briyani
            </p>
          </a>
        </div>
        <div className="food w-fit h-fit">
          <a href="/parantha-menu">
            <Image
              src="/assets/parantha.png"
              alt="Parantha"
              width={200}
              height={200}
              className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
            />
            <p className="food-name text-base font-bold mt-2 text-center">
              Parantha
            </p>
          </a>
        </div>
        <div className="food ">
          <a href="/softdrinks-menu">
            <Image
              src="/assets/coldDrink.png"
              alt="Soft Drinks"
              width={200}
              height={200}
              className="food-image shadow-lg w-36 h-36 rounded-full object-cover"
            />
            <p className="food-name text-base font-bold mt-2 text-center">
              Soft Drinks
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
