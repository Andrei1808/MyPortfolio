"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import { link } from "fs";
import Link from "next/link";
import Transition from "./Transition";
import { useWindowWidth } from "@/app/hooks/windowWidth";

const Sidebar = () => {

  const path = usePathname();
  const scrWidth = useWindowWidth()

  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if ((prevPath !== path) && ((scrWidth) && scrWidth >= 768)) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div className="fixed bottom-3 right-[50%] md:right-8 translate-x-[50%] md:transform-none md:top-[40%] z-[20] h-[50px] md:h-[200px] w-[300px] md:w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      {isRouting && <Transition/>}
      <AnimatePresence mode="wait">
        <div className="flex md:flex-col gap-20 md:gap-5 md:pb-3 justify-center items-center w-full h-full">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setIsActive(link.link)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${isActive === link.link ? "text-orange-500" : "text-white"
                  }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
