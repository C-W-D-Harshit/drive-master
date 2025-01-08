import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-72 border-r ">
      <div className="h-20 w-full flex items-center gap-3 border-b px-8">
        <Image
          src="/logo.svg"
          alt="Drive Master"
          width={32}
          height={32}
          quality={100}
        />
        <span className="text-xl font-semibold">Drive Master</span>
      </div>
    </div>
  );
}
