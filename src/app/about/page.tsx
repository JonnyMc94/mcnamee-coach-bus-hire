import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/src/components/copyright-footer";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="h-[15vh] mt-10 sm:mt-16 mb-8 sm:mb-10 flex flex-col items-center justify-center divide-y-2 divide-slate-600">
          <h1 className="mt-4 pb-4 sm:mt-10 text-4xl sm:text-7xl text-slate-600 text-center">
            About Us
          </h1>
          <p className="w-[40vh] p-10 text-xl text-center text-slate-600"></p>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-8 mb-10">
          <img
            src="/coach1.png"
            alt="McNamee Coach and Bus Hire"
            className="w-full lg:w-1/3 mb-14 lg:mb-0 rounded-lg"
          />
          <div className="lg:w-1/3 md:w-1/2 sm:w-full lg:mt-0 md:mt-8 sm:mt-4 lg:ml-12">
            <p className="text-base lg:text-lg">
              McNamee Coach and Bus Hire is a family-run business with a modern
              fleet. Our fleet consists of vehicles ranging from 4 seats to 72
              seater coaches. All of our vehicles are maintained inside and out
              to the highest standards, and our drivers are very experienced.
            </p>
            <p className="text-base lg:text-lg mt-8">
              We specialize in school transport and trips, hen/stag parties,
              airport transfers, sports trips, and more.
            </p>
            <p className="text-base lg:text-lg mt-8">
              Give us a call today for a quote. No job is too big or small.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
