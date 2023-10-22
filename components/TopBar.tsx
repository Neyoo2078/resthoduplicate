import React from 'react';
import { CiMail } from 'react-icons/ci';
import { MdOutlineLocationOn } from 'react-icons/md';

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r hidden md:flex gap-2   my-0 from-[#1C1F17] via-[#0C0C06] to-black border-b-[1px] border-[hsla(0,0%,100%,.07)] w-full p-3 ">
      <div className="w-[80%]  m-auto flex items-center justify-center md:justify-between">
        <h1 className="text-[#e2d13a] text-[15px]">
          opening hours: <span className="text-white">9.00am to 10.00pm</span>
        </h1>

        <div className="hidden md:flex  gap-2 text-white text-[15px] ">
          <h1 className="flex items-center gap-2 hover:text-[#bf9444]">
            <span>
              <CiMail className="text-[#bf9444] hover:text-[#fff]" />
            </span>
            info@example.com
          </h1>
          <h1 className="flex items-center gap-2 hover:text-[#bf9444]">
            <span>
              <MdOutlineLocationOn className="text-[#bf9444] hover:text-[#fff]" />
            </span>
            Road-01,Block-B, West London City
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
