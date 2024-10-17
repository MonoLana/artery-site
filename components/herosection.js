import Image from "next/image";

export default function Hero() {
  return (
    <section className={""}>
      <div
        className={
          "container flex flex-col justify-center p-12 mx-8 sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        }
      >
        {/* Hero header container */}
        <div
          className={
            "flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          }
        >
          <h1 className="font-bold text-5xl leading-none sm:text-6xl">
            <span className="text-black">Lorem Ipsum</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        {/* mascot image container */}
        <div
          className={
            "flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-122 2xl:h-128"
          }
        >
          <Image
            src="/images/mascot.png"
            width={500}
            height={300}
            alt="Mascot"
          />
        </div>
      </div>
    </section>
  );
}
