import Head from "next/head";
import AboutLayout from "./layout";

export default function AboutPage() {
  return (
    <AboutLayout className="">
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="You can find out more about our company here"
        />
      </Head>
      <div className="container mx-auto p-4 lg:p-8">
        <div className="h-[15vh] mt-10 sm:mt-16 mb-8 sm:mb-10 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
          <h1 className="mt-4 pb-4 sm:mt-10 text-4xl sm:text-7xl text-slate-600 text-center">
            About Us
          </h1>
          <p className="w-[40vh] p-10 text-xl text-center text-slate-600"></p>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:space-x-8 mb-10">
          <img
            src="/whitecoach3.JPG"
            alt="McNamee Coach and Bus Hire"
            className="w-full lg:w-[40%] mb-14 lg:mb-0 rounded-lg"
          />
          <div className="lg:w-[40%] md:w-[50%] sm:w-full lg:mt-0 md:mt-8 sm:mt-4 lg:ml-12">
            <p className="text-base lg:text-lg">
              Welcome to McNamee Coach and Bus Hire Ltd., your premier
              transportation solution in Oldcastle, County Meath. Under the
              expert direction of Daniel McNamee, we pride ourselves on offering
              a modern fleet of vehicles tailored to meet your every need. From
              intimate gatherings to large group excursions, our range spans
              from 4-seater luxury cars to spacious 72-seater coaches, ensuring
              comfort and convenience for all. With a steadfast commitment to
              quality, every vehicle in our fleet is meticulously maintained to
              guarantee a safe and enjoyable journey.
            </p>
            <p className="text-base lg:text-lg mt-8">
              Trust McNamee Coach and Bus Hire Ltd. for your next adventure.{" "}
            </p>
          </div>
        </div>
      </div>
    </AboutLayout>
  );
}
