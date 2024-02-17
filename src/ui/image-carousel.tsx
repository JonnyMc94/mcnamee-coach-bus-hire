"use client";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


export default function ImageCarousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="h-70vh sm:h-84vh xl:h-80 2xl:h-[60vh]">
      <Slider {...settings}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image alt="" src="/coach1.png" height={400} width={300}/>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image alt="" src="/coach2.png" height={400} width={300}/>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image alt="" src="/coach3.png" height={400} width={300}/>
      </Slider>
    </div>
  )
}
