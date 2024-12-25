"use client";
import React from "react";
import Image from "next/image";

import Formproduct from "@/components/productform";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Newproduct = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="mt-32 flex flex-col items-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Add Product</h1>
          <Image
            src="/images/Divider.png"
            width={368}
            height={0}
            alt="Divider"
          />
        </div>
      </div>
      <div className="my-8 px-12 flex flex-row">
        <Formproduct />
        <div className="flex flex-row justify-center px-16 pt-12 pr-20 w-2/5 border-l-3 border-darkBrown gap-x-8">
          <div className="w-3/5">
            <button className="w-full py-2 text-darkBrown text-xl font-semibold border-3 border-darkBrown">
              {"Save & Add Product"}
            </button>
          </div>
          <div className="w-2/5">
            <button className="w-full py-2 text-White text-xl font-semibold bg-darkBrown">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default Newproduct;
