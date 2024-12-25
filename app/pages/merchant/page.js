"use client";
import React from "react";
import { useState, useEffect } from "react";

import Merchantitem from "@/components/merchantproduct";
import Addproduct from "@/components/additem";

const Merchantpage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://43207vdf-3000.asse.devtunnels.ms/api/product?page=2&limit=10",
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
    <div className="items-center justify-items-center w-full  min-h-screen p-4 pb-20 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-black my-4">
      <Addproduct />
      {data && data.length > 0 ? (
        data.map((product) => (
          <Merchantitem key={product.id} product={product} />
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default Merchantpage;
