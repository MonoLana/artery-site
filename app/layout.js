import { Cinzel_Decorative, Open_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

export const cinzel_decorative_init = Cinzel_Decorative({
  subsets: ["latin"],
  display: "swap",
  variable: "--font cinzel_decorative",
  weight: ["400", "700", "900"],
});

export const open_sans_init = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font open_sans",
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "${cinzel_decorative_init.variable} ${open_sans_init.variable}"
        }
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
