"use client";
import React from "react";

const Formproduct = () => {
  return (
    <div className="w-3/5">
      <div className="flex flex-col gap-y-2 p-2 pr-12">
        <label className="text-3xl text-Black font-bold">Product Name</label>
        <input
          type="text"
          className="border-2 border-darkBrown focus:none py-2 px-8"
          placeholder="Name"
        />
      </div>
      {/* Image */}
      <div className="flex flex-col w-[640px] h-[338px] p-2 mb-8">
        {/* Header */}
        <span className="font-bold text-Black text-3xl mb-2">
          Product Image
        </span>
        {/* Image and button container */}
        <div className="flex flex-row w-full">
          {/* Image */}
          <div className="min-w-[300px] min-h-[300px] border-2 border-darkBrown flex justify-center items-center">
            <span className="text-xl font-extrabold">Preview Image</span>
          </div>
          {/* Button */}
          <div className="w-full flex justify-end">
            <div className="w-full px-2 mx-8">
              <button className="bg-darkBrown text-White text-xl font-bold w-full py-2 px-12">
                Pick an Image
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Sorting Section */}
      <div className="flex flex-col px-2 pr-12 mb-8">
        <span className="font-semibold text-4xl text-Black">Bean Process</span>
        <div className="flex justify-center mt-4 border-2 border-darkBrown">
          <div className="relative inline-flex w-full">
            <svg
              className="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
            >
              <g fill="none" stroke="none" fill-rule="evenodd">
                <g
                  transform="translate(-539.000000, -199.000000)"
                  fill="#000"
                  fill-rule="nonzero"
                >
                  <g transform="translate(538.000000, 183.521208)">
                    <polygon
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776)"
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <select className="text-2xl font-bold text-gray-600 h-14 w-60 pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 pr-12 mb-8">
        <span className="font-semibold text-4xl text-Black">Bean Type</span>
        <div className="flex justify-center mt-4 border-2 border-darkBrown">
          <div className="relative inline-flex w-full">
            <svg
              className="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
            >
              <g fill="none" stroke="none" fill-rule="evenodd">
                <g
                  transform="translate(-539.000000, -199.000000)"
                  fill="#000"
                  fill-rule="nonzero"
                >
                  <g transform="translate(538.000000, 183.521208)">
                    <polygon
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776)"
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <select className="text-2xl font-bold text-gray-600 h-14 w-60 pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 pr-12 mb-8">
        <span className="font-semibold text-4xl text-Black">Body Level</span>
        <div className="flex justify-center mt-4 border-2 border-darkBrown">
          <div className="relative inline-flex w-full">
            <svg
              className="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
            >
              <g fill="none" stroke="none" fill-rule="evenodd">
                <g
                  transform="translate(-539.000000, -199.000000)"
                  fill="#000"
                  fill-rule="nonzero"
                >
                  <g transform="translate(538.000000, 183.521208)">
                    <polygon
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776)"
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <select className="text-2xl font-bold text-gray-600 h-14 w-60 pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 pr-12 mb-8">
        <span className="font-semibold text-4xl text-Black">Acid Level</span>
        <div className="flex justify-center mt-4 border-2 border-darkBrown">
          <div className="relative inline-flex w-full">
            <svg
              className="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
            >
              <g fill="none" stroke="none" fill-rule="evenodd">
                <g
                  transform="translate(-539.000000, -199.000000)"
                  fill="#000"
                  fill-rule="nonzero"
                >
                  <g transform="translate(538.000000, 183.521208)">
                    <polygon
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776)"
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <select className="text-2xl font-bold text-gray-600 h-14 w-60 pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 pr-12 mb-8">
        <span className="font-semibold text-4xl text-Black">Roastery Name</span>
        <div className="flex justify-center mt-4 border-2 border-darkBrown">
          <div className="relative inline-flex w-full">
            <svg
              className="text-white absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
            >
              <g fill="none" stroke="none" fill-rule="evenodd">
                <g
                  transform="translate(-539.000000, -199.000000)"
                  fill="#000"
                  fill-rule="nonzero"
                >
                  <g transform="translate(538.000000, 183.521208)">
                    <polygon
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776)"
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>

            <select className="text-2xl font-bold text-gray-600 h-14 w-60 pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formproduct;
