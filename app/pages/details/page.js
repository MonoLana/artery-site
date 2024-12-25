"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Productdetails from "@/components/productdetails";
import Productsection from "@/components/hotproduct";

const Details = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center justify-self-start pb-20 sm:p-20 scrollbar-hidden">
        <Productdetails />
      </div>
      <div className="mt-16 left-0 flex flex-col items-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Lainnya di toko ini</h1>
          <Image
            src="/images/Divider.png"
            width={368}
            height={0}
            alt="Divider"
          />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center  pb-20 sm:p-8 scrollbar-hidden ">
        <Productsection />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
