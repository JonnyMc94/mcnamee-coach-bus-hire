import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/src/components/nav-links";
import Footer from "@/src/components/copyright-footer";
import SmallContactBar from "@/src/components/small-contact-bar";
import ImageCarousel from "@/src/components/image-carousel";
import Card from "@/src/ui/card";
import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servies",
  description: "Details of the services we currently service",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmallContactBar />
        <NavLink />
        <ImageCarousel />
        {children}
        <Footer />
      </body>
    </html>
  );
}
