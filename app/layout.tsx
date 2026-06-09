import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek S L — UI/UX Designer & Creative Content Strategist",
  description:
    "Merging UI/UX architecture with strategic content marketing and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="bg-black text-white font-(family-name:--font-poppins) font-light min-h-screen">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
