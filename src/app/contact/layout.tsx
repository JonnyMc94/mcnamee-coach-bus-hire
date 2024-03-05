import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/src/components/nav-links";
import Footer from "@/src/components/copyright-footer";
import SmallContactBar from "@/src/components/small-contact-bar";
import ImageCarousel from "@/src/components/image-carousel";
import WhatsappChat from '@/src/components/whatsapp-chat';
import Card from "@/src/components/card";
import "@/src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Us",
  description: "You can contact us with any queries here",
};

export default function ContactLayout({
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
        <WhatsappChat/>
        {children}
        <Footer />{" "}
      </body>
    </html>
  );
}
