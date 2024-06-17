"use client";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import {useState, useEffect } from 'react';
import React from "react";
import { ImageData } from '../types/types';

export default function ImageCarousel() {

  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    const fetchImageData = async () => {
      const response = await fetch('https://mcnamee-coach-hire-gallery.s3.ca-central-1.amazonaws.com/2coach22_1.png');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageData({
        url,
        metadata: {
          Metadata: {
            'aria-label': 'Image of two white coaches beside a mountain',
            alt: 'Image of two white coaches beside a mountain',
          },
        },
      });
    };

    fetchImageData();
  }, []);

  const router = useRouter();
  const isContactPage = router.pathname === '/contact';

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <div className="relative flex-shrink-0 h-[89vh] w-full">
          <img
            alt={imageData?.metadata?.Metadata?.alt ?? "Two coaches at nighttime"}
            // aria-label={imageData?.metadata?.Metadata?['aria-label'] ?? "Two coaches."}
            src={imageData?.url ?? ""}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="overlay absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center mt-36 text-white">
            <div className="flex flex-row items-center justify-start mb-4">
              <Link passHref href="/contact">
                <a className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 md:hidden text-gray-50 font-light rounded-xl text-base flex">
                  Contact Us {isContactPage ? <FaArrowDown className="text-white ml-2 mt-1" /> : <FaArrowRight className="text-white ml-2 mt-1" />}
                </a>
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