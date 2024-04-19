import { Inter } from "next/font/google";
import "@/pages/globals.css";
import SmallContactBar from "@/components/small-contact-bar";
import ImageCarousel from "@/components/image-carousel";
import NavLink from "@/components/nav-links";
import Footer from "@/components/copyright-footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SmallContactBar />
      <NavLink />
      <ImageCarousel />
      <main className={`${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
