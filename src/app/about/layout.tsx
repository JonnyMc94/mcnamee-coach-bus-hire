import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import Footer from "@/components/copyright-footer";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import Card from "@/src/components/card";
import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About",
  description: "You can find out more about our company here",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SmallContactBar />
        <NavLink />
        <ImageCarousel />
        {children}
        <Footer />
      </body>
    </html>
  );
}
