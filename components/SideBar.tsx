'use client';
import React from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const SideBar = ({ setopenNav, openNav }: any) => {
  const [openHome, setopenHome] = useState(false);

  const [menu, setmenu] = useState(false);

  const [pages, setpages] = useState(false);
  const [blog, setblog] = useState(false);

  const navVariant = {
    hidden: { x: -280 },
    show: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {openNav && (
        <motion.div
          variants={navVariant}
          initial="hidden"
          animate="show"
          exit={{
            x: -280,
            transition: {
              type: 'tween',
              duration: 1,
            },
          }}
          className="fixed flex  flex-col overflow-auto gap-[45px] p-[25px] bg-[#09161d] z-50 left-0  top-0 h-full w-[280px] "
        >
          <div className="w-full flex justify-between">
            <Image src="/assets/logo2.svg" alt="logo" width={120} height={27} />
            <AiOutlineClose
              onClick={() => {
                setopenNav(false);
              }}
              className="w-[25px] h-[25px] font-semibold cursor-pointer"
            />
          </div>
          <div className="flex px-[15px] flex-col gap-5">
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="text-[#bf9444] jost flex justify-between text-[1.125rem] font-semiibold"
              >
                HOME{' '}
                <AiOutlinePlus
                  onClick={() => {
                    setopenHome(true);
                  }}
                  className="text-white"
                />
              </Link>
              {openHome && (
                <div className="flex flex-col ml-10 gap-3">
                  <Link href="#">HOME ONE</Link>
                  <Link href="#">HOME TWO</Link>
                  <Link href="#">HOME THREE</Link>
                </div>
              )}
            </div>
            <Link href="#" className="hover:text-[#bf9444] text-[#fff]">
              ABOUT
            </Link>

            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="hover:text-[#bf9444] text-[#fff] font-semibold jost  flex justify-between text-[1.125rem] "
              >
                MENU{' '}
                <AiOutlinePlus
                  onClick={() => {
                    setmenu(true);
                  }}
                  className="text-white"
                />
              </Link>
              {menu && (
                <div className="flex flex-col ml-10 gap-3">
                  <Link href="#">MENU LIST-01</Link>
                  <Link href="#">MENU LIST-02</Link>
                  <Link href="#">THREE COLUMS MENU</Link>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="hover:text-[#bf9444] text-[#fff] font-semibold flex justify-between jost text-[1.125rem] "
              >
                PAGES{' '}
                <AiOutlinePlus
                  onClick={() => {
                    setpages(true);
                  }}
                  className="text-white"
                />
              </Link>
              {pages && (
                <div className="flex flex-col ml-10 gap-3">
                  <Link href="#">FOOD CATEGORIES</Link>
                  <Link href="#">RESERVATION</Link>
                  <Link href="#">GALLERY</Link>
                  <Link href="#">CHEF</Link>
                  <Link href="#">SHOP</Link>
                  <Link href="#">fAQ</Link>
                  <Link href="#">ERROR</Link>
                </div>
              )}
            </div>
            <div>
              <Link
                href="#"
                className="hover:text-[#bf9444] text-[#fff] font-semibold flex justify-between jost text-[1.125rem] "
              >
                BLOG{' '}
                <AiOutlinePlus
                  onClick={() => {
                    setblog(true);
                  }}
                  className="text-white"
                />
              </Link>
              {blog && (
                <div className="flex flex-col ml-10 gap-3">
                  <Link href="#">BLOG GRID</Link>
                  <Link href="#">BLOG STANDARD</Link>
                  <Link href="#">BLOG DETAILS</Link>
                </div>
              )}
            </div>
            <Link
              href="#"
              className="hover:text-[#bf9444] text-[#fff] font-semibold"
            >
              CONTACT
            </Link>
          </div>

          <div className="w-full flex gap-1 items-center">
            <div className="w-[50px] h-[50px] rounded-full  flex items-center justify-center bg-transparent hover:bg-[#bf9444] border-[1px] border-[#bf9444]">
              <BiPhoneCall className="text-[#bf9444] w-[26px] h-[26px]" />
            </div>
            <div className="flex flex-col gp-2">
              <h3 className="text-[#bf9444] text-[14px] jost font-semibold">
                Call Now
              </h3>
              <h3 className="text-white text-[20px] jost font-[400]">
                +998-8776345
              </h3>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
