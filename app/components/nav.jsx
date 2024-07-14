"use client";
import React, { useState } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import DropDownMenu from "./dropDownMenu";

const nav = (props) => {
  const [token, setToken] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      <header>
        <div className="nav-wrapper w-full h-fit fixed z-10 shadow top-0 bg-gray-100">
          <div className="nav flex justify-between items-center py-4 px-10 font-semibold overflow-hidden select-none max-sm:px-5">
            <div className="nav-icon flex justify-center items-center text-sm text-green-700 font-serif font-bold cursor-pointer">
              <a href="" className=" flex justify-center items-center">
                <span>FOOD</span>
                <PiBowlFoodFill size={25} />
                <span>BOWL</span>
              </a>
            </div>
            <div className="nav-items flex gap-12 justify-between items-center txet-sm tracking-wider max-sm:gap-8">
              <span className=" flex gap-1 cursor-pointer max-md:hidden">
                Search
                <IoIosSearch size={24} />
              </span>
              <span className="cart cursor-pointer max-md:hidden">
                <a href="/"></a>
                <CiShoppingCart size={30} />
              </span>
              {token === "adminToken" ? (
                <span className=" flex gap-1 cursor-pointer">
                  Admin
                  <RiAdminFill size={18} className=" mt-0.5" />
                </span>
              ) : (
                ""
              )}
              {status !== "authenticated" ? (
                <>
                  <span className=" max-md:hidden">
                    <a href="/login">Login</a>
                  </span>
                  <span className=" max-md:hidden">
                    <a href="/register">Signup</a>
                  </span>
                </>
              ) : (
                ""
              )}

              <span
                className="user-icon flex cursor-pointer relative"
                onClick={() =>
                  status === "authenticated" ? setIsOpen(!isOpen) : ""
                }
              >
                <FaUserCircle size={30} />
              </span>
              <DropDownMenu
                visible={isOpen ? "top-20 right-0" : "top-20 right-0 hidden"}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default nav;
