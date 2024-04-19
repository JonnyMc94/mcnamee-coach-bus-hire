import { Inter } from "next/font/google";
import NavLink from "@/components/nav-links";
import SmallContactBar from "@/components/small-contact-bar";
import "@/pages/globals.css";

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
