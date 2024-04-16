import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import Footer from "@/components/copyright-footer";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import WhatsappChat from '@/components/whatsapp-chat';
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
