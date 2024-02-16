"use client";
import {Carousel} from 'flowbite-react';


export default function ImageCarousel() {

  return (
    <div className="h-70vh sm:h-84vh xl:h-80 2xl:h-[60vh]">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/coach1.png" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/coach2.png" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src="/coach3.png" />
      </Carousel>
    </div>
  )
}
