import { Cinzel, Nunito_Sans } from "next/font/google";
import Image from "next/image";

export default function Benefit() {
  return (
    <div
      className={
        "container flex flex-col justify-center p-8 mx-8 mt-8 mb-8 sm:py-12 lg:py-12 lg:justify-between max-sm:mt-12"
      }
    >
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-3xl text-Black font-semibold">
          Our Commitment to Customer
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-16">
        <div
          className={
            "flex flex-col justify-center items-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
          }
        >
          <Image
            src="/images/sellingpoint1.png"
            width={80}
            height={80}
            alt="sellingpoint1"
          />
          <h1 className="text-xl text-Black my-4 Nunito_Sans">
            Every cup has a unique taste
          </h1>
        </div>
        <div
          className={
            "flex flex-col justify-center items-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
          }
        >
          <Image
            src="/images/sellingpoint2.png"
            width={80}
            height={80}
            alt="sellingpoint2"
          />
          <h1 className="text-xl text-Black my-4">
            Caring for the environment with recyclable materials.
          </h1>
        </div>
        <div
          className={
            "flex flex-col justify-center items-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
          }
        >
          <Image
            src="/images/sellingpoint3.png"
            width={80}
            height={80}
            alt="sellingpoint3"
          />
          <h1 className="text-xl text-Black my-4">
            Exclusive flavors only available here.
          </h1>
        </div>
      </div>
    </div>
  );
}
