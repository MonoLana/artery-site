"use client";
import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Item from "@/components/itemcard";

export default function Sellerlist() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center  min-h-screen p-8 pb-20 gap-16 sm:p-20  text-black scrollbar-hidden">
        <div className="w-full flex flex-row justify-between gap-x-4">
          <div className="w-1/5 border-3 border-darkBrown p-4">
            <ul>
              <li>
                <Link href="/pages/seller_list">
                  <span className="text-Black text-xl font-bold">
                    Item List
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="text-Black/70 text-xl">
                    Profile Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-4/5 border-3 border-darkBrown pr-8">
            <Item />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
