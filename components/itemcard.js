"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Item = ({}) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://43207vdf-8080.asse.devtunnels.ms/product/all?page=${currentPage}`,
        );
        const result = await response.json();
        setData(result.data);
        setPagination(result.pagination);
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

  const total = pagination?.totalPages;
  const items = Array(8).fill("item");

  return (
    <div className="w-full mx-4 flex flex-col gap-y-4 m-4">
      {/* Add Item Button */}
      <div className="self-end">
        <button className="bg-darkBrown py-2 px-4">
          <span className="font-bold text-lg text-White">Add Items</span>
        </button>
      </div>
      {/* Top contain */}
      <div className="flex flex-row justify-between w-full border-3 border-darkBrown">
        <div className="w-1/3 p-2 flex flex-row items-center py-4">
          <input
            type="checkbox"
            id="task1"
            className="mr-3 h-5 w-5 text-White ring-darkBrown focus:ring focus:ring-darkBrown"
          />
          <span className="text-xl text-Black">Product Info</span>
        </div>

        <div className="w-1/3 p-2 flex flex-row justify-between items-center px-12">
          <span className="text-xl text-Black">Stocks</span>
          <span className="text-xl text-Black">Price</span>
        </div>
        <div className="w-1/3"></div>
      </div>

      {/* cart item component */}
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between w-full border-3 border-darkBrown"
        >
          <div className="w-1/3 p-2 flex flex-row items-center">
            <input
              type="checkbox"
              id="task1"
              className="mr-3 h-5 w-5 text-White ring-darkBrown focus:ring focus:ring-darkBrown"
            />
            <div className="flex flex-row gap-x-1">
              <Image
                src="/images/productExample.png"
                alt="product image"
                width={75}
                height={75}
                className="border border-darkBrown"
              />
              <span className="text-xl text-Black">Product Info</span>
            </div>
          </div>

          <div className="w-1/3 p-2 flex flex-row justify-between items-center px-12">
            <span className="text-xl text-Black">1520</span>
            <span className="text-xl text-Black">Rp 49.900</span>
          </div>
          <div className="w-1/3 flex flex-row justify-between items-center px-12">
            <span className="text-xl text-Black/70 font-semibold">Edit</span>
            <span className="text-xl text-red-700 font-semibold">Delete</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
