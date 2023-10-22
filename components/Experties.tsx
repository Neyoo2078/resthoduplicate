'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';
import { exparts } from '@/utils/datas';
import ExpartsSlide from './ExpartsSlide';
import Gallery from './Gallery';

const Experties = () => {
  return (
    <div className="bg-white  flex-col    relative  text-white  items-center justify-center p-[40px] overflow-visible gap-5  flex w-full min-h-[550px]  ">
      <div className="section-title2 w-full mx-auto  mt-[200px] lg:mt-[350px]  flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">experties</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h3 className="text-[#000] text-[2rem] lg:text-[3.75rem] font-semibold">
          Cooking Experties
        </h3>
      </div>
      <div className="flex w-full h-[390px]   gap-2 justify-center items-center">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={30}
          slidesOffsetAfter={0}
          grabCursor={true}
          speed={1500}
          freeMode={true}
          centeredSlides={true}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper3"
        >
          {exparts.map((items, i) => (
            <SwiperSlide key={i}>
              <ExpartsSlide items={items} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Experties;
