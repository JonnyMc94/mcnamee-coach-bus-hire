"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function ImageCarousel() {
  const paths = [
    { src: "/coach1.png" },
    { src: "/coach2.png" },
    { src: "/coach3.png" },
  ];

  const options = { loop: true, playOnInit: true, delay: 7500 };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(options)]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {" "}
        {paths.map((data, indx) => {
          return (
            <div className="relative h-[50vh] flex-[0_0_100%]" key={indx}>
              <div className="absolute z-10 ml-auto mr-auto lg:w-[50vh] md:w-[40vh] sm:w-[35vh] xsm:w-[28vh] xxsm:w-[26vh] xxxsm:w-[22vh] h-[34vh] lg:h-[28vh] md:h-[24vh] sm:h-[22vh] xsm:h-[16vh] xxsm:h-[16vh] left-0 right-0 top-32 bg-inherit">
                <div className="flex flex-row items-center justify-start">
                  <Link
                    className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-[#130F49] text-gray-50 font-light rounded-xl lg:text-2xl md:text-xl sm:text-xl xsm:text-xl flex"
                    href="/contact"
                  >
                    {" "}
                    Contact Us
                    <FaArrowRight className="text-black ml-2 m-1 lg:text-2xl md:text-xl " />
                  </Link>
                </div>
                <h2 className="lg:text-6xl md:text-4xl sm:text-4xl xsm:text-2xl xxsm:text-2xl xxxsm:text-base text-white font-extrabold mt-8 justify-center">
                  Get in contact today!
                </h2>
                <h2 className="text-2xl md:text-xl sm:text-base xsm:text-sm xxsm:text-sm xxxsm:text-sm text-white font-bold mt-6 justify-center">
                  Find a bus or coach to suit your needs!
                </h2>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <Image alt="" fill src={data.src} className="object-fill z-0" /> */}
              <div
                className="h-[50vh] lg:w-full flex-none bg-cover rounded-l text-center overflow-hidden bg-[url('/coach1.png')]"
                style={{ backgroundImage: `url(${data.src})` }}
                title="Woman holding a mug"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
