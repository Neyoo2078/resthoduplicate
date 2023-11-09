import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
const ExpartsSlide = ({ items }: any) => {
  const [HoverSlide, setHoverSlide] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div
        onMouseEnter={() => {
          setHoverSlide(true);
        }}
        onMouseLeave={() => {
          setHoverSlide(false);
        }}
        className={` ${
          !HoverSlide && 'exparts-img'
        } lg:w-[415px] lg:h-[900px] w-full   md:h-[351px] flex flex-col items-center relative   `}
      >
        <Image
          src={items.image}
          alt="exparts"
          height={351}
          width={415}
          className="rounded-tr-lg rounded-bl-lg"
        />

        <div className="flex flex-col gap-2 absolute w-[40px]  top-[25px] right-[25px] ">
          <div className="w-[36px] h-[36px] bg-white flex items-center justify-center border-[#bf9444] border-[1px] rounded-full">
            <AiOutlineShareAlt className="text-[#bf9444] w-[20px] h-[20px]" />
          </div>
          {HoverSlide && (
            <motion.div className="flex flex-col gap-2  w-[40px]">
              <div className="w-[36px] h-[36px] bg-white flex items-center justify-center border-[#bf9444] border-[1px] rounded-full">
                <BiLogoFacebook className="text-[rgba(94,94,94,.5)] w-[20px] h-[20px]" />
              </div>
              <div className="w-[36px] h-[36px] bg-white flex items-center justify-center border-[#bf9444] border-[1px] rounded-full">
                <BiLogoTwitter className="text-[rgba(94,94,94,.5)] w-[20px] h-[20px]" />
              </div>
              <div className="w-[36px] h-[36px] bg-white flex items-center justify-center border-[#bf9444] border-[1px] rounded-full">
                <BiLogoInstagram className="text-[rgba(94,94,94,.5)] w-[20px] h-[20px]" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <h1 className="text-black">{items.name}</h1>
    </div>
  );
};

export default ExpartsSlide;
