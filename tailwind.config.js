/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
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
        Black: "#111111",
        White: "#F4F4F4",
        darkBrown: "#543600",
        latte: "#AF9C8A",
      },
    },
  },
  images: {
    domains: ["https://fakestoreapi.com/products"],
  },
};
