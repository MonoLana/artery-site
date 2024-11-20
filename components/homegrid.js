"use client";
import React from "react";

export default function Grid() {
  return (
    <div className={"relative z-10 w-full h-[684px] mt-8"}>
      {/* main container */}
      <div className=" grid grid-cols-2 gap-2 h-full">
        {/*first sub-container*/}
        <div className={"h-full bg-card items-center flex justify-center"}>
          <h1>First sub container</h1>
        </div>
        {/*second sub-container that contains two element*/}
        <div className={"grid grid-cols-1 grid-rows-2 gap-2"}>
          <div className="flex items-center justify-center bg-card">
            second sub container
          </div>
          <div className="flex items-center justify-center bg-primaryButton">
            second sub container
          </div>
        </div>
      </div>
    </div>
  );
}
