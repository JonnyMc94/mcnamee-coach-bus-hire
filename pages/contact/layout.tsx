import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import Footer from "@/components/copyright-footer";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import WhatsappChat from '@/components/whatsapp-chat';
// import "@/pages/globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function ContactLayout({
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
      <WhatsappChat/>
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}
