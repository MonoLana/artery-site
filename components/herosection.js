import Image from "next/image";
import { Cinzel } from "next/font/google";

export default function Hero() {
  return (
    <section className={""}>
      <div
        className={
          "container flex flex-col justify-center content-center p-12 mx-8 sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
        }
      >
        {/* Hero header container */}
        <div
          className={
            " flex flex-col justify-center content-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          }
        >
          <h1 className={"cinzel font-bold text-5xl leading-none sm:text-6xl"}>
            Unleash Your Imagination Where Art Meets Fantasy!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-primaryText font-semibold">
            Are you an artist with a passion for creating enchanting worlds and
            characters? Or perhaps you’re a fan seeking unique, pixelated
            treasures to adorn your collection? You’ve landed in the right
            place! At Pixel Fantasy, we celebrate the magic of creativity and
            the artistry of fanart.
          </p>
        </div>
        {/* mascot image container */}
        <div
          className={
            " flex items-center justify-center content-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-122 2xl:h-128"
          }
        >
          <Image
            src="/images/mascot.png"
            className="image-pixelated image-crisp"
            width={500}
            height={250}
            alt="Mascot"
          />
        </div>
        {/* end of mascot image container */}
      </div>
    </section>
  );
}
