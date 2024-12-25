"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Pagination from "@/components/pagination";

const Searchpage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <div
        className={
          "flex flex-row fixed md:w-full top-0 bg-darkBrown px-8 pt-2 pb-2 justify-between content-center items-center rounded-b-xl z-10"
        }
      >
        {/*Logo Container*/}
        <div className="flex content-center">
          <Link href="/" className={""}>
            <Image
              src="/images/Artery-white.png"
              height={55}
              width={128}
              alt="Artery-logo"
            />
          </Link>
        </div>
        {/* Searchbar Container */}
        <div className="flex flex-row p-2 bg-transparent rounded-3xl border border-White content-center items-center w-[550px] h-[44px]">
          <Image
            src="/images/search.png"
            height={24}
            width={24}
            alt="Search-logo"
          />
          <input
            type="text"
            className="bg-transparent w-full ml-2 text-sm text-White font-semibold focus:outline-none"
            placeholder="Search bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-row">
          {/* button container */}
          <div
            className={
              "flex flex-row text-white py-2 md:px-2 lg:px-4 justify-between items-center"
            }
          >
            <Link href="/pages/cart" className="mx-2">
              <Image
                src="/images/shopping_cart.png"
                height={24}
                width={24}
                alt="Cart-logo"
              />
            </Link>
            <Link href="#" className="mx-2">
              <Image
                src="/images/notifications.png"
                width={24}
                height={24}
                alt="Notification-logo"
              />
            </Link>{" "}
            <Link href="#" className="mx-2">
              <Image
                src="/images/mail.png"
                width={24}
                height={24}
                alt="Mail-logo"
              />
            </Link>
          </div>
          {/* username container */}
          <div className="ml-4 mr-8 py-2">
            <Link href="pages/buyer" className="flex flex-row">
              <Image
                src="/images/userFrame.png"
                width={32}
                height={32}
                alt="User-logo"
              />
              <span className="mx-2 text-lg text-White font-semibold">
                Username
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-black scrollbar-hidden ">
        <div className="flex flex-col justify-center items-center">
          <Pagination searchQuery={searchQuery} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
