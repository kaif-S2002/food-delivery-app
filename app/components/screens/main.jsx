"use client";
import React, { useEffect } from "react";
import Carousel from "../carousel";
import Categories from "../categories";
import MenuList from "../menuList";
import connectDB from "@/utils/db";
import { useSession } from "next-auth/react";
import Loading from "../loading";

const page = () => {
  const { status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await connectDB();
      } catch (error) {
        console.error("Failed to connect to the database:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {status === "loading" ? (
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
