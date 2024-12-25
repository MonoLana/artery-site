"use client";
import React from "react";
import Image from "next/image";

const Productrate = ({ rate, count }) => {
  const roundedRate = Math.round(rate);
  const level = 4;
  return (
    <div className="flex items-center">
      {Array.from({ length: level }).map((_, i) => (
        <div key={i}>
          <Image
            src="/images/coffeBean.png"
            width={16}
            height={16}
            alt="bean rate"
          />
        </div>
      ))}
    </div>
  );
};

export default Productrate;
