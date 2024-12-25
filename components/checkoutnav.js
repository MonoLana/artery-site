import Image from "next/image";

export default function Checkoutnavbar() {
  return (
    <div
      className={
        "flex flex-row fixed w-full top-0 bg-darkBrown px-8 pt-2 pb-2 justify-between content-center items-center rounded-b-xl"
      }
    >
      <div className="flex content-center my-2">
        <Image
          src="/images/Artery-white.png"
          width={128}
          height={55}
          alt="Artery-logo"
        />
      </div>
    </div>
  );
}
