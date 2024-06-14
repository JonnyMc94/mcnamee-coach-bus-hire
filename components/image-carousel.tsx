"use client";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import AWS from '../aws-config';

export default function ImageCarousel() {

  const s3 = new AWS.S3();
  const params = {
    Bucket: 'mcnamee-coach-hire-gallery',
    Key: '2coach22_1.png'
  };

  s3.getObject(params, (err, data) => {
    if(err) console.log(err, err.stack, data, params);
    else console.log(data);
  })

  console.log(process.env)

  const src = "/2coach22_1.png";


  const options = { loop: true, playOnInit: true, delay: 7500 };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(options)]);

  const router = useRouter();
  const isContactPage = router.pathname === '/contact';

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        
          <div className="relative flex-shrink-0 h-[89vh] w-full">
            <Image
              alt=""
              fill
              src={src}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="overlay absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center mt-36 text-white">
              <div className="flex flex-row items-center justify-start mb-4">
                <Link
                  className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 md:hidden text-gray-50 font-light rounded-xl text-base flex"
                  href="/contact"
                >
                  Contact Us {isContactPage ? <FaArrowDown className="text-white ml-2 mt-1" /> : <FaArrowRight className="text-white ml-2 mt-1" />}
                </Link>
              </div>
              <h2 className=" block 4sm:text-xl lg:text-6xl md:text-4xl sm:text-4xl xsm:text-2xl xxsm:text-2xl xxxsm:text-xl text-white font-extrabold text-center">
                Get in contact today!
              </h2>
              <h2 className="block 4sm:text-base lg:text-2xl md:text-xl sm:text-base xsm:text-sm xxsm:text-sm xxxsm:text-base text-white font-bold mt-6 text-center">
                Find a bus or coach to suit your needs!
              </h2>
            </div>
          </div>
        
      </div>
    </div>
  );
}

