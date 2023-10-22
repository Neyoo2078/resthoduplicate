'use client';
import React, { useRef, useEffect, useState } from 'react';
import { PopularSwiperArray, SwiperArray } from '@/utils/datas';
import Image from 'next/image';
const ImageSlider = () => {
  const [Array, setArray] = useState(PopularSwiperArray);
  const [swiperArray, setSwiperArray] = useState(PopularSwiperArray);
  let [count, setCount] = useState(0);
  const [currentImage, setcurrentImage] = useState(0);

  console.log({ currentImage });
  const [isOpen, setisOpen] = useState(true);
  const handleNext = () => {
    if (currentImage < PopularSwiperArray.length - 1) {
      setcurrentImage(currentImage + 1);
    }
    if (currentImage === PopularSwiperArray.length - 1) {
      setcurrentImage(0);
    }
  };
  console.log({ count, l: PopularSwiperArray.length });
  console.log(Array);
  const swipArray = [
    [1248, 932, 612, 302, 0],
    [-312, 936, 624, 312, 0],
    [-312, -624, 624, 312, 0],
    [-312, -624, -936, 312, 0],
    [-312, -624, -936, -1248, 0],
  ];

  const changeTranX = () => {
    const UpdatePopularSwiperArray: any = [];

    PopularSwiperArray.forEach((items: any, index) => {
      let c = count;
      let XTrans;
      XTrans = swipArray[items?.pos][count];
      UpdatePopularSwiperArray.push({ ...items, XTrans });
    });
    if (count === PopularSwiperArray.length - 1) {
      setCount(0);
    }
    if (count < PopularSwiperArray.length - 1) {
      setCount(count + 1);
    }
    setArray(UpdatePopularSwiperArray);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      changeTranX();
    }, 3000); // 3-second interval

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [count]); // Empty dependency array to run the effect only once

  return (
    <div className=" main-container  w-full">
      <div className=" ease-out duration-1000 w-[936px] flex relative gap-2  m-auto border-[1px] border-white p-3 overflow-hidden">
        {Array.map((items, i) => (
          <div className=" w-[300px]  h-[300px]      ">
            <div className="sliderr" style={{ width: '300px' }}>
              <Image src={items.image} alt="photo" fill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
