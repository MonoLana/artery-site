import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container flex flex-col justify-center p-12 mx-8 mt-8  rounded-lg bg-latte">
      <div className="flex justify-between">
        <div className="flex flex-col w-2/3">
          <Image
            src="/images/Artery-black.png"
            width={300}
            height={132}
            alt="artery-logo"
          />
          <h1 className="text-2xl text-Black font-semibold py-6">
            Artery Inc.
          </h1>
          <p className="text-lg text-Black">123 Justice Ave, Suite 200</p>
          <p className="text-lg text-Black">Los Angeles, CA 90001</p>
          <p className="text-lg text-Black">United States</p>
        </div>
        <div className="flex justify-between items-center gap-x-8 w-1/3">
          <div className="flex flex-col justify-center items-center mx-auto gap-y-4">
            <h1 className="text-3xl text-Black font-semibold mb-8">Navigate</h1>
            <Link href="/">
              <span className="text-Black/70 font-semibold text-lg">Home</span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                About Us
              </span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">Blog</span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                Contact Us
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto gap-y-4">
            <h1 className="text-3xl text-Black font-semibold mb-8">Socials</h1>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                Instagram
              </span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                Facebook
              </span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                Linkedin
              </span>
            </Link>
            <Link href="#">
              <span className="text-Black/70 font-semibold text-lg">
                Twitter
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Image src="/images/footerLine.png" width={1220} height={0} alt="#" />
      <div className="mt-1 mb-6 flex justify-center items-center">
        <span className="text-xl font-thin">
          Artery © 2024. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
