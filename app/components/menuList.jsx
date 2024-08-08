import React from "react";
import Image from "next/image";

const MenuList = () => {
  return (
    <>
      <section className="menuList-wrapper flex flex-col w-full h-fit px-12 my-16 max-md:px-4 max-sm:px-0">
        <span className=" w-full h-0.5 bg-gray-200"></span>
        <h1 className=" text-3xl font-semibold tracking-wider pt-6 pl-3 ">
          Briyani's
        </h1>

        <div className="menuList flex gap-10 w-full py-6 overflow-y-clip overflow-x-scroll max-sm:gap-2">
          <div className="menuList-card flex flex-col justify-start p-1.5 rounded-xl shadow-xl overflow-hidden ease-in-out duration-75 hover:scale-105 max-sm:mx-2">
            <div className="menuList-image h-fit w-full ">
              <Image
                src={"/images/briyani.png"}
                alt="veg thali"
                width={200}
                height={200}
                loading="lazy"
                className=" rounded-xl h-28 w-full object-cover "
              />
            </div>

            <div className="menuList-desc h-full flex flex-col justify-between items-start">
              <div className="menuList-text tracking-wider w-full p-2">
                <h1 className=" font-bold flex justify-between items-start">
                  Chicken Tandoori Briyani{" "}
                  <span className=" text-sm text-green-700 pt-0.5">
                    4&#9733;
                  </span>
                </h1>
                <p className=" text-xs py-1">Spicy chicken tandoori briyani.</p>
              </div>
              <div className="menuList-addBtn flex justify-between items-center w-full p-2">
                <p className=" tracking-wider">
                  <span className=" font-bold"> &#8377;129</span> |{" "}
                  <span className=" font-normal text-sm">
                    <select id="quantity" name="Qtr" className=" outline-none">
                      <option value="Qtr">Qtr</option>
                      <option value="Half">Half</option>
                      <option value="Full">Full</option>
                    </select>
                  </span>
                </p>
                <button className="addItem-btn border-2 h-7 px-6 text-sm rounded-md bg-black text-white hover:bg-green-700 font-bold tracking-wider outline-none border-none text-center active:scale-95 ease-in-out duration-75 ">
                  ADD
                </button>
              </div>
            </div>
          </div>

          <div className="menuList-card flex flex-col justify-start p-1.5 rounded-xl shadow-xl overflow-hidden ease-in-out duration-75 hover:scale-105 max-sm:mx-2">
            <div className="menuList-image h-fit w-full ">
              <Image
                src={"/images/briyani.png"}
                alt="veg thali"
                width={200}
                height={200}
                loading="lazy"
                className=" rounded-xl h-28 w-full object-cover "
              />
            </div>

            <div className="menuList-desc h-full flex flex-col justify-between items-start">
              <div className="menuList-text tracking-wider w-full p-2">
                <h1 className=" font-bold flex justify-between items-start">
                  Chicken Tandoori Briyani{" "}
                  <span className=" text-sm text-green-700 pt-0.5">
                    4&#9733;
                  </span>
                </h1>
                <p className=" text-xs py-1">Spicy chicken tandoori briyani.</p>
              </div>
              <div className="menuList-addBtn flex justify-between items-center w-full p-2">
                <p className=" tracking-wider">
                  <span className=" font-bold"> &#8377;129</span> |{" "}
                  <span className=" font-normal text-sm">
                    <select id="quantity" name="Qtr" className=" outline-none">
                      <option value="Qtr">Qtr</option>
                      <option value="Half">Half</option>
                      <option value="Full">Full</option>
                    </select>
                  </span>
                </p>
                <button className="addItem-btn border-2 h-7 px-6 text-sm rounded-md bg-black text-white hover:bg-green-700 font-bold tracking-wider outline-none border-none text-center active:scale-95 ease-in-out duration-75 ">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MenuList;
