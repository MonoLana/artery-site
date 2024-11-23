"use client";
import React from "react";
import Wave from "@/components/pageWave";
import Grid from "@/components/homegrid";
import Item from "@/components/itemcard";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
      <Wave />
      <Grid />
      <Item props={data} />
    </div>
  );
};

export default Homepage;
