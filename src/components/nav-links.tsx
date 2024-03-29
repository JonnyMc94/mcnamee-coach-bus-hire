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
    <nav className="flex justify-between items-center w-[100%] h-[8vh] bg-blue-400">
      <div className="pl-[35px]">
        <h1 className="absolute z-10 flex flex-col top-[10px] left-[62px] md:left-14 md:top-9">
          {" "}
          <span className="font-serif font-extrabold text-base md:text-2xl ml-8 md:ml-12">
            McNamee{" "}
          </span>
          <span className="font-serif font-extrabold text-base md:text-2xl">
            Coach & Bus Hire
          </span>
        </h1>
        <div className="h-[50%] mx-auto my-auto bg-blue-400">
          <div className="h-[55px] w-[200px] md:h-[76px] md:w-[260px] bg-white rounded-[50%]"></div>
        </div>
      </div>
      <div className="nav-links duration-500 md:static absolute bg-inherit md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
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
      <div className="md:flex md:flex-row md:items-center md:justify-start md:mr-2 md:text-black hidden">
        <Link
          className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 text-gray-50 font-light rounded-xl text-base flex flex-row items-center"
          href="/contact"
        >
          {" "}
          Contact Us <FaArrowRight className="text-white ml-2" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
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
      </div>
    </nav>
  );
}
