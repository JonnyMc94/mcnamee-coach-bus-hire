'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink() {

  const links = [
    { name: "Home", href: "/", text: "Navigate through our site from here." },
    { name: "About", href: "/about", text: "Learn about McNamee Coach Hire." },
    { name: "Contact", href: "/contact", text: "Find our contact details here or use our Contact form!" },
    { name: "Gallery", href: "/gallery", text: "See pictures of our current fleet." },
    { name: "Routes", href: "/routes", text: "See information about the current routes we operate." },
  ];

  const pathname = usePathname();

  return (
    <div className="grid text-center bg-inherit lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group rounded-lg border border-transparent px-6 py-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {link.name}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {link.text}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
