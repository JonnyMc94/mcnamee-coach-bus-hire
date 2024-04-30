"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

export default function NavLink() {
  const links = [
    { name: "Home", href: "/", text: "Navigate through our site from here." },
    { name: "About", href: "/about", text: "Learn about McNamee Coach Hire." },
    {
      name: "Gallery",
      href: "/gallery",
      text: "See pictures of our current fleet.",
    },
    {
      name: "Services",
      href: "/services",
      text: "See information about the current services we operate.",
    },
  ];

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full h-[8vh] 4sm:h-[10vh] bg-blue-400">
      <div className="pl-4 md:pl-[35px] text-center md:text-left">
        <h1 className="block absolute z-10 flex flex-col top-[10px] left-[62px] md:left-14 md:top-9">
          <span className="font-serif font-extrabold text-base md:text-2xl ml-8 md:ml-12">
            McNamee
          </span>
          <span className="font-serif font-extrabold text-base md:text-2xl">
            Coach & Bus Hire
          </span>
        </h1>
      </div>
      <div className="hidden md:flex md:flex-grow md:justify-center md:ml-[10%]">
        <ul className="flex justify-center gap-8 md:gap-[4vw]">
          {links.map((data, id) => {
            return (
              <li key={id}>
                <a className="hover:text-gray-500 text-xl" href={data.href}>
                  {data.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pr-4 hidden md:flex">
        <Link
          className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 text-gray-50 font-light rounded-xl text-base flex flex-row items-center"
          href="/contact"
        >
          Contact Us <FaArrowRight className="text-white ml-2" />
        </Link>
      </div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center mr-10 md:hidden"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
        ></span>
      </button>
      {isOpen && (
        <div className="absolute top-[66px] right-0 bg-blue-400 z-10 p-6 rounded-l">
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {links.map((data, id) => (
              <li key={id}>
                <a className="text-black text-base" href={data.href}>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
