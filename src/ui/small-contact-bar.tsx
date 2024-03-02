"use client";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

export default function SmallContactBar() {
  const dataSet = [
    { info: "+353 (85) 124 4312", icon: BsTelephone },
    { info: "danielmcnamee@gmail.com", icon: MdMarkEmailUnread },
    { info: "Stoney Road, Oldcastle, Co Meath", icon: PiMapPinFill },
  ];

  return (
    <div className="bg-blue-700 h-0 sm:h-4 md:h-5 xl:h-8 lg:h-6 ">
      <div className="flex justify-center items-end">
        {dataSet.map((data, i, key) => {
          const Icon = <data.icon />;

          return (
            <div className="sm:visible sm:inline-flex hidden xl:text-lg lg:text-base md:text-sm sm:text-vsm  text-white">
              <span className="pr-2 pt-1" key={i}>
                {Icon}
              </span>
              <span className="pr-6 mt-1 sm:mt-0.5" key={i}>
                {" "}
                {data.info}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
