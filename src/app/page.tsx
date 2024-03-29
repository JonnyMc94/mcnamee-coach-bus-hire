import Image from "next/image";

import NavLink from "@/src/components/nav-links";
import Footer from "@/src/components/copyright-footer";
import SmallContactBar from "@/src/components/small-contact-bar";
import ImageCarousel from "@/src/components/image-carousel";
import HomeCard from "@/src/components/home-card";
import React from "react";

export default function Home() {
  return (
    <main>
      <SmallContactBar />
      <NavLink />
      <ImageCarousel />
      <div className="h-[10vh] m-4 sm:m-16 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
        <h1 className="mt-6 sm:mt-16 pt-6 sm:pt-16 text-3xl sm:text-5xl text-slate-600 flex justify-center items-center text-center">
          McNamee Coach & Mini-Bus Hire
        </h1>
        <p className="w-full sm:w-[80%] mb-8 sm:mb-14 mt-4 sm:mt-10 p-4 sm:p-10 text-base sm:text-xl text-slate-600 flex justify-center items-center text-center">
          We offer a wide range of services and cater to any group size. Scroll
          down to check them out and don't hesitate to contact us for more
          details!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-10 mb-8 sm:mb-16 gap-4 sm:gap-6">
        <HomeCard
          id={1}
          title={"About"}
          details={"See some more information about our company"}
          src={"/2coachnightime.JPG"}
          alt={"Two coaches at nighttime"}
          href={"/about"}
        />
        <HomeCard
          id={2}
          title={"Services"}
          details={"See information on the variety of services we offer"}
          src={"/greycoach.png"}
          alt={"A photo of a grey coach"}
          href={"/services"}
        />
        <HomeCard
          id={3}
          title={"Gallery"}
          details={"See images of our fleet."}
          src={"/2coach4.JPG"}
          alt={"A photo of a bus fleet lineup"}
          href={"/gallery"}
        />
      </div>
      <Footer />
    </main>
  );
}
