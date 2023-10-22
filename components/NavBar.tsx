'use client';
import React from 'react';
import BasicMenu from './Menu';
import { NavLinks } from '@/utils/datas';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { BsList } from 'react-icons/bs';
import SideBar from './SideBar';
import CustomMenu from './CustomMenu';
const NavBar = () => {
  const [headerShadow, setHeaderShadow] = useState<any>(false);
  const [scrollHieght, setscrollHieght] = useState(false);

  const [openNav, setopenNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = Math.floor(window.scrollY);

      // Define the scroll threshold where the navigation bar becomes sticky
      const scrollThreshold = 120;

      // Check if the scroll position is above the threshold

      if (scrollY > scrollThreshold && !scrollHieght) {
        setscrollHieght(true);
      } else if (scrollY <= scrollThreshold && scrollHieght) {
        setscrollHieght(false);
      }
    }

    // Add a scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollHieght]);

  const slideSlider = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        onClick={() => {
          setopenNav(true);
        }}
        className=" sm:hidden flex w-full justify-between p-5"
      >
        <Image src="/assets/logo2.svg" alt="logo" width={120} height={27} />
        <BsList className="text-white w-[25px] h-[25px]" />
      </div>
      <SideBar setopenNav={setopenNav} openNav={openNav} />
      {!scrollHieght ? (
        <div className="sm:flex m-auto justify-between items-center hidden bg-transparent w-[80%] p-7 my-0 rounded-[50px]">
          <Image src="/assets/logo2.svg" alt="logo" width={200} height={100} />
          <div className=" flex gap-5">
            {NavLinks.map((items: any, i: number) => (
              <CustomMenu items={items} key={i} />
            ))}
          </div>
          <button className="primary-btn btn-md rounded-full">
            Connect Now
          </button>
        </div>
      ) : (
        <motion.div
          variants={slideSlider}
          initial={'hidden'}
          animate={'show'}
          className="sm:flex m-auto  bg-black z-50  items-center fixed top-0 justify-between hidden  w-full p-7 my-0 "
        >
          <Image src="/assets/logo2.svg" alt="logo" width={200} height={100} />
          <div className=" flex gap-5">
            {NavLinks.map((items: any, i: number) => (
              <CustomMenu key={i} items={items} />
            ))}
          </div>
          <button className="primary-btn btn-md rounded-full">Connect</button>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
