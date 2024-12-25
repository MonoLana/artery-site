"use client";
import React from "react";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Productcard from "@/components/productcard";
import Navbar from "@/components/navbar";
import Pagination from "@/components/pagination";

const Searchpage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-black scrollbar-hidden ">
        <div className="flex flex-col justify-center items-center">
          <Pagination />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
