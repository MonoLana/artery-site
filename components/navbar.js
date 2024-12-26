"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div
      className={
        "flex flex-row fixed md:w-full top-0 bg-darkBrown px-8 pt-2 pb-2 justify-between content-center items-center rounded-b-xl z-10"
      }
    >
      {/* Logo Container */}
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
        {/* Button Container */}
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
          </Link>
          <Link href="#" className="mx-2">
            <Image
              src="/images/mail.png"
              width={24}
              height={24}
              alt="Mail-logo"
            />
          </Link>
        </div>
        {/* Username Container */}
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
  );
};

export default Navbar;
