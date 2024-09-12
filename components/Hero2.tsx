'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function Hero() {
  return (
    <div>
      <section className="bg-white">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">The best Apple Watch apps</h1>
              <p className="mt-4 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
              <div className="mt-6">
                <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Download from App Store
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }} // Automatically changes slide every 5 seconds
              className="w-full h-full"
            >
              {/* Swiper Slides */}
              <SwiperSlide>
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
