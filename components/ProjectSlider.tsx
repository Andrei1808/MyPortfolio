"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ProjectSlider = () => {
  return (
    <div className="w-[100%] lg:w-[50%]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="">
          <div className="grid grid-cols-2 gap-4 md:pr-12 md:w-[100%]">
            {ProImages.map((image) => (
              <div className="relative group w-[100%]  h-[175px] md:h-[250px]" key={image.img}>
                <Link
                  href={image.link}
                  target="_blank" >
                  <Image
                    src={image.img}
                    alt="project image"
                    width={280}
                    height={280}
                    className="rounded-md h-full w-full object-cover"
                  />

                  <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                  <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
                    {image.name}
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
