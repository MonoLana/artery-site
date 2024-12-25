"use client";
import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Biodata from "@/components/biodata";

export default function Buyerprofile() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center  min-h-screen p-8 pb-20 gap-16 sm:p-20  text-black scrollbar-hidden">
        <Biodata />
        <Footer />
      </div>
    </div>
  );
}
