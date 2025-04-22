"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel";
import Categories from "../categories";
import MenuList from "../menuList";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const page = () => {
  const { status } = useSession();
  const isLoading = !status || status === "loading";

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Carousel />
          <Categories />
          <MenuList />
        </>
      )}
    </>
  );
};

export default page;
