"use client";
import React from "react";

const Formproduct = () => {
  return (
    <div className="sm:w-[80%] w-[90%] mx-auto">
      <form className="p-5 mt-5 flex flex-col">
        <div className="mb-5 flex flex-col">
          <label for="product-name" className="text-xl font-bold md:mb-0 mb-1">
            Product Name:{" "}
          </label>
          <input
            type="text"
            name="product-name"
            id=""
            placeholder=""
            className="md:w-[35%] w-1/1 px-4 py-2 md:mb-0 mb-3 rounded-xl"
          />
        </div>
        <div className="mt-5 mb-5 flex flex-col">
          <label for="product-image" className="text-xl font-bold md:mb-0 mb-1">
            Product Image:{" "}
          </label>
          <input type="file" name="product-name" id="" />
        </div>
        <div className="mt-5 mb-5">
          <label for="category" className="block mb-2 text-xl font-bold">
            Product Category:
          </label>
          <select
            id="category"
            className="border border-card text-sm rounded-lg block w-full p-2.5 bg-white"
          >
            <option selected></option>
            <option value="things"> Tradi </option>
            <option value="things2"> Pixel </option>
            <option value="things3"> 3d </option>
          </select>
        </div>
        <div className="mt-5 mb-5">
          <label for="description" className="text-xl font-bold">
            Product Description
          </label>
          <br />
          <textarea
            name="description"
            rows="5"
            placeholder="Write your product description here"
            className="w-[100%] px-4 py-2 rounded-xl appearance-none text-heading text-md font-bold"
          ></textarea>
        </div>
        <p className="font-bold text-xl text-red-500 mt-5 mb-5">
          By adding your products you agree to the terms and conditions
        </p>
        <button
          className="rounded-3xl bg-primaryButton hover:bg-primaryButtonHover py-4 px-6 text-center text-lg text-black font-bold transition-all shadow-md hover:shadow-lg active:bg-primaryButtonActive mt-5"
          type="button"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Formproduct;
