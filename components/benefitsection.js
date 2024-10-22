import { Cinzel } from "next/font/google";

export default function Benefit() {
  return (
    <div
      className={
        "container flex flex-col justify-center p-8 mx-8 sm:py-12 lg:py-12 lg:flex-row lg:justify-between max-sm:mt-8"
      }
    >
      <div
        className={
          "flex flex-col justify-center text-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
        }
      >
        <h1 className="cinzel font-bold text-lg sm:text-xl">Get Discovered</h1>
        <p className="text-primaryText font-bold">
          Showcase your art to a global audience and get discovered by potential
          buyers, collectors, and fans.
        </p>
      </div>
      <div
        className={
          "flex flex-col justify-center text-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
        }
      >
        <h1 className="cinzel font-bold text-lg sm:text-xl">
          Sell Your Assets
        </h1>
        <p className="text-primaryText font-bold">
          Easily upload and sell you digital assets, including art, graphics,
          and more.
        </p>
      </div>
      <div
        className={
          "flex flex-col justify-center text-center lg:max-w-md xl:max-w-lg pr-2 max-sm:my-2"
        }
      >
        <h1 className="cinzel font-bold text-lg sm:text-xl">
          Commissioned Work
        </h1>
        <p className="text-primaryText font-bold">
          Offer custom commissions and get hired by clients who appreciate your
          unique style.
        </p>
      </div>
      <div
        className={
          "flex flex-col justify-center text-center lg:max-w-md xl:max-w-lg max-sm:my-2"
        }
      >
        <h1 className="cinzel font-bold text-lg sm:text-xl">
          Community Support
        </h1>
        <p className="text-primaryText font-bold">
          Join a community of like-minded artists, get feedback, and stay
          inspired.
        </p>
      </div>
    </div>
  );
}
