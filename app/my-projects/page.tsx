import ProjectSlider from "@/components/ProjectSlider";
import Link from "next/link";
import React from "react";

import { ProImages } from "@/constants";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center  md:flex-row min-h-screen min-w-screen bg-[#0C011A] pt-[150px] pb-[80px]">
      <div className="flex flex-col items-start justify-around gap w-[100%] md:w-[90%]  gap-10" >
        <div className="flex flex-col  items-center lg:items-start  text-left gap-3 mx-2 mb-10">
          <h1 className="text-[50px] text-white font-semibold text-center">
            My Projects<span className="text-red-500">.</span>
          </h1>
          <p className="max-w-[400px] mb-4 text-gray-200 text-[18px] font-semibold text-center lg:text-left md:text-gray-400">
            Here are some of my projects and links to their code.
          </p>
          <ul className="">
            {ProImages.map((image) => (
              <>
                <li className="mb-5"><span className="text-red-500 font-semibold">{image.name}:</span> <Link
                  href={image.link}
                  target="_blank"
                  className="md:text-gray-400 text-gray-200">{image.link}</Link></li>
              </>
            ))}
          </ul>
        </div>
        <div className="flex justify-end w-full">
          <ProjectSlider />
        </div>


      </div>
    </div>
  );
};

export default Page;
