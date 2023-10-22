'use client';
import React from 'react';
import { ImagesArray } from '@/utils/datas';
import HeroText from './HeroText';
import { GrNext, GrPrevious, GrFormPrevious } from 'react-icons/gr';
import { FcPrevious } from 'react-icons/fc';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';

const Hero = () => {
  const [hover, sethover] = useState(false);
  const [currentImage, setcurrentImage] = useState(0);

  console.log({ currentImage });
  const [isOpen, setisOpen] = useState(true);
  const handleNext = () => {
    if (currentImage < ImagesArray.length - 1) {
      setcurrentImage(currentImage + 1);
    }
    if (currentImage === ImagesArray.length - 1) {
      setcurrentImage(0);
    }
  };

  const handleprevious = () => {
    if (currentImage <= ImagesArray.length - 1) {
      setcurrentImage(currentImage - 1);
    }
    if (currentImage === 0) {
      setcurrentImage(ImagesArray.length - 1);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <motion.div className="w-full relative flex   items-start md:items-center justify-center h-[490px] md:min-h-[650px]  bg-transparent ">
      {currentImage === 0 && <HeroText />}
      {currentImage === 1 && <HeroText />}
      {currentImage === 2 && <HeroText />}
      <div className="hidden dot-link md:flex gap-2 absolute bottom-0  right-8">
        <h1> Facebook</h1>
        <h1 className="flex gap-2 items-center">
          <span>
            <BsDot />
          </span>
          Twitter
        </h1>
        <h1 className="flex gap-2 items-center">
          <span>
            <BsDot />
          </span>
          Instagram{' '}
        </h1>
        <h1 className="flex gap-2 items-center">
          <span>
            <BsDot />
          </span>{' '}
          Skype
        </h1>
      </div>
      <div
        onClick={handleprevious}
        className="rounded-full w-[25px] h-[25px] md:w-[40px] md:h-[40px] cursor-pointer flex items-center justify-center absolute top-[400px] left-[10px] md:top-[340px]  z-40 md:left-[30px] text-white bg-[#bf9444] p-2"
      >
        <ArrowBackIosIcon className="m-auto w-[12px] h-[12px] md:w-[24px] md:h-[24px]" />
      </div>
      <div
        onClick={handleNext}
        className="rounded-full cursor-pointer flex items-center top-[400px] right-[10px] justify-center absolute md:top-[340px]  z-40 md:right-[30px] text-white bg-[#bf9444] p-2"
      >
        <ArrowForwardIosIcon className="m-auto w-[12px] h-[12px] md:w-[24px] md:h-[24px]" />
      </div>
      <svg
        className="absolute md:w-[284px] w-[284px] h-[124px] -left-[65px] top-[358px]  md:h-[224px] md:left-0 md:top-[255px]  "
        viewBox="0 0 142 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 98.897C0.58295 98.4073 1.15573 97.906 1.71801 97.3933C4.4604 94.893 6.12631 91.4955 7.93751 88.2564C11.7493 81.4396 17.9714 77 25 77C31.2048 77 36.7812 80.46 40.6256 85.961C43.7749 90.4675 46.091 95.6652 50.3272 99.1697C60.0147 107.184 72.4448 112 86 112C116.928 112 142 86.9277 142 56C142 25.0723 116.928 0 86 0C66.5361 0 49.3916 9.92969 39.356 25H39.1079C35.3799 29.3496 30.4307 32 25 32C19.5693 32 14.6201 29.3496 10.8921 25H10.644C7.67627 20.5435 4.08691 16.5366 0 13.103V98.897Z"
          fill="white"
        />
      </svg>
      <svg
        className="absolute -right-[65px] z-10 md:right-0 top-[358px] md:top-[255px] md:w-[284px]  md:h-[224px] w-[284px] h-[124px] transform scale-x-[-1]  "
        viewBox="0 0 142 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 98.897C0.58295 98.4073 1.15573 97.906 1.71801 97.3933C4.4604 94.893 6.12631 91.4955 7.93751 88.2564C11.7493 81.4396 17.9714 77 25 77C31.2048 77 36.7812 80.46 40.6256 85.961C43.7749 90.4675 46.091 95.6652 50.3272 99.1697C60.0147 107.184 72.4448 112 86 112C116.928 112 142 86.9277 142 56C142 25.0723 116.928 0 86 0C66.5361 0 49.3916 9.92969 39.356 25H39.1079C35.3799 29.3496 30.4307 32 25 32C19.5693 32 14.6201 29.3496 10.8921 25H10.644C7.67627 20.5435 4.08691 16.5366 0 13.103V98.897Z"
          fill="white"
        />
      </svg>
      <div
        onClick={() => {
          setisOpen(!isOpen);
        }}
        className="rotating-div z-40 absolute top-[370px] left-[45px] w-[100px] h-[100px] md:top-[270px] md:scale-100 rounded-full md:w-[195px] md:h-[195px] md:left-[75px] "
      >
        <Image fill src={`${ImagesArray[currentImage].image1}`} alt="pics" />
      </div>
      <div className="md:bg-black rotating-div  z-40  bg-[#d03131] absolute top-[370px] right-[45px] w-[100px] h-[100px] md:top-[270px] md:scale-100 rounded-full md:w-[195px] md:h-[195px] md:right-[75px] ">
        <Image fill src={`${ImagesArray[currentImage].image2}`} alt="pics" />
      </div>
      <Image
        className="absolute  z-10 opacity-10 left-[27%] top-[20%]"
        width={200}
        height={200}
        src="/assets/shape2.svg"
        alt="pics"
      />

      <Image
        className="absolute  z-10 opacity-10 right-[27%] bottom-[0%]"
        width={200}
        height={200}
        src="/assets/shape1.svg"
        alt="pics"
      />
    </motion.div>
  );
};

export default Hero;
