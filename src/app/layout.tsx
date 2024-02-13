import type { Metadata } from "next";
import SmallContactBar from "@/src/ui/small-contact-bar";
import Footer from '@/src/ui/copyright-footer'
import { Inter } from "next/font/google";
import "./globals.css";

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
    <>
      <SmallContactBar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </>
  );
}
