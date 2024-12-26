"use client";
import React, { useState } from "react";
import Footer from "@/components/footer";
import Pagination from "@/components/pagination";
import Navbar from "@/components/navbar";

const Searchpage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-black scrollbar-hidden">
        <div className="flex flex-col justify-center items-center">
          <Pagination searchQuery={searchQuery} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
