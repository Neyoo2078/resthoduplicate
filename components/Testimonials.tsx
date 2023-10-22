'use client';
import React from 'react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { AiOutlinePlayCircle, AiOutlineClose } from 'react-icons/ai';
// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';
import { useCallback } from 'react';
import { Slide } from '@mui/material';
import { TestimonialsArray } from '@/utils/datas';
import Rating from '@mui/material/Rating';
import { motion, AnimatePresence } from 'framer-motion';

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(0);
  const [video, setvideo] = useState(false);

  const swiperRef: any = useRef(null);
  console.log({ index: currentSlide });
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
  const testriTest = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: 'tween', duration: 2 } },
    exit: { opacity: 0, transition: { type: 'tween', duration: 2, delay: 2 } },
  };

  return (
    <div className="bg-[linear-gradient(98.3deg,rgba(111,73,2,.2) .45%,transparent 162.03%),linear-gradient(269.66deg,#000203 .28%,#09161d 99.7%)] flex-col p-[5px] relative  text-white  items-center justify-start  py-[100px] px-[40px] overflow-visible gap-5  flex w-full min-h-[700px]  ">
      <div className="section-title2 gap-5 w-full mx-auto lg:flex-row flex-col flex justify-center items-center">
        <div className="lg:w-[40%] w-full flex lg:hidden  section-title2  mx-auto  flex-col justify-center items-center">
          <div className="dot flex justify-center items-center gap-2">
            <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
            <h1 className=" text-[18px]">Testimonials</h1>
            <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          </div>
          <h3 className="text-[#ff] text-[2rem] lg:text-[3.75rem] font-semibold">
            {' '}
            Customer Feedback
          </h3>
          <p className="text-center">
            It is a long established fact that a reader will be
            distracted.Various versions have evolved over.
          </p>
        </div>
        <div className="lg:w-[60%] lg:h-[336px] w-full lg:flex-row flex-col flex gap-2 items-center justify-start">
          <div className="lg:w-[94px]  h-[94px] w-full lg:h-[290px] flex items-center p-1">
            <Swiper
              initialSlide={clickedIndex}
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={10}
              slidesPerGroup={1}
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
              direction="vertical"
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                0: {
                  direction: 'horizontal',
                },
                480: {
                  direction: 'horizontal',
                },
                768: {
                  direction: 'horizontal',
                },
                1024: {
                  direction: 'horizontal',
                },
                1280: {
                  direction: 'vertical',
                },
              }}
              className="mySwiper2   "
            >
              {TestimonialsArray.map((items, i) => (
                <SwiperSlide key={i}>
                  <div className="relative justify-center rounded-full flex items-center w-[86px] h-[86px] ">
                    <Image
                      src={items.image}
                      alt="testi"
                      width={72}
                      height={72}
                      className="content rounded-full  "
                    />
                    {i + 1 === currentSlide && (
                      <div className=" rotating-border absolute top-0   w-[86px] h-[86px] border-[#fff] border-[2px] p-1 border-dashed rounded-full"></div>
                    )}
                    {i === 5 && currentSlide === 0 && (
                      <div className=" rotating-border absolute top-0   w-[86px] h-[86px] border-[#fff] border-[2px] p-1 border-dashed rounded-full"></div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:w-[676px] w-full flex flex-col gap-2 relative lg:h-[335px] border-[1px] border-[#eee] py-[50px] px-[35px] rounded-[10px] ">
            <AnimatePresence>
              {(currentSlide === 0 || currentSlide === 3) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 1 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  className="w-full h-full flex flex-col gap-2  "
                >
                  <div className="w-full flex justify-between">
                    <div>
                      <h3 className="text-[24px] font-[700]">
                        {TestimonialsArray[0].name}
                      </h3>
                      <p className="flex jost gap-3 text-[18px]  font-[400] items-center">
                        Guest <span className="w-[65px] h-[1px] bg-[#bf9444]" />
                      </p>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                  <div>
                    <p className="jost text-[24px] font-[300] leading-[36px]">
                      {TestimonialsArray[0].text}
                    </p>
                  </div>
                </motion.div>
              )}

              {(currentSlide === 1 || currentSlide === 4) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 1 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  className="w-full h-full flex flex-col gap-2  "
                >
                  <div className="w-full flex justify-between">
                    <div>
                      <h3 className="text-[24px] font-[700]">
                        {TestimonialsArray[1].name}
                      </h3>
                      <p className="flex jost gap-3 text-[18px]  font-[400] items-center">
                        Guest <span className="w-[65px] h-[1px] bg-[#bf9444]" />
                      </p>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                  <div>
                    <p className="jost text-[24px] font-[300] leading-[36px]">
                      {TestimonialsArray[1].text}
                    </p>
                  </div>
                </motion.div>
              )}

              {(currentSlide === 2 || currentSlide === 5) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1, duration: 1 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 1 } }}
                  className="w-full h-full flex flex-col gap-2  "
                >
                  <div className="w-full flex justify-between">
                    <div>
                      <h3 className="text-[24px] font-[700]">
                        {TestimonialsArray[2].name}
                      </h3>
                      <p className="flex jost gap-3 text-[18px]  font-[400] items-center">
                        Guest <span className="w-[65px] h-[1px] bg-[#bf9444]" />
                      </p>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                  <div>
                    <p className="jost text-[24px] font-[300] leading-[36px]">
                      {TestimonialsArray[2].text}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="w-[70px] absolute bottom-[25px] flex items-center justify-center  -right-[35px] h-[70px] rounded-full bg-[#050504] border-[1px] border-[hsla(0,0%,93%,.25)] ">
              <Image
                src="/assets/quate-icon.svg"
                alt="quate-icon"
                width={38}
                height={26}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full hidden lg:flex  section-title2  mx-auto  flex-col justify-start items-start">
          <div className="dot flex justify-center items-center gap-2">
            <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
            <h1 className=" text-[18px]">Testimonials</h1>
            <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          </div>
          <h2 className="text-[#fff] text-[30px]"> Customer Feedback</h2>
          <p>
            It is a long established fact that a reader will be
            distracted.Various versions have evolved over.
          </p>
        </div>
      </div>
      <div className="lg:w-[1296px] lg:h-[563px] h-[280px]  w-full  flex items-center justify-center -bottom-[230px] absolute lg:-bottom-[330px] z-40 bg-video-bg ">
        <AiOutlinePlayCircle
          onClick={() => {
            setvideo(true);
          }}
          className="w-[80px] h-[80px] text-white hover:text-[#bf9444] cursor-pointer"
        />
      </div>
      {video && (
        <div className="bg-[rgba(0,0,0,0.42)] fixed inset-0 flex justify-center items-center  z-50">
          <div className="w-[846px] h-[476px] flex gap-1">
            <iframe
              width="708"
              height="408"
              src="https://www.youtube.com/embed/L61p2uyiMSo?si=CzhMaQm5BMXlXSqC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <AiOutlineClose
              onClick={() => {
                setvideo(false);
              }}
              className="text-white w-[35px] h-[35px] cursor-pointer"
              title="close"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
