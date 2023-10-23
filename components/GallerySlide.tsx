'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GallerySlide = ({ items }: any) => {
  const [HoverSlide, setHoverSlide] = useState(false);
  const [Originn, setOriginn] = useState('right');

  return (
    <div
      onMouseEnter={() => {
        setHoverSlide(true);
      }}
      onMouseLeave={() => {
        setHoverSlide(false);
      }}
      className="lg:w-[247px] lg:h-[231px] w-full h-[180px] overflow-hidden rounded-[10px] relative "
    >
      <Image src={items.image} alt="gallery " fill className="rounded-[10px]" />
      <AnimatePresence>
        {HoverSlide && (
          <motion.div
            initial={{ x: -247, opacity: 0 }}
            animate={{
              x: 0,
              opacity: [0, 0, 0, 1, 1],
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              x: 247,
              transition: {
                duration: 0.5,
              },
            }}
            style={{
              transformOrigin: Originn,
            }}
            className="absolute inset-0 bg-[#00000083] flex flex-col items-center justify-center rounded-[10px] "
          >
            <div className="dot flex justify-center items-center gap-2">
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
              <h1 className="text-[18px]">Gallery</h1>
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
            </div>
            <h3 className="text-[#fff] text-[30px]">Restho’s Gallery</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GallerySlide;
