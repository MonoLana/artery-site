"use client";

import React from "react";

const Item = ({ props }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {props.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 m-8 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-xl justify-between"
        >
          <div className="relative pt-10 px-6 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <img
              src={product.image}
              className="w-40 h-40 object-contain"
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
