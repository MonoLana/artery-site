import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className={
        "flex flex-row fixed w-full top-0 bg-primary px-8 justify-between content-center z-20"
      }
    >
      <div>
        <Link href="/" className={""}>
          <Image
            src="/images/logo.png"
            height={80}
            width={80}
            alt="Artery-logo"
          />
        </Link>
      </div>
      <div className={"text-white px-4 justify-between content-center"}>
        <Link href="#" className="px-4">
          Cart
        </Link>
        <Link href="#" className="px-4">
          Account
        </Link>
        <Link href="#" className="px-4">
          Merchant
        </Link>{" "}
        <a href="/pages/home">
          <button className="rounded-lg bg-primaryButton hover:bg-secondaryButton px-6 py-2 font-bold">
            Shop now!
          </button>
        </a>
      </div>
    </div>
  );
}
