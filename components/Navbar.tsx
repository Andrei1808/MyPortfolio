"use client";

import React from "react";
import { useScrollPosition } from "@/app/hooks/scrollPosition";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const navbarBackground = (scrollPosition ?? 0) > 0 ? 'bg-slate-900' : 'bg-slate-300/10';

  return (
    <div className={`absolute md:fixed top-0 z-[20] w-full flex items-center gap-5 justify-between md:px-5 lg:px-20 p-3 ${navbarBackground} transition-colors duration-300`}>

      <h1 className="text-white text-[32px] md:text-[45px]">
        Andrei <span className="font-thin">Kaliarovich</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row gap-4 md:gap-5">
        {Socials.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            target="_blank"
          >
            <Image
              className="cursor-pointer w-12 md:w-9 md:h-9"
              src={social.src}
              alt={social.name}
              width={36}
              height={36}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
