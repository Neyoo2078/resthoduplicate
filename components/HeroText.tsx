'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRightCircle, BsArrowRightCircle } from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react';
const HeroText = () => {
  const [hover, sethover] = useState(false);

  console.log({ hover });
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        ease: 'linear',
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="banner-content mt-6 z-40 w-full md:w-[50%] flex flex-col justify-center p-[5px] md:p-0 items-center  md:gap-6"
    >
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="flex justify-between items-center w-[200px]"
      >
        <span>
          {' '}
          <Image src="/assets/sub.svg" alt="sub" width={20} height={20} />
        </span>
        <h1>welcome to resto</h1>
        <span>
          {' '}
          <Image src="/assets/sub.svg" alt="sub" width={20} height={20} />
        </span>
      </motion.div>
      <motion.h3
        initial="hidden"
        variants={item}
        animate="show"
        className="font-[700]  text-[2.125rem] md:text-[5rem] text-center"
      >
        Find Your Best Healthy & Tasty Food
      </motion.h3>
      <motion.p
        initial="hidden"
        variants={item}
        animate="show"
        className="text-[15.84px] text-center"
      >
        it is long establish that a reader will be distracted by the readable
        content of a page
      </motion.p>
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            damping: 30,
            bounce: 0.25,
          },
        }}
        initial={{ y: 30, opacity: 0 }}
        onMouseEnter={() => {
          sethover(true);
        }}
        onMouseLeave={() => {
          sethover(false);
        }}
        className="discover-btn flex  w-[176px] h-[58px] md:w-[193px] md:h-[58px] text-[15px] p-2 gap-1 items-center rounded-full"
      >
        {hover ? <BsArrowRightCircle /> : <BsArrowUpRightCircle />}
        <button className=" text-[1rem] md:text-[1.25rem] w-full ">
          Discover More
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
