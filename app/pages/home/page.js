"use client";
import React from "react";
import Wave from "@/components/pageWave";
import Grid from "@/components/homegrid";
import Item from "@/components/itemcard";
import Pagination from "@/components/pagination";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://43207vdf-8080.asse.devtunnels.ms/product/all",
        );
        const result = await response.json();
        setData(result.data);
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
    <div className=" items-center justify-items-center w-full  min-h-screen p-8 pb-20 gap-16 sm:p-20 text-black">
      <Item props={data} />
    </div>
  );
};

export default Homepage;
