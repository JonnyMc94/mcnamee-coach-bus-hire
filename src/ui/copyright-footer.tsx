"use client";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-20 w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="http://localhost:3000/" className="hover:underline pr-4">
          McNamee Coach Hire™
        </a>
        All Rights Reserved.
      </span>
      <div className="grid-rows-5 text-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <div className="top-10">
        <Link className="hover:underline float-left text-4xl pr-4" href="#">
          <FaFacebookSquare />
        </Link>
          <Link className="hover:underline me-4 md:me-6" href="#">
            Home
          </Link>
          <Link className="hover:underline me-4 md:me-6" href="#">
            About
          </Link>
          <Link className="hover:underline me-4 md:me-6" href="#">
            Gallery
          </Link>
          <Link className="hover:underline" href="#">
            Routes
          </Link>
        </div>
 
      </div>
    </footer>
  );
}
