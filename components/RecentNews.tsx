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
import { recentNews } from '@/utils/datas';
import { RxAvatar } from 'react-icons/rx';
import { FaRegCommentDots } from 'react-icons/fa';

const RecentNews = () => {
  return (
    <div className="bg-white  flex-col relative  text-white   items-start justify-start p-[10px]  gap-1  flex w-full h-[800px]  ">
      <div className="section-title2 w-full mx-auto  mt-[20px] lg:mt-[50px]  flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Recent News</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h3 className="text-[#000] text-[2rem] lg:text-[3.75rem] font-semibold">
          Our Recent News
        </h3>
      </div>
      <div className="flex w-full h-[500px]   gap-2 justify-center items-center">
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
          className="mySwiper5"
        >
          {recentNews.map((items, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col  p-[3px] w-full h-[500px] lg:justify-start lg:items-start md:justify-center md:items-center  gap-2">
                <div className="lg:w-[439px] lg:h-[493px] w-[439px] h-[493px] mx-auto">
                  <Image
                    src={items.image}
                    alt="blog"
                    width={439}
                    height={493}
                  />{' '}
                </div>
                <div className="flex items-center justify-center gap-1 text-black">
                  <RxAvatar className="text-[#bf9444] w-[16px] h-[16px]" />{' '}
                  <p className="text-[#5e5e5e] text-[18px]"> By Admin</p>{' '}
                  <FaRegCommentDots className="text-[#bf9444] w-[16px] h-[16px]" />
                  <p className="text-[#5e5e5e] text-[18px]">comment(15)</p>
                </div>
                <div className="w-[70%]">
                  <p className=" list text-[28px] text-black font-[600]">
                    {items.comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentNews;
