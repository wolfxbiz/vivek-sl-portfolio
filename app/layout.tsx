import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vivek S L — UI/UX Designer & Growth Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek S L — UI/UX Designer & Growth Strategist",
    description:
      "UI/UX designer and growth strategist with 6+ years building conversion-focused products, brand systems, and SaaS platforms for UAE and GCC clients.",
    creator: "@viveksl",
    images: ["/og-image.png"],
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
      <GoogleAnalytics gaId="G-LFHSQLSKHP" />
      <Script
        id="clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xeliym0ujw");`,
        }}
      />
    </html>
  );
}
