import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/src/components/nav-links";
import SmallContactBar from "@/src/components/small-contact-bar";
import ImageCarousel from "@/src/components/image-carousel";
import Card from "@/src/ui/card";
import Footer from "@/src/components/copyright-footer";

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
      <body className={inter.className}>
        <SmallContactBar />
        <NavLink />
        {children}
      </body>
    </html>
  );
}

