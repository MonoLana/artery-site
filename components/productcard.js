'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ props }) => {
  const [sortCriteria, setSortCriteria] = useState("cheapestToHighest");

  const sortedData = [...props].sort((a, b) => {
    if (sortCriteria === "cheapestToHighest") {
      return a.price - b.price;
    }
    if (sortCriteria === "highestToCheapest") {
      return b.price - a.price;
    }
    if (sortCriteria === "sortByName") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div>
      <div className="relative flex justify-between w-full py-8 px-4 items-center">
        <div>
          <span>
            Menampilkan 1 - {props.length} barang dari total untuk userinput
          </span>
        </div>
        <div className="flex justify-between gap-x-2 content-center items-center">
          <span>Sort by:</span>
          <button className="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200 z-0">
            <span>
              {sortCriteria === "cheapestToHighest"
                ? "Cheapest to highest"
                : sortCriteria === "highestToCheapest"
                  ? "Highest to cheapest"
                  : "Sort by name"}
            </span>
            <div className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("cheapestToHighest")}
              >
                Cheapest to highest
              </span>
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("highestToCheapest")}
              >
                Highest to cheapest
              </span>
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("sortByName")}
              >
                Sort by name
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedData.map((product) => (
          <div
            key={product.id}
            className="min-w-[300px] min-h-[383px] border-2 border-darkBrown mr-2"
          >
            <div className="w-[300px] h-[383px]">
              <Link href={`details/${product.id}`}>
                <img
                  src={product.coffe_img}
                  alt="Product image"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <div className="flex justify-between p-2 border-t-2 border-darkBrown">
              <Link href={`details/${product.id}`}>
                <div className="p-2 flex flex-col">
                  <p className="text-lg text-Black font-bold line-clamp-1">
                    {product.name}
                  </p>
                  <p className="text-Black/70">{product.taste_note}</p>
                  <p className="text-Black text-lg font-bold">
                    Rp. {new Intl.NumberFormat("id-ID").format(product.price)}
                  </p>
                </div>
              </Link>
              <div className="flex content-center mr-1">
                <button>
                  <Image
                    src="/images/add_shopping_cart.png"
                    alt="cart button"
                    width={34}
                    height={34}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
