"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Addproduct = ({ product }) => {
  return (
    <div className="mt-8 mb-14 flex flex-row justify-center items-center">
      <Link
        href="/pages/new_product"
        className="font-bold text-primaryText text-3xl"
      >
        Your Product
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[30px] fill-[#192A51]"
        viewBox="0 -960 960 960"
      >
        <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0-83-31.5-156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    </div>
  );
};

export default Addproduct;
