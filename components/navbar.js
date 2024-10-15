import Link from "next/link";

export default function Navbar() {
  return (
    <div className={"flex flex-row bg-primary py-4 px-8 justify-between"}>
      <div>
        <a className="font-bold text-2xl text-white">Artery</a>
      </div>
      <div className={"text-white px-4 justify-between"}>
        <Link href="#" className="px-4">
          Cart
        </Link>
        <Link href="#" className="px-4">
          Account
        </Link>
        <Link href="#" className="px-4">
          Merchant
        </Link>{" "}
        <button className="rounded-lg bg-primaryButton px-6 py-2 font-bold">
          Shop now!
        </button>
      </div>
    </div>
  );
}
