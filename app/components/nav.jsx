import React from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const nav = () => {
  return (
    <>
      <header>
        <div className="nav-wrapper">
          <div className="nav flex justify-between items-center p-5">
            <div className="nav-icon flex justify-center items-center">
              <PiBowlFoodFill size={40} />
              <span>FoodBowl</span>
            </div>
            <div className="nav-items flex gap-6 justify-between items-center">
              <span className=" flex gap-2">
                Search
                <FaSearch size={25} />
              </span>
              <ul className=" flex items-center gap-4">
                <li>
                  <a href="/">Login</a>
                </li>
                <li>
                  <a href="/">Signup</a>
                </li>
                <li>
                  <a href="/"></a>
                  <FaCartShopping size={30} />
                </li>
              </ul>
              <span className="flex">
                <FaUserCircle size={30} />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default nav;
