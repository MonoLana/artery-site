import Image from "next/image";
import Benefit from "@/components/benefitsection";
import Productsection from "@/components/hotproduct";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-black scrollbar-hidden">
        <div className="justify-center items-center">
          <div className="mt-6 flex justify-center justify-items-center items-center">
            <Image
              src="/images/cafe.png"
              width={1320}
              height={708}
              alt="Cafe-image"
            />
          </div>
          <Benefit />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">HOT PRODUCT</h1>
          <Image
            src="/images/Divider.png"
            width={368}
            height={0}
            alt="Divider"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-20 sm:p-8">
        <Productsection />
        <Footer />
      </div>
    </div>
  );
}
