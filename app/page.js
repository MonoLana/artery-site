import Hero from "@/components/herosection";
import Benefit from "@/components/benefitsection";
import Form from "@/components/form";
import Wave from "@/components/pageWave";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-black scrollbar-hidden">
      <Wave />
      <div className="relative z-10">
        <Hero />
        <Benefit />
        <Form />{" "}
      </div>
    </div>
  );
}
