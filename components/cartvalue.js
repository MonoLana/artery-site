"use client";
import React from "react";

const Cartvalue = ({ props }) => {
  const totalVal = Object.values(props).reduce(
    (acc, value) => acc + value.price,
    0,
  );

  return (
    <div className="flex flex-col justify-between w-2/5 max-w-[440px] h-[400px] mx-4 border-3 border-darkBrown px-4 pt-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-4">
          <span className="text-lg text-Black font-semibold">
            Payment Methods
          </span>
          <span className="text-lg text-Black/70">See All</span>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <label for="payment-option-1" className="text-lg">
            Dana
          </label>
          <input
            id="payment-option-1"
            type="radio"
            name="payment"
            value="Dana"
            className="appearance-none w-4 h-4 rounded-full focus:bg-darkBrown border border-darkBrown focus:border-2 focus:border-darkBrown"
            checked=""
          ></input>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <label for="payment-option-2" className="text-lg">
            Gopay
          </label>
          <input
            id="payment-option-2"
            type="radio"
            name="payment"
            value=""
            className="border-darkBrown"
            checked=""
          ></input>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <label for="payment-option-3" className="text-lg">
            Virtual Account BCA
          </label>
          <input
            id="payment-option-3"
            type="radio"
            name="payment"
            value=""
            className="border-darkBrown"
            checked=""
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4">
        <div className="flex flex-row justify-between">
          <span className="text-lg text-Black">Total Harga {3} barang</span>
          <span className="text-lg text-Black">Rp 149.700</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-lg text-Black">Total Ongkos Kirim</span>
          <span className="text-lg text-Black">Rp 2.000</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-lg text-Black font-bold">Total Tagihan</span>
          <span className="text-lg text-Black font-bold">Rp 151.700</span>
        </div>
      </div>
      <div className="mb-4">
        <button className="w-full bg-darkBrown flex justify-center items-center py-2">
          <span className="font-semibold text-lg text-White">Pay Now</span>
        </button>
      </div>
    </div>
  );
};

export default Cartvalue;
