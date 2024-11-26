/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5E6E8",
        primary: "#192A51",
        primaryButton: "#AAA1C8",
        primaryButtonHover: "#8C81A3",
        primaryButtonActive: "#6E647E",
        secondaryButton: "#967AA1",
        primaryText: "#967AA2",
        card: "#D5C6E0",
        foreground: "var(--foreground)",
      },
    },
  },
  images: {
    domains: ["https://fakestoreapi.com/products"],
  },
};
