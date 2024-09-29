"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";

const ServiceSlider = () => {
  return (
    <div className=" md:right-20 md:bottom-40 w-[65%] lg:w-[75%] xl:w-[65%]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,

        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="rounded-md cursor-pointer left-[50%] md:left-0 translate-x-[-50%] md:transform-none flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounde-xl px-4 py-3 md:py-8 w-[100%] md:w-[100%] h-[400px] ">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
              <div className="relative h-full w-full flex flex-col gap-3">
                <item.icon className="text-blue-600  group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="text-[14px]">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
