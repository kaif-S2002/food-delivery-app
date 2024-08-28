"use client";
import React, { useState } from "react";
// import Image from "next/image";

const UserProfile = () => {
  const [editName, setEditName] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  return (
    <div className="userProfile-wrapper flex justify-center items-center h-screen mb-10">
      <div className="userProfile-card flex flex-col justify-center items-start w-fit h-fit gap-16 max-md:gap-10 mt-16 border-2 rounded-xl py-5 px-10 text-xs font-medium tracking-wider">
        <h1 className=" font-bold text-2xl underline underline-offset-4 select-none">
          Profile
        </h1>
        {/* <div className="userProfile-imageContainer flex flex-col justify-center items-center gap-1 w-fit h-fit overflow-hidden bg-white">
          <div className="flex justify-center items-center rounded-full w-fit h-fit border-2 overflow-hidden bg-white">
            <Image
              src={"/images/coldDrink.png"}
              alt="user-image"
              width={200}
              height={200}
              className=" w-24 h-24 object-cover"
            />
          </div>
          <input
            type="file"
            className="border-2 text-xs px-3 py-1.5 font-bold rounded-lg w-56"
            name="file"
          />
        </div> */}

        <div className="userProfile-detailsContainer flex flex-col gap-10">
          <div className="userProfileName flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileName"
              className=" absolute -top-5 left-1"
            >
              Name
            </label>
            <input
              type="text"
              placeholder={"Add Your Name"}
              className="text-sm rounded-lg py-1 px-2 outline-none border border-gray-400 bg-gray-200"
              disabled={editName ? false : true}
            />
            <button
              className="bg-black text-white px-2 font-bold rounded-lg active:scale-95 duration-75 ease-in-out"
              onClick={() => setEditName(true)}
            >
              Edit &#9998;
            </button>
          </div>
          <div className="userProfileEmail flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileEmail"
              className=" absolute -top-5 left-1"
            >
              Email
            </label>
            <input
              type="text"
              placeholder={"kaifs8998@gmail.com"}
              className="text-sm rounded-lg py-1 px-2 outline-none border border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="userProfilePhone flex flex-row gap-2 relative">
            <label
              htmlFor="userProfilePhone"
              className=" absolute -top-5 left-1"
            >
              Phone No.
            </label>
            <input
              type="text"
              placeholder={"Add Your Phone No"}
              className="text-sm rounded-lg py-1 px-2 outline-none border border-gray-400 bg-gray-200"
              disabled={editPhone ? false : true}
            />
            <button
              className="bg-black text-white px-2 font-bold rounded-lg active:scale-95 duration-75 ease-in-out"
              onClick={() => setEditPhone(true)}
            >
              Edit &#9998;
            </button>
          </div>
          <div className="userProfileAddress flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileAddress"
              className=" absolute -top-5 left-1"
            >
              Address
            </label>
            <input
              type="text"
              placeholder={"Add Your Address"}
              className="text-sm rounded-lg py-1 px-2 outline-none border border-gray-400 bg-gray-200"
              disabled={editAddress ? false : true}
            />
            <button
              className="bg-black text-white px-2 font-bold rounded-lg active:scale-95 duration-75 ease-in-out"
              onClick={() => setEditAddress(true)}
            >
              Edit &#9998;
            </button>
          </div>
          <button className=" bg-black text-white font-bold py-2 rounded-lg active:scale-95 duration-75 ease-in-out">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
