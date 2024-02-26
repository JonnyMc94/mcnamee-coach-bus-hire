import Image from "next/image";

import NavLink from "@/src/ui/nav-links";
import Footer from "@/src/ui/copyright-footer";
import SmallContactBar from "@/src/ui/small-contact-bar";
import ImageCarousel from "@/src/ui/image-carousel";
import HomeCard from "@/src/ui/home-card";
import React from "react";

export default function Home() {
  return (
    <main className="">
      <SmallContactBar />
      <NavLink />
      <ImageCarousel />
      <div className="h-[15vh] w-1/3 sm:w-auto md:w-full lg:w-32 xl:w-3/4 m-24 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
        <h1 className="mt-10 pt-16 text-5xl text-slate-600 flex justify-center items-center text-center">
          McNamee Coach & Mini-Bus Hire
        </h1>
        <div className="h-2 border-t-0 bg-black"></div>
        <p className="mb-10 mt-10 p-10 text-xl text-slate-600 flex justify-center items-center text-center">
          We offer a wide range of services and cater to any group size. Scroll
          down to check them out and don't hesitate to contact us for more
          details!{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-16 gap-10">
        <HomeCard id={1} title={"About"} details={"See some more information about our company"} src={"/2coachnightime.JPG"} alt={"Two coaches at nightitme"} href={"/about"}/>
        <HomeCard id={2} title={"Services"} details={"See information on the variety of services we offer"} src={"/greycoach.png"} alt={"A photo of a grey coach"} href={"/services"}/>
        <HomeCard id={3} title={"Gallery"} details={"See images of our fleet."} src={"/2coach4.JPG"} alt={"A photo of a bus fleet lineup"} href={"/gallery"}/>
      </div>
      <Footer />{" "}
    </main>
  );
}