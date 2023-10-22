import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="footer flex-col justify-between px-[15px] lg:px-[100px]  pt-[10px] lg:pt-[100px] relative  text-white  items-center  gap-5  flex w-full min-h-[550px] ">
      <div className="flex  flex-col lg:flex-row w-full h-full lg:justify-between justify-center   items-center gap-5">
        <div className=" hidden lg:flex flex-col gap-3">
          <h3 className="text-[28px]">Our Facilities</h3>
          <div className="flex gap-3 w-full">
            <div className="flex flex-col text-[18px] josts gap-3">
              <Link href="#">Italian Menu</Link>
              <Link href="#"> Indian Menu</Link>
              <Link href="#"> Menu Items</Link>
              <Link href="#">Private Events</Link>
              <Link href="#">Best Offer</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#">Popular Items</Link>
              <Link href="#">Regular Items</Link>
              <Link href="#">New Food</Link>
              <Link href="#">Special Offer</Link>
            </div>
          </div>
        </div>
        <div className="w-[300px]  gap-2 h-[300px] flex flex-col items-center justify-center rounded-full border-[1px] border-white">
          <Image src="/assets/logo2.svg" alt="logo" width={185} height={41} />
          <h3>Established . 2022</h3>
          <div className="flex gap-1 items-center justify-center">
            {' '}
            <span className="w-[84px] h-[1px] border-[#fff]  border-[1px]"></span>
            <Image src="/assets/sub.svg" alt="photo" width={17} height={12} />
            <span className="w-[84px] h-[1px] border-[#fff] border-[1px]"></span>
          </div>
          <div className="flex gap-2 ">
            <div className="w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#bf9444] rounded-full">
              <BiLogoFacebook />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#bf9444] rounded-full">
              <BiLogoInstagram />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#bf9444] rounded-full">
              <BiLogoLinkedin />
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#bf9444] rounded-full">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
        <div className="flex text-center flex-col w-full lg:w-auto items-center text-[18px] josts gap-3">
          <h4>Address Info</h4>
          <h4>
            <span>Phone: </span>
            +880-1776-766-767
          </h4>
          <h4>
            <span>Email: </span>
            info@example.com
          </h4>
          <h4>
            <span>Fax ID: </span>
            +99-75667-786
          </h4>
          <h4>
            <span> Location: </span>
            Mirpur DOHS,House-167/170, Road-02 Avenue-01.
          </h4>
        </div>
      </div>
      <div className=" w-full lg:w-[80%] h-[40px] border-[1px] p-3 flex justify-between border-[hsla(0,0%,100%,.07)]">
        <div>@Copyright by Egenslab-2023, All Right Reserved.</div>
        <div>Privacy & Policy | Terms and Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
