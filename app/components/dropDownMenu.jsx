"use client";
import React from "react";
import { signOut } from "next-auth/react";

const dropDownMenu = (props) => {
  return (
    <>
      <div
        className={`dropDownMenu-wrapper py-5 -mt-4 max-sm:-mt-[17.8px] px-8 h-screen w-72 max-sm:w-5/6 absolute bg-white shadow-lg ${props.visible} duration-700 ease-in-out overflow-hidden `}
      >
        <div className="dropDownMenu-items flex flex-col justify-between h-5/6 w-full text-lg tracking-widest">
          <div className=" flex flex-col gap-6">
            <span
              className=" text-xl font-light w-fit cursor-pointer"
              onClick={props.close}
            >
              &#10005;
            </span>
            <ul className=" text-center space-y-8 w-full">
              <li className=" w-full border border-black p-1 hover:bg-black hover:text-white">
                <a href="/profile" className=" block w-full">
                  Profile
                </a>
              </li>
              <li className=" w-full border border-black p-1 hover:bg-black hover:text-white">
                <a href="/orders" className=" block w-full">
                  Orders
                </a>
              </li>
              {props.admin ? (
                <li className=" w-full border border-black p-1 hover:bg-black hover:text-white">
                  <a href="/admin" className=" block w-full">
                    Admin
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <div className="">
            <hr className=" h-0.5 w-full bg-black mb-8" />
            <button
              className="logout-btn bg-black text-white rounded-lg w-full p-2"
              onClick={() => signOut()}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default dropDownMenu;
