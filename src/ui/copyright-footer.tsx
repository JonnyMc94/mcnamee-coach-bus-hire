"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", href: "/"},
    { name: "About", href: "/about"},
    {
      name: "Contact",
      href: "/contact"
    },
    {
      name: "Gallery",
      href: "/gallery",
      text: "See pictures of our current fleet.",
    },
    {
      name: "Services",
      href: "/services"
    },
  ];

  return (
    <footer className="fixed bottom-0 z-20 w-full h-20 p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="http://localhost:3000/" className="hover:underline pr-4">
          McNamee Coach Hire™
        </a>
        All Rights Reserved.
      </span>
      <div className="inline-flex text-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <Link
          className="hover:underline float-left text-4xl pr-4"
          href="https://www.facebook.com/p/McNamee-mini-bus-coach-hire-100063576433712/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </Link>
        <div className="pt-2">
          {links.map((data, id) => {
            return (
              <Link
                className="hover:underline me-4 md:me-6"
                href={data.href}
                key={id}
              >
                {data.name}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
