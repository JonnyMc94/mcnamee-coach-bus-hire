"use client";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiMapPinFill } from "react-icons/pi";

export default function SmallContactBar() {
  const dataSet = [
    { id: 1, info: "+353 (85) 124 4312", icon: BsTelephone },
    { id: 2, info: "danielmcnamee@gmail.com", icon: MdMarkEmailUnread },
    { id: 3, info: "Stoney Road, Oldcastle, Co Meath", icon: PiMapPinFill },
  ];

  return (
    <div className="bg-lime-400 h-4 xl:h-8 lg:h-6 ">
      <div className="flex justify-center items-end">
        {dataSet.map((data, idx) => {
          const Icon = <data.icon />;

          return (
            <div className="inline-flex xl:text-lg lg:text-base md:(text-sm, pt-3) sm:text-xs xsm:text-vsm xxsm:text-vvsm xxxsm:text-vvvsm" key={data.id}>
              <span className="pr-2 pt-1">
                {Icon}
              </span>
              <span className="pr-6">
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
