"use client";
import React from "react";

import Wave from "@/components/pageWave";
import Formproduct from "@/components/productform";

const Newproduct = () => {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black scrollbar-hidden ">
      <Wave />
      <div className="relative z-10">
        <Formproduct />
      </div>
    </div>
  );
};

export default Newproduct;
