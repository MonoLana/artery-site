"use client";

import React from "react";
import Productrate from "./rating";
import Image from "next/image";

// Use this component to render as detailed product that user click from catalog
const Productdetails = ({}) => {
  //  const {
  //    image,
  //    title,
  //    description,
  //    price,
  //    rating: { rate, count },
  //  } = props;

  return (
    <div className="flex flex-row justify-center items-center w-full h-full min-h-[600] mt-10">
      <div className="flex flex-row w-3/5">
        <div className="border-2 border-darkBrown">
          <div className="w-full h-full">
            <Image
              src="/images/bigProductExample.png"
              width={600}
              height={600}
              alt="detail example"
            />
          </div>
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-col justify-between h-full">
            {/* upper component */}
            <div className="flex flex-col justify-center px-8 w-full">
              <div className="pt-1 pb-8 flex flex-col justify-start items-start">
                <span className="text-xl text-Black font-semibold mr-2">
                  Lintong
                </span>
                <span className="text-3xl text-Black font-bold">Rp 49.900</span>
              </div>
              <div className="flex flex-col  mt-4">
                <div className="flex flex-row">
                  <span className="text-Black/70 font-thin mr-2">Process:</span>
                  <span className="text-Black font-semibold">Wash</span>
                </div>
                <div className="flex flex-row mt-1">
                  <span className="text-Black/70 font-thin mr-2">
                    Bean Type:
                  </span>
                  <span className="text-Black font-semibold">Arabica</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-Black/70 font-thin mr-2">
                    Taste Note:
                  </span>
                  <span className="text-Black font-semibold">
                    Caramel Bright
                  </span>
                </div>
                <div className="flex flex-row mt-1">
                  <span className="text-Black/70 font-thin mr-2">
                    Body Level:
                  </span>
                  <Productrate />
                </div>
                <div className="flex flex-row mt-1">
                  <span className="text-Black/70 font-thin mr-2">
                    Acid Level:
                  </span>
                  <Productrate />
                </div>
              </div>
              <div className="flex flex-row gap-x-4 justify-start py-8">
                <Image
                  src="/images/Artery-color.png"
                  alt="artery-logo"
                  height={32}
                  width={32}
                  className="rounded-full border-2 border-darkBrown"
                />
                <span className="text-2xl font-medium">ARTERY COFFEE</span>
              </div>
            </div>
          </div>
          {/* lower component*/}
          <div className="flex flex-col p-2 w-full border-t-2 border-r-2 border-b-2 border-darkBrown">
            <div className="flex flex-row items-center mb-8">
              <div className="w-1/4 rounded-md border border-darkBrown p-1 mx-2 flex flex-row justify-between items-center">
                <button className="text-Black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width={10}
                    height={10}
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
                <span className="text-Black text-xs">1</span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    width={10}
                    height={10}
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-row justify-center items-center p-2">
                <span className="text-Black mr-1 text-sm">Stock: </span>
                <span className="text-Black text-sm">999+</span>
              </div>
            </div>
            {/* total & button */}
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-between w-full items-center">
                <span className="text-Black/70">Subtotal</span>
                <span className="text-2xl text-Black font-semibold">
                  Rp 49.900
                </span>
              </div>
              <div className="w-full flex justify-center items-center mt-2">
                <button className="w-full flex justify-center items-center px-4 py-2 bg-darkBrown">
                  <span className="text-xl font-semibold text-White">
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
