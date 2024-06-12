import React from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaCcPaypal, FaPaypal } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import { RiVisaFill } from "react-icons/ri";

const footer = () => {
  return (
    <>
      <footer className="footer-wrapper bg-gray-100 border-t h-fit border-gray-200 overflow-hidden">
        <div className="footer-items flex justify-around items-start my-10 tracking-wide h-full font-medium max-md:gap-y-12 gap-x-8">
          <div className="footer-sec-1 flex flex-col gap-2 h-full">
            <h1 className="footer-logo text-xl flex text-green-700 font-bold font-serif">
              <span>FOOD</span>
              <PiBowlFoodFill size={25} />
              <span>BOWL</span>
            </h1>
            <p className="copyright-text text-black">
              <small>&copy;2024 FoodBowl Pvt. Ltd</small>
            </p>
          </div>

          <div className="footer-sec-2 flex flex-col gap-4 h-full">
            <h1 className=" font-bold text-lg">Contact Us</h1>
            <ul className=" space-y-3 text-sm max-sm:text-xs">
              <li>
                <a href="" className=" flex gap-2 items-center">
                  <IoMdMail />
                  foodbowl@gmail.com
                </a>
              </li>
              <li>
                <a href="" className=" flex gap-2 items-center">
                  <FaPhoneAlt />
                  +91-9283******
                </a>
              </li>
              <li>
                <a href="" className=" flex gap-2 items-center">
                  <FaLocationDot />
                  Greater Noida UP, India
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-sec-3 flex flex-col gap-4 h-full">
            <h1 className=" font-bold text-lg">Legal</h1>
            <ul className=" space-y-3 text-sm max-sm:text-xs">
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Return Policy</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-sec-4 flex flex-col gap-5 h-full">
            <div className="">
              <h1 className=" font-bold text-lg">Payment</h1>
              <ul className=" flex justify-start items-center gap-2 pt-2">
                <li>
                  <RiVisaFill size={30} />
                </li>
                <li>
                  <SiPaytm size={30} />
                </li>
                <li>
                  <FaCcPaypal size={30} />
                </li>
              </ul>
            </div>
            <div className=" ">
              <h1 className=" font-bold text-base">We Deliver in:</h1>
              <ul className=" flex justify-start items-center gap-2 text-sm">
                <li>Greater Noida</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
