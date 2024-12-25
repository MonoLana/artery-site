"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Cartitem from "@/components/cartitem";
import Cartvalue from "@/components/cartvalue";
import Checkoutnavbar from "@/components/checkoutnav";
import Footer from "@/components/footer";

const Cart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4",
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Checkoutnavbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full items-center min-h-screen mt-12 p-4 pb-4 gap-1 sm:p-20">
          <div className="w-4/5 flex flex-row gap-x-4 justify-start py-2 px-10">
            <Image
              src="/images/Artery-color.png"
              alt="artery-logo"
              height={32}
              width={32}
              className="rounded-full border-2 border-darkBrown"
            />
            <span className="text-2xl font-medium">ARTERY COFFEE</span>
          </div>
          <div className="w-4/5 flex flex-row justify-center">
            <Cartitem props={data} />
            <Cartvalue props={data} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
