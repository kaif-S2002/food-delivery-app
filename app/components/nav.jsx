"use client";
import React, { useState } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const nav = () => {
  const [token, setToken] = useState(false);
  return (
    <>
      <header>
        <div className="nav-wrapper w-full h-fit fixed z-10 shadow top-0">
          <div className="nav flex justify-between items-center py-5 px-10 font-semibold overflow-hidden select-none">
            <div className="nav-icon flex justify-center items-center text-sm text-green-700 font-serif font-bold cursor-pointer">
              <a href="" className=" flex justify-center items-center">
                <span>FOOD</span>
                <PiBowlFoodFill size={25} />
                <span>BOWL</span>
              </a>
            </div>
            <div className="nav-items flex gap-10 justify-between items-center max-lg:hidden">
              <span className=" flex gap-1 cursor-pointer">
                Search
                <IoIosSearch size={24} />
              </span>
              <span className="cart cursor-pointer">
                <a href="/"></a>
                <CiShoppingCart size={30} />
              </span>
              <span className=" flex gap-1 cursor-pointer">
                Admin <RiAdminFill size={20} />
              </span>
              {token ? (
                <>
                  <span>
                    {" "}
                    <a href="/">Login</a>{" "}
                  </span>
                  <span>
                    <a href="/">Signup</a>
                  </span>
                </>
              ) : (
                ""
              )}

              <span className="flex cursor-pointer">
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
