import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import Card from "@/components/card";
import Footer from "@/components/copyright-footer";

import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function GalleryLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <>
      <SmallContactBar />
      <NavLink />
      <main className={className}>
        {children}
      </main>
    </>
  );
}
