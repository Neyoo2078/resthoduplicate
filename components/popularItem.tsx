'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';
import { useCallback } from 'react';
import { PopularSwiperArray } from '@/utils/datas';
import Rating from '@mui/material/Rating';

const popularItem = () => {
  const swiperRef: any = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(0);

  const updateIndex = useCallback(
    () => setCurrentSlide(swiperRef.current.swiper.realIndex),
    []
  );

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);
  const bullets = ['bullet1', 'bullet2', 'bullets3'];

  // on click
  const handleOnSetSwiper = (i: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(i);
    }
  };

  return (
    <div className="popular-bg flex-col  items-start justify-center p-[60px]  gap-11  flex w-full min-h-[500px] text-black ">
      <div className="section-title2 w-full mx-auto flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Our New Item</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h3 className="text-white text-[2rem] lg:text-[3.75rem] font-semibold">
          Restho Popular Item List
        </h3>
        <div className="flex items-center relative flex-col justify-center min-h-[700px]  w-full ">
          <Swiper
            initialSlide={clickedIndex}
            ref={swiperRef}
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {PopularSwiperArray.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="  w-auto lg:w-[440px]  h-[531px] p-2  gap-2 flex flex-col items-center  justify-end   relative">
                  <div className="w-[340px] flex bg-[#bf9444] justify-center rounded-[20px] items-center h-[316px]  absolute  top-2 ">
                    <div className="w-full   h-[316px] rounded-xl m-auto">
                      <Image src={slide.image} alt="photo" fill />
                    </div>
                  </div>
                  <div className="w-full h-[316px] flex items-center  flex-col gap-2 rounded-tl-[30px] rounded-br-[30px] bg-black border-[1px]  border-[#fff]  justify-center  ">
                    <div className="w-[70%] mt-[65px] gap-2 flex flex-col items-center">
                      <div className="flex gap-2 items-center">
                        <Rating name="read-only" value={5} readOnly />
                        <h1 className="text-[#fff] text-[18px]">{`Review (${slide.review})`}</h1>
                      </div>
                      <h3 className="pname text-[#fff] text-[30px] font-semibold">
                        {slide.name}
                      </h3>
                      <p className="text-[#fff] text-[15px] text-center">
                        {slide.text}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-2 w-[20%] justify-center  ">
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-[1px] border-[#bf9444] border-dashed">
              <div
                onClick={() => {
                  handleOnSetSwiper(0);
                  // setclickedIndex(0);
                }}
                className={`w-[13px] h-[13px] ${
                  currentSlide === 0 || currentSlide === 3
                    ? 'bg-[#bf9444]'
                    : 'bg-[#605136]'
                }   rounded-full`}
              ></div>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-[1px] border-[#bf9444] border-dashed">
              <div
                onClick={() => {
                  handleOnSetSwiper(1);
                  // setclickedIndex(0);
                }}
                className={`w-[13px] h-[13px] ${
                  currentSlide === 1 || currentSlide === 4
                    ? 'bg-[#bf9444]'
                    : 'bg-[#605136]'
                }  rounded-full`}
              ></div>
            </div>
            <div className="w-[18px] h-[18px] flex items-center justify-center rounded-full border-[1px] border-[#bf9444] border-dashed">
              <div
                onClick={() => {
                  handleOnSetSwiper(2);
                  // setclickedIndex(0);
                }}
                className={`w-[13px] h-[13px] ${
                  currentSlide === 2 || currentSlide === 5
                    ? 'bg-[#bf9444]'
                    : 'bg-[#605136]'
                }  rounded-full`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popularItem;
