import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/src/ui/nav-links";
import SmallContactBar from "@/src/ui/small-contact-bar";
import ImageCarousel from "@/src/ui/image-carousel";
import Card from "@/src/ui/card";
import Footer from "@/src//ui/copyright-footer";

import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery",
  description: "You can see images of our fleet here",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-svh`}>
        <SmallContactBar />
        <NavLink />
        {children}
      </body>
    </html>
  );
}

