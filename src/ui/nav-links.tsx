"use client";
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
      name: "Contact",
      href: "/contact",
      text: "Find our contact details here or use our Contact form!",
    },
    {
      name: "Gallery",
      href: "/gallery",
      text: "See pictures of our current fleet.",
    },
    {
      name: "Routes",
      href: "/routes",
      text: "See information about the current routes we operate.",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center w-[100%] bg-[#a6c1ee]">
      <div className="pl-10">
        <img
          className="w-16 cursor-pointer "
          src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
          alt="..."
        />
      </div>
      <div className="nav-links duration-500 md:static absolute bg-inherit md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          {links.map((data, id) => {
            return (
              <li key={id}>
                <a className="hover:text-gray-500" href={data.href}>
                  {data.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="inline-flex items-baseline bg-[#a6c1ee] text-black rounded-full pr-10 hover:bg-[#87acec]">
        <span className="pr-2 top-2"> Contact Us</span>
        <span>
          <FaArrowRight className="text-black" />
        </span>
      </div>
    </nav>
  );
}
