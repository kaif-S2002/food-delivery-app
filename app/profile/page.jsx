"use client";
import React, { useState } from "react";

const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  console.log();

  return (
    <div className="userProfile-wrapper flex justify-center items-center h-screen mb-10">
      <div className="userProfile-card flex flex-col justify-center items-start w-96 h-fit gap-16 max-md:gap-10 mt-16 border rounded-xl py-5 px-10 text-xs font-medium tracking-wider relative">
        <h1 className=" font-bold text-3xl select-none">Profile</h1>
        <button
          className="bg-black text-white px-2 py-1.5 right-10 top-16 mt-2 absolute font-bold rounded-lg active:scale-95 duration-75 ease-in-out"
          onClick={() => setIsEdit(true)}
        >
          Edit &#9998;
        </button>
        <div className="userProfile-detailsContainer flex flex-col gap-6">
          <div className="userProfileName flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileName"
              className=" absolute -top-4 left-1"
            >
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={"Add Your Name"}
              className="text-sm rounded-lg py-1 px-2  w-full outline-none border border-gray-400 bg-gray-200"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="userProfileEmail flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileEmail"
              className=" absolute -top-4 left-1"
            >
              Email
            </label>
            <input
              type="text"
              placeholder={"kaifs8998@gmail.com"}
              className="text-sm rounded-lg py-1 px-2  w-full outline-none border border-gray-400 bg-gray-200"
              disabled
            />
          </div>
          <div className="userProfilePhone flex flex-row gap-2 relative">
            <label
              htmlFor="userProfilePhone"
              className=" absolute -top-4 left-1"
            >
              Phone No.
            </label>
            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              placeholder={"Add Your Phone No"}
              className="text-sm rounded-lg py-1 px-2  w-full outline-none border border-gray-400 bg-gray-200"
              disabled={isEdit ? false : true}
            />
          </div>
          <div className="userProfileAddress flex flex-row gap-2 relative">
            <label
              htmlFor="userProfileAddress"
              className=" absolute -top-4 left-1"
            >
              Address
            </label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder={"Add Your Address"}
              className="text-sm rounded-lg py-1 px-2  w-full outline-none border border-gray-400 bg-gray-200"
              disabled={isEdit ? false : true}
            />
          </div>

          <div className=" flex gap-2">
            <div className="userProfileAddress flex flex-row gap-2 relative">
              <label
                htmlFor="userProfileAddress"
                className=" absolute -top-4 left-1"
              >
                City
              </label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder={"Add Your City"}
                className="text-sm rounded-lg py-1 px-2 w-full outline-none border border-gray-400 bg-gray-200"
                disabled={isEdit ? false : true}
              />
            </div>
            <div className="userProfileAddress flex flex-row gap-2 relative">
              <label
                htmlFor="userProfileAddress"
                className=" absolute -top-4 left-1"
              >
                Pincode
              </label>
              <input
                type="text"
                onChange={(e) => setPincode(e.target.value)}
                placeholder={"Add Your Pincode"}
                className="text-sm rounded-lg py-1 px-2 w-full outline-none border border-gray-400 bg-gray-200"
                disabled={isEdit ? false : true}
              />
            </div>
          </div>

          <button
            className=" bg-black text-white font-bold py-2 rounded-lg active:scale-95 duration-75 ease-in-out"
            disabled={isEdit ? false : true}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
