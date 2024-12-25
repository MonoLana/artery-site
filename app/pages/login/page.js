"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center min-h-screen text-black scrollbar-hidden">
      <div className="lg:w-1/2 w-full bg-White flex flex-col mb-8 mt-12 px-16">
        <div className="flex justify-between mb-16">
          <Image
            src="/images/Artery-color.png"
            width={128}
            height={55}
            alt="Artery logo"
          />
          <div>
            <Link href="#" className="">
              <span className="underline text-xl text-darkBrown font-semibold">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
        <div className="px-10">
          <h1 className="text-5xl font-semibold text-darkBrown mb-4">Log in</h1>
          <form action="#">
            <div className="mb-4 bg-White">
              <label for="username" className="block text-Black">
                {" "}
                Username / Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username / Email"
                className="w-full border border-darkBrown py-2 px-3"
              />
            </div>
            <div className="mb-4 bg-White">
              <label for="username" className="block text-Black">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-darkBrown py-2 px-3"
              />
            </div>
            <div>
              <Link href="#" className="flex justify-end mb-12">
                <span className="font-semibold text-Black underline">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <div className="mb-8">
              <button className="w-full bg-darkBrown flex justify-center items-center p-3">
                <span className="font-bold text-White">Sign In</span>
              </button>
            </div>
            <div className="flex justify-center items-center mb-8 py-4">
              <Image
                src="/images/continueVector.png"
                width={550}
                height={22}
                alt="continue"
              />
            </div>
            <div className="mb-4">
              <button className="w-full bg-White border border-darkBrown flex flex-row gap-x-1 justify-center items-center p-3">
                <Image
                  src="/images/google.png"
                  width={32}
                  height={24}
                  alt="google logo"
                />
                <span className="text-Black">Google</span>
              </button>
            </div>
            <div className="mb-4">
              <button className="w-full bg-White border border-darkBrown flex flex-row gap-x-1 justify-center items-center p-3">
                <Image
                  src="/images/discord.png"
                  width={32}
                  height={24}
                  alt="discord logo"
                />
                <span className="text-Black">Discord</span>
              </button>
            </div>
            <div className="flex justify-center items-center mt-40">
              <span className="text-lg">
                By using this app, you agree to our terms and privacy policy
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          alt="form image"
          src="/images/formImage.png"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
