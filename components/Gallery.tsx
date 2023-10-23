'use client';
import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';
import { gallerySlide } from '@/utils/datas';
import GallerySlide from './GallerySlide';

const Gallery = () => {
  return (
    <div className="bg-white flex-col  pt-[100px] relative  text-white  items-center justify-center p-[40px] overflow-visible gap-5  flex w-full min-h-[300px]  ">
      <div className="section-title2 w-full mx-auto  flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Gallery</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h2 className="text-[#000] text-[30px]">Restho’s Gallery</h2>
        <div className="flex w-full  h-[300px]  gap-2 justify-center items-center">
          <Swiper
            slidesPerView={5}
            slidesPerGroup={1}
            spaceBetween={30}
            slidesOffsetAfter={0}
            grabCursor={true}
            speed={1500}
            freeMode={true}
            centeredSlides={true}
            loop
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="mySwiper4"
          >
            {gallerySlide.map((items, i) => (
              <SwiperSlide key={i}>
                <GallerySlide items={items} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
