import type { Metadata } from "next";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";


const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Olympia Fitness Centre | Perambur, Chennai",
  description: "Chennai's most intense fitness experience. Elite equipment, expert coaches, and a community that pushes you beyond limits. Located in Perambur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable} font-barlow`}>
        {children}
      </body>
    </html>
  );
}