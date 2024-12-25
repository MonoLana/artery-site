import React from "react";
import Image from "next/image";

const Biodata = () => {
  return (
    <div className="flex justify-center flex-row items-start w-full my-4">
      <div className="flex flex-col justify-center items-center">
        <div className="p-2 flex flex-col gap-y-1">
          <div className="w-full p-2 border-2 border-darkBrown">
            <Image
              src="/images/profilepic.png"
              width={300}
              height={300}
              alt="profilepic"
            />
            <button className="w-full bg-darkBrown flex justify-center items-center p-3 mt-2">
              <span className="font-bold text-White">Pick an Image</span>
            </button>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <span className="text-Black/70">Balance:</span>
            <span className="text-Black text-lg font-bold">Rp 92.029.204</span>
          </div>
          <div className="flex w-full">
            <button className="w-full bg-darkBrown flex justify-center items-center p-3">
              <span className="font-bold text-White">Edit Biodata</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-start pl-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex self-start px-6 py-4">
            <h1 className="font-semibold text-Black text-xl">Biodata</h1>
          </div>
          <div className="px-4 py-5 sm:p-0">
            <dl className="">
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-Black/70">Username</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John Doe
                </dd>
              </div>
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-Black/70">
                  First Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  John
                </dd>
              </div>
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-Black/70">Last Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Doe
                </dd>
              </div>
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  johndoe@example.com
                </dd>
              </div>
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Discord</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  discordnyajohndoe
                </dd>
              </div>
              <div className="py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-y-1 sm:gap-x-10 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Phone Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  +62 812 3456 7890
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
