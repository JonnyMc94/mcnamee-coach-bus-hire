"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Gallery",
      href: "/gallery",
      text: "See pictures of our current fleet.",
    },
    {
      name: "Services",
      href: "/services",
    },
  ];

  return (
    <footer className="w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="md:flex md:items-center">
        <span className="text-sm text-gray-500 block mb-2 md:mb-0 sm:text-center dark:text-gray-400">
          <span>&copy; 2023</span>{" "}
          <a
            href="http://localhost:3000/"
            className="hover:underline mr-2" 
            title="McNamee Coach Hire"
          >
            McNamee Coach Hire™
          </a>
          All Rights Reserved.
        </span>
      </div>
      <div className="flex items-center ml-auto">
        <Link
          className="hover:underline inline-block mb-2 mr-2 md:mb-0 md:me-6 text-gray-500 dark:text-gray-400"
          href="https://www.facebook.com/p/McNamee-mini-bus-coach-hire-100063576433712/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookSquare className="text-3xl md:text-4xl"/>
        </Link>
        {links.map((data, id) => (
          <Link
            className="hover:underline inline-block mb-2 md:mb-0 md:me-6 mr-2 text-gray-500 dark:text-gray-400"
            href={data.href}
            key={id}
            title={data.name}
          >
            {data.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
