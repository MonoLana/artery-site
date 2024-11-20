"use client";

import React from "react";
import { useEffect, useState } from "react";

const Item = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-xl"
        >
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              src={product.image}
              className="w-40 h-auto object-cover"
              alt="product image"
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 mb-1 text-black">
              {product.category}
            </span>
            <div className="flex justify-between gap-1">
              <span className="block font-semibold text-xl text-black line-clamp-1">
                {product.title}
              </span>
              <span className="bg-primaryButton rounded-lg text-black text-xs font-bold px-3 leading-none flex items-center">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
