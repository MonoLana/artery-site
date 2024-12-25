"use client";

import React from "react";
import Image from "next/image";

const Cartitem = ({}) => {
  const items = Array(2).fill("item"); //This variable just for example and testing card mapping render, this will be replace by JSON id from API
  return (
    <div className="w-3/5 mx-4 flex flex-col gap-y-4">
      {/* cart item component */}
      {items.map((item, index) => (
        <div
          key={index}
          className="border-3 border-darkBrown flex flex-row w-full"
        >
          <div className="min-h-[150px] min-w-[150px] border-r-4 border-darkBrown">
            <Image
              src="/images/productExample.png"
              width={150}
              height={150}
              alt="product image"
            />
          </div>
          <div className="flex flex-col justify-between gap-y-4 pl-4 px-2 w-full">
            <div className="flex flex-row justify-between gap-x-10 pr-2">
              <div className="flex flex-col">
                <span className="text-xl text-Black font-semibold mr-2">
                  Lintong
                </span>
                <div className="flex flex-row mt-1">
                  <span className="text-Black/70 font-thin mr-2">
                    Bean Type:
                  </span>
                  <span className="text-Black font-semibold">Arabica</span>
                </div>
                <div className="flex flex-row mt-1">
                  <span className="text-Black/70 font-thin mr-2">
                    Taste Note:
                  </span>
                  <span className="text-Black font-semibold">
                    Caramel Bright
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <button>
                  <Image
                    src="/images/delete.png"
                    width={16}
                    height={18}
                    alt="delete logo"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-x-2 justify-end items-center my-2 pr-4">
              <span className="text-xl font-semibold">Rp 49.900</span>
              <span className="text-md">x 1</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cartitem;
