'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper core and required modules
import SwiperCore from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';

const popularItem = () => {
  // install Swiper modules
  SwiperCore.use([Pagination]);
  //   // init Swiper:
  //   const swiper = new Swiper('.swiper', {
  //     // configure Swiper to use modules
  //     modules: [Navigation, Pagination, Autoplay],
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     grabCursor: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //       pauseOnMouseEnter: true,
  //     },
  //     slidesPerGroup: 1,
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: 'swiper-button-next',
  //       prevEl: 'swiper-button-prev',
  //     },
  //   });
  var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
  return (
    <div className="popular-bg flex-col  items-start justify-center p-[60px]  gap-11  flex w-full min-h-[500px] text-black ">
      <div className="section-title2 w-full mx-auto flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Our New Item</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          Name
        </div>
        <h2 className="text-white">Restho Popular Item List</h2>
        <div className="flex items-center relative justify-center border-white min-h-[700px] border-[1px] w-full ">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={30}
            centeredSlides={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#d953534d] mx-4">
                {' '}
                slide1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#0000004d] mx-4">
                {' '}
                slide2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#624ee74d] mx-4">
                {' '}
                slide3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#d953534d] mx-4">
                {' '}
                slide1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#0000004d] mx-4">
                {' '}
                slide2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#624ee74d] mx-4">
                {' '}
                slide3
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#0000004d] mx-4">
                {' '}
                slide2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[420px] h-[531px] bg-[#624ee74d] mx-4">
                {' '}
                slide3
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default popularItem;
