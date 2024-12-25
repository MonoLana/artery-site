"use client";
import React from "react";

const Merchantitem = ({ product }) => {
  return (
    <div className="my-4 mx-8 w-full gap-y-4">
      <div className="rounded-lg flex flex-col my-4">
        <div className="rounded-lg bg-white p-4 flex flex-row">
          <div className="flex flex-col">
            <img
              src={product.product_image}
              className="w-40 h-40 mr-4 border border-black"
              alt="product image"
            />
            <p>Date added: {product.created_at}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg flex justify-self-center">
              {product.product_name}
            </p>
            <p className="font-bold">Price: {product.price}</p>
            <p className="font-bold">Category: {product.product_category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchantitem;
