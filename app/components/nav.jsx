"use client";
import React, { useState, useEffect } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";
import DropDownMenu from "./dropDownMenu";

const nav = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [fetching, setFetching] = useState(false);
  const session = useSession();
  const status = session.status;

  useEffect(() => {
    const isAdminEmail = async () => {
      setFetching(true);
      const adminEmail =
        (await status) === "authenticated" ? session.data.user.email : null;
      (await adminEmail) === "kaifs8998@gmail.com" || "junedkhan933@gmail.com"
        ? setIsAdmin(true)
        : setIsAdmin(false);

      setFetching(false);
    };
    isAdminEmail();
  }, [status]);
  return (
    <>
      <header>
        <div className="nav-wrapper w-full h-fit fixed z-20 border-b-2 top-0 bg-white">
          <div className="nav flex justify-between items-center py-4 px-10 font-semibold overflow-hidden select-none max-sm:px-5">
            <div className="nav-icon flex justify-center items-center text-sm  text-green-700 font-serif font-bold cursor-pointer">
              <a href="/" className=" flex justify-center items-center">
                <span>FOOD</span>
                <PiBowlFoodFill size={25} />
                <span>BOWL</span>
              </a>
            </div>
            <div className="nav-items flex gap-14 justify-between items-center text-lg max-sm:gap-8">
              <span className="search flex items-center gap-1 cursor-pointer max-md:hidden">
                <a href="/search" className=" pb-0.5">
                  Search
                </a>
                <IoIosSearch size={24} />
              </span>
              <span className="cart flex items-center cursor-pointer max-md:hidden relative">
                <a href="/cart">Cart</a>
                <CiShoppingCart size={32} />
                <span className=" text-green-600 text-[8px] pb-0.5 font-bold absolute right-[10px]">
                  0
                </span>
              </span>

              <span
                className="user-icon flex items-center gap-2 cursor-pointer relative"
                onClick={() =>
                  status === "authenticated" ? setIsOpen(!isOpen) : ""
                }
              >
                {status === "authenticated" ? (
                  <p
                    href=""
                    className=" text-sm max-sm:text-xs underline underline-offset-4"
                  >
                    Hi, {session.data.user.name}
                  </p>
                ) : (
                  <a href={status === "loading" ? "" : "/login"}>Sign In</a>
                )}
                <FaUserCircle size={30} />
              </span>
              <DropDownMenu
                visible={isOpen ? " right-0" : " -right-full"}
                close={() => setIsOpen(false)}
                admin={isAdmin}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default nav;
