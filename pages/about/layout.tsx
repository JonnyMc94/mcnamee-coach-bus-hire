import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import Footer from "@/components/copyright-footer";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import Card from "@/components/card";
import "@/pages/globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function AboutLayout({
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
      <ImageCarousel />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
