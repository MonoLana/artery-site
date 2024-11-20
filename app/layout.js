import { Cinzel_Decorative, Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

export const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
});

export const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "${cinzel.variable} ${opensans.variable} bg-background w-full overflow-x-hidden overflow-y-auto [-ms-overflow-style:none] min-h-screenscrollbar"
        }
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
