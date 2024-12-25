"use client";
import React from "react";
import Wave from "@/components/pageWave";
import Details from "@/components/productdetails";
import { useState, useEffect } from "react";

const Productpage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/6");
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
    <div className=" items-center justify-items-center w-full  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-black">
      <Details props={data} />
    </div>
  );
};
export default Productpage;
