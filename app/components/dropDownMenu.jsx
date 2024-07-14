"use client";
import { signOut } from "next-auth/react";
import React from "react";

const dropDownMenu = (props) => {
  return (
    <>
      <div
        className={`dropDownMenu-wrapper py-5 -mt-2 px-8 w-fit absolute bg-white rounded-lg shadow-lg ${props.visible}  duration-1000 ease-in-out overflow-hidden `}
      >
        <div className="dropDownMenu-items">
          <ul className=" flex flex-col justify-center items-center gap-6 text-lg tracking-wide">
            <li>
              <a href="" className=" hover:text-green-600">
                User
              </a>
            </li>
            <li>
              <button
                className="logout-btn hover:text-green-600"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default dropDownMenu;
