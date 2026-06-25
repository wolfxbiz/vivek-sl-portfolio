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
  metadataBase: new URL("https://viveksl.com"),
  title: {
    default: "Vivek S L — UI/UX Designer & Growth Strategist",
    template: "%s — Vivek S L",
  },
  description:
    "UI/UX designer and growth strategist with 6+ years building conversion-focused products, brand systems, and SaaS platforms for UAE and GCC clients.",
  keywords: [
    "UI UX designer",
    "UX designer UAE",
    "product designer",
    "conversion rate optimisation",
    "landing page design",
    "SaaS design",
    "brand identity designer",
    "Vivek SL",
  ],
  authors: [{ name: "Vivek S L", url: "https://viveksl.com" }],
  creator: "Vivek S L",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://viveksl.com",
    siteName: "Vivek S L",
    title: "Vivek S L — UI/UX Designer & Growth Strategist",
    description:
      "UI/UX designer and growth strategist with 6+ years building conversion-focused products, brand systems, and SaaS platforms for UAE and GCC clients.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek S L — UI/UX Designer & Growth Strategist",
    description:
      "UI/UX designer and growth strategist with 6+ years building conversion-focused products, brand systems, and SaaS platforms for UAE and GCC clients.",
    creator: "@viveksl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
