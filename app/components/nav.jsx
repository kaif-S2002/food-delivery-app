import React from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const nav = () => {
  return (
    <>
      <header>
        <div className="nav-wrapper">
          <div className="nav flex justify-between items-center py-4 px-8 font-semibold shadow-md overflow-hidden select-none">
            <div className="nav-icon flex justify-center items-center text-lg font-bold cursor-pointer">
              <PiBowlFoodFill size={30} />
              <span>
                <a href="/">FoodBowl</a>
              </span>
            </div>
            <div className="nav-items flex gap-10 justify-between items-center">
              <span className=" flex gap-1 cursor-pointer">
                Search
                <IoIosSearch size={24} />
              </span>
              <span className=" flex gap-1 cursor-pointer">
                Admin <RiAdminFill size={20} />
              </span>
              <span className="cart cursor-pointer">
                <a href="/"></a>
                <CiShoppingCart size={30} />
              </span>
              <ul className="nav-ul flex items-center gap-5 cursor-pointer">
                <li>
                  <a href="/">Login</a>
                </li>
                <li>
                  <a href="/">Signup</a>
                </li>
                <span className="flex">
                  <FaUserCircle size={30} />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default nav;
