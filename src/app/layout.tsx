import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/src/components/nav-links";
import Footer from "@/src/components/copyright-footer";
import SmallContactBar from "@/src/components/small-contact-bar";
import ImageCarousel from "@/src/components/image-carousel";
import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "This is our home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
