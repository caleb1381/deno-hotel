import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lato, Playfair_Display } from "next/font/google";

import "@/app/styles.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--playfair",
});

export const metadata = {
  title: "Deno Hotels",
  description:
    "Deno Hotels and Apartments is a luxurious urban retreat that seamlessly blends the comfort of a hotel with the convenience of apartment living. Nestled in the heart of the city, this stylish establishment offers meticulously designed rooms and fully furnished apartments, each adorned with modern amenities and elegant decor. Guests can enjoy a tranquil stay, complete with impeccable service, making Deno Hotel and Apartments the ideal choice for both short-term and extended stays in the city.",
  icons: {
    icon: "/images/logo.ico",
  },
  author: "Odediran Ifeoluwa",
  keywords: "hotels, apartment, deno hotels, bauchi, apartments, deno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfair.variable}`}
        style={{ background: "white" }}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
