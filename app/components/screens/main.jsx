"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../carousel";
import Categories from "../categories";
import MenuList from "../menuList";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const page = () => {
  const { status } = useSession();
  const [session, setSession] = useState();

  useEffect(() => {
    const getSessionStatus = status === "loading";
    getSessionStatus ? setSession(false) : setSession(true);
  }, [status]);

  return (
    <>
      {!session ? (
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
