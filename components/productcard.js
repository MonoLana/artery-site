import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Productcard = ({ props }) => {
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
          <span>Menampilkan 1- x barang dari total untuk userinput</span>
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
            <svg
              className="rotate-90 group-focus:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
              />
            </svg>
            <div className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("cheapestToHighest")}
              >
                <p>Cheapest to highest</p>
              </span>
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("highestToCheapest")}
              >
                <p>Highest to cheapest</p>
              </span>
              <span
                className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg cursor-pointer"
                onClick={() => setSortCriteria("sortByName")}
              >
                <p>Sort by name</p>
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
            {/* Product Image */}
            <div className="w-[300px] h-[383px] max-w-[300px] max-h-[383px]">
              <Link href={`/details/${product.id}`}>
                <img
                  src={product.coffe_img}
                  alt="Product image"
                  className="w-full h-full"
                />
              </Link>
            </div>
            {/* Product Information*/}
            <div className="flex justify-between p-2 border-t-2 border-darkBrown">
              <Link href={`/details/${product.id}`}>
                <div className="p-2 flex flex-col">
                  {/* name + category */}
                  <div className="flex flex-row gap-x-2 max-w-[300ox]">
                    <p className="text-lg text-Black font-bold line-clamp-1 max-w-[]">
                      {product.name}
                    </p>
                    <Image
                      src="/images/verticalDivider.png"
                      alt="divider"
                      width={1}
                      height={5}
                    />
                    <div className="flex items-center">
                      <p className="text-Black/70">{product.type}</p>
                    </div>
                  </div>
                  {/* type */}
                  <p className="text-Black/70">{product.taste_note} </p>
                  {/* Price */}
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

export default Productcard;
