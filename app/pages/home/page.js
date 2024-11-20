"use client";
import React from "react";
import Wave from "@/components/pageWave";
import Grid from "@/components/homegrid";
import Item from "@/components/itemcard";

const Homepage = ({ products }) => {
  return (
    <div className=" items-center justify-items-center w-full  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-black">
      <Wave />
      <Grid />
      <Item />
    </div>
  );
};

export default Homepage;
