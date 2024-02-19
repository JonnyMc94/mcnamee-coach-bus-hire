"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
  const options = { loop: true, playOnInit: true, delay: 20000 };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(options)]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="relative h-[50vh] flex-[0_0_100%]">
          {" "}
          <div className="absolute z-10 w-[50vh] h-[34vh] left-1/3 top-28 bg-inherit">
            <div className="flex flex-row items-center justify-start">
              <Link
                className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-[#130F49] text-gray-50 font-light rounded-xl text-2xl flex justify-between"
                href="/contact"
              >
                {" "}
                Contact Us
                <FaArrowRight className="text-black ml-2 m-1 text-2xl" />
              </Link>
            </div>
            <h2 className="text-6xl text-white font-extrabold mt-8">Get in contact today!</h2>
            <h2 className="text-2xl text-white font-bold mt-6">Find a bus or coach to suit your need!</h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image alt="" fill src="/coach1.png" className="object-fill z-0" />
        </div>

        <div className="relative h-[50vh] flex-[0_0_100%]">
          {" "}
          <div className="absolute z-10 w-[50vh] h-[34vh] left-1/3 top-28 bg-inherit">
            <div className="flex flex-row items-center justify-start">
              <Link
                className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-[#130F49] text-gray-50 font-light rounded-xl text-2xl flex justify-between"
                href="/contact"
              >
                {" "}
                Contact Us
                <FaArrowRight className="text-black ml-2 m-1 text-2xl" />
              </Link>
            </div>
            <h2 className="text-6xl text-white font-extrabold mt-8">Get in contact today!</h2>
            <h2 className="text-2xl text-white font-bold mt-6">Find a bus or coach to suit your need!</h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image alt="" fill src="/coach2.png" className="object-fill" />
        </div>

        <div className="relative h-[50vh] flex-[0_0_100%]">
          {" "}
          <div className="absolute z-10 w-[50vh] h-[34vh] left-1/3 top-28 bg-inherit">
            <div className="flex flex-row items-center justify-start">
              <Link
                className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-[#130F49] text-gray-50 font-light rounded-xl text-2xl flex justify-between"
                href="/contact"
              >
                {" "}
                Contact Us
                <FaArrowRight className="text-black ml-2 m-1 text-2xl" />
              </Link>
            </div>
            <h2 className="text-6xl text-white font-extrabold mt-8">Get in contact today!</h2>
            <h2 className="text-2xl text-white font-bold mt-6">Find a bus or coach to suit your need!</h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image alt="" fill src="/coach3.png" className="object-fill" />
        </div>
      </div>
    </div>
  );
}
