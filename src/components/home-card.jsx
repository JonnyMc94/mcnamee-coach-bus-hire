"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomeCard(props) {
  const { id, title, details, src, key, alt, href } = props;

  return (
    <div className="block w-[85%] lg:w-[35vh] m-4 lg:m-10 shadow-2xl rounded-lg md:transition-all md:duration-700 md:hover:scale-110 bg-blue-400">
      <div
        className="lg:h-[25vh] bg-cover bg-center rounded-t lg:rounded-l lg:rounded-r text-center overflow-hidden"
        style={{ backgroundImage: `url(${src})` }}
        title={alt}
        alt={alt}
      ></div>
      <div className="p-6 m-4 rounded-b lg:rounded-l lg:rounded-r">
        <div className="mb-4 text-xl lg:text-lg font-medium leading-tight text-slate-800">
          {title}
        </div>
        <p className="mb-4 h-auto lg:h-[5vh] text-base lg:text-sm text-slate-800">
          {details}
        </p>
        <div className="flex flex-row items-center justify-start mr-2">
          <Link
            className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 text-gray-50 font-light rounded-xl text-base flex flex-row items-center"
            href={href}
          >
            {title} <FaArrowRight className="text-white ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
