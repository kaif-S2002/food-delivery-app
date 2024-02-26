"use client";
import React, { useEffect } from "react";

const bootstrapClient = () => {
  return useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);
};

export default bootstrapClient;
