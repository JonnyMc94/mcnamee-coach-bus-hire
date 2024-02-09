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
    <div className="bg-lime-400 h-10 xl:h-12 lg:h-11 ">
      <div className="flex justify-center items-end">
        {dataSet.map((data, i) => {
          const Icon = <data.icon />;

          return (
            <div className="pt-4 xl:text-lg lg:text-base md:(text-sm, pt-3) sm:text-xs xsm:text-vsm xxsm:text-vvsm xxxsm:text-vvvsm">
              <span className="inline-block pr-2" key={i}>
                {Icon}
              </span>
              <span className="inline-block pr-6" key={i}>
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
