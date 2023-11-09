'use client';
import Image from 'next/image';
import React from 'react';
import { SwiperArray } from '@/utils/datas';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';

const OurNewItem = () => {
  const swiperRef: any = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(0);
  const [currentImage, setcurrentImage] = useState(0);
  const [imageArray, setimageArray] = useState(SwiperArray);
  useEffect(() => {
    let interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleNext = () => {
    if (currentImage < SwiperArray.length - 1) {
      setcurrentImage(currentImage + 1);
    }
    if (currentImage === SwiperArray.length - 1) {
      setcurrentImage(0);
    }
  };

  const handleprevious = () => {
    if (currentImage <= SwiperArray.length - 1) {
      setcurrentImage(currentImage - 1);
    }
    if (currentImage === 0) {
      setcurrentImage(SwiperArray.length - 1);
    }
  };
  return (
    <div className="bg-white    flex-col  justify-start  md:justify-center   gap-11  flex w-full min-h-[500px] text-black ">
      <div className="section-title p-[20px] md:p-[88px] md:items-center justify-start  items-start w-full  md:w-[80%] mx-auto flex flex-col md:justify-center ">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Our New Item</h1>

          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h3 className="text-[2rem] lg:text-[3.75rem] font-semibold">
          Restho New Item List
        </h3>
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="lg:w-[33.3%] md:w-full w-full bg-[#fafafa] flex  flex-col  items-center justify-center  rounded-[10px] border-[1px] py-[75px] px-[40px]   border-[#eee]">
            <div className="primary-btn   rounded-full py-[4px] px-[14px] gap-2 items-center">
              <button>Special Offer</button>
            </div>
            <h3 className="text-[28px] mb-[25px]">Our New Item Has Offer</h3>
            <div className="border-[#bf9444] border-[1px] py-[17px] flex flex-col items-center rounded-[10px] px-[25px] max-w-[225px]">
              <h3 className="text-[29px]">After Discount</h3>
              <span>
                <h3 className="text-[49px] text-[#bf9444]">20%</h3>
              </span>
            </div>
          </div>
          <div className="reserve h-[459px] lg:hidden w-full lg:w-[33.3%] relative rounded-[10px] border-[1px] border-[#e83939]  ">
            <div className="absolute flex flex-col gap-3 items-center justify-center inset-0 bg-[rgba(9,22,29,.75)]">
              <div className="dot2 flex justify-center items-center gap-2">
                <Image
                  src="/assets/sub.svg"
                  alt="photo"
                  width={20}
                  height={20}
                />
                <h1 className=" text-[18px]">Our New Item</h1>

                <Image
                  src="/assets/sub.svg"
                  alt="photo"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-white text-[28px] text-jost">
                For Your Private Events
              </h3>
              <div className="primary-btn    rounded-full py-[4px] px-[14px] gap-2 items-center">
                <button>Book Table</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[33.3%] w-full   border-[1px]  border-[#eee]  flex  flex-col  items-center justify-center  rounded-[10px]  py-[75px] px-[40px]  ">
            <div className="  w-[300px] h-[300px] flex justify-center items-center rounded-full  relative bg-[#8d2e2e]">
              <Image
                src={imageArray[currentImage].image}
                alt="photo"
                fill
                className="rotating-div"
              />
              <button className="text-[#bf9444] absolute -bottom-1 text-[18px] bg-white border-[1px] border-[#eee] py-[5px] px-[25px] rounded-tl-lg rounded-br-lg text-jost">
                Price-$8
              </button>
            </div>
          </div>
          <div className="reserve h-[459px] hidden lg:flex  w-full md:w-[33.3%] relative rounded-[10px] border-[1px] border-[#e83939]  ">
            <div className="absolute flex flex-col gap-3 items-center justify-center inset-0 bg-[rgba(9,22,29,.75)]">
              <div className="dot2 flex justify-center items-center gap-2">
                <Image
                  src="/assets/sub.svg"
                  alt="photo"
                  width={20}
                  height={20}
                />
                <h1 className=" text-[18px]">Our New Item</h1>

                <Image
                  src="/assets/sub.svg"
                  alt="photo"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-white text-[28px] text-jost">
                For Your Private Events
              </h3>
              <div className="primary-btn    rounded-full py-[4px] px-[14px] gap-2 items-center">
                <button>Book Table</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full -mt-[60px] pb-9 ">
        <div className=" w-full lg:w-[80%]  p-[4px]  m-auto flex justify-center items-center">
          <div
            onClick={handleprevious}
            className="w-[42px] hidden  h-[42px] rounded-full md:flex items-center cursor-pointer justify-center bg-white hover:bg-[#bf9444] border-[1px] border-[#bf9444]"
          >
            {
              <BsArrowLeft className="text-[#bf9444] w-[20px] hover:text-[#fff] h-[20px] justify-center" />
            }
          </div>
          <div className="flex items-center justify-center  gap-2  w-full  lg:w-[80%]">
            {imageArray.map((items, i) => (
              <div
                key={i}
                className="md:w-[100px] w-[56px] h-[56px] relative md:h-[100px] rounded-full"
              >
                <Image src={items.image} alt="photo" fill />
                {currentImage === i && (
                  <div className="absolute md:w-[100px] md:h-[100px] inset-0  rounded-full  bg-[rgba(9,22,29,.65)]  "></div>
                )}
              </div>
            ))}
          </div>
          <div
            onClick={handleNext}
            className="w-[42px] hidden  h-[42px] rounded-full md:flex cursor-pointer items-center justify-center bg-white border-[1px] hover:bg-[#bf9444]  border-[#bf9444]"
          >
            {
              <BsArrowRight className="text-[#bf9444] w-[20px] hover:text-[#fff] h-[20px] " />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNewItem;
