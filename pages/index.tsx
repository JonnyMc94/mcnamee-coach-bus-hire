import Head from "next/head";
import Footer from "@/components/copyright-footer";
import HomeCard from "@/components/home-card";
import RootLayout from "./layout";
import React from "react";

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is our home page" />
      </Head>
      <div className="m-2 sm:m-16 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
        <h1 className="block mt-6 sm:mt-16 pt-6 sm:pt-16 text-3xl sm:text-5xl text-slate-600 flex justify-center items-center text-center">
          McNamee Coach & Mini-Bus Hire
        </h1>
        <p className="block 4sm:text-center w-[80%] sm:w-[80%] sm:mb-14 mt-4 sm:mt-10 p-4 sm:p-10 text-base sm:text-xl text-slate-600 flex justify-center items-center text-center">
          Welcome to McNamee Coach and Bus Hire Ltd., your premier
          transportation solution in Oldcastle, County Meath. Under the expert
          direction of Daniel McNamee, we pride ourselves on offering a modern
          fleet of vehicles tailored to meet your every need. From intimate
          gatherings to large group excursions, our range spans from 4-seater
          luxury cars to spacious 72-seater coaches, ensuring comfort and
          convenience for all. <br /><br />With a steadfast commitment to quality, every
          vehicle in our fleet is meticulously maintained to guarantee a safe
          and enjoyable journey.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start justify-around mt-2 sm:mt-10 mb-8 sm:mb-16 gap-4 sm:gap-6 px-4 sm:px-16">
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
    </RootLayout>
  );
}
