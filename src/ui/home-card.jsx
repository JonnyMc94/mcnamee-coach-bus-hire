"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomeCard(props) {
  const { id, title, details, src, key, alt } = props;

  return (
    <div className="block w-[25vh] rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-blue-400">
      <div
        className="lg:h-[25vh] bg-cover bg-center rounded-l rounded-r text-center overflow-hidden"
        style={{ backgroundImage: `url(${src})` }}
        title={alt}
        alt={alt}
      ></div>
      <div className="p-6 m-4 rounded-l rounded-r ">
        <div className="mb-2 text-xl font-medium leading-tight text-slate-800">{title}</div>
        <p className="mb-4 text-base text-slate-800">{details}</p>
        <div className="flex flex-row items-center justify-start mr-2">
          <Link
            className="pl-4 pr-3 pt-2 pb-2 mr-2 bg-blue-700 text-gray-50 font-light rounded-xl text-base flex flex-row items-center"
            href="/contact"
          >
            {" "}
            {title} <FaArrowRight className="text-white ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
