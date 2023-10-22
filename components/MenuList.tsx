import React from 'react';
import Image from 'next/image';
import { IndianMenu, ItalianMenu } from '@/utils/datas';

const MenuList = () => {
  return (
    <div className="bg-white flex-col  text-white  items-start justify-center p-[40px]  gap-5  flex w-full min-h-[500px]  ">
      <div className="section-title2 w-full mx-auto flex flex-col gap-2 justify-center items-center">
        <div className="dot flex justify-center items-center gap-3">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Our New Item</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h2 className="text-[#000] text-[2rem] lg:text-[3.75rem] font-semibold">
          Our Menu List
        </h2>
        <div className="lg:w-[1320px] lg:h-[844px] w-full  flex-col lg:flex-row flex gap-2">
          <div className="lg:w-[636px] lg:h-[820px] w-full  flex p-7 flex-col justify-start items-center bg-[#fafafa] relative">
            <div className="dot flex justify-center items-center gap-2">
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
              <h1 className=" text-[18px] text-black">Welcome to restho</h1>
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
            </div>
            <h2 className="text-[#000] text-[30px]">Indian Menu</h2>
            <div className="w-full">
              <ul className="w-full ">
                {IndianMenu.map((items, i) => (
                  <li className="flex gap-3 justify-center my-4   items-start text-black">
                    <div className="text-[18px] mt-1  text-black">
                      0{i + 1}.
                    </div>
                    <div className="flex   w-[499px] p-0  justify-start items-start flex-col ">
                      <p className="list w-full text-[24px] flex items-center  justify-between gap-6 text-black font-[700]">
                        {items.name}
                        <span className="dot">
                          <Image
                            src="/assets/dot.svg"
                            alt="dot"
                            width={223}
                            height={1}
                          />
                        </span>
                        <span>${items.price}</span>
                      </p>
                      <p className="jost text-[16px] ">
                        To much delicious food in our restaurant.Visit us &
                        taste it early.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-full text-center text-black">
                <p>
                  <span className="text-[#b82e2e] font-semibold">N.B:</span> All
                  food are available in restauarnt & don’t waste your food.
                  Address: Mirpur DOHS, House No-167/170, Avenue-01.
                </p>
              </div>
            </div>
            <Image
              src="/assets/menu-btm-left.svg"
              alt="photo"
              className="absolute bottom-0 left-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-btm-right.svg"
              alt="photo"
              className="absolute bottom-0 right-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-top-right.svg"
              alt="photo"
              className="absolute top-0 right-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-top-left.svg"
              alt="photo"
              className="absolute top-0 left-0"
              width={148}
              height={147}
            />
          </div>
          <div className="lg:w-[636px] lg:h-[820px] w-full flex p-7 flex-col justify-start items-center bg-[#fafafa] relative">
            <div className="dot flex justify-center items-center gap-2">
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
              <h1 className=" text-[18px] text-black">Welcome to restho</h1>
              <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
            </div>
            <h2 className="text-[#000] text-[30px]">Italian Menu</h2>
            <div className="w-full">
              <ul className="w-full ">
                {ItalianMenu.map((items, i) => (
                  <li className="flex gap-3 justify-center my-4   items-start text-black">
                    <div className="text-[18px] mt-1  text-black">
                      0{i + 1}.
                    </div>
                    <div className="flex   w-[499px] p-0  justify-start items-start flex-col ">
                      <p className="list w-full text-[24px] flex items-center  justify-between gap-6 text-black font-[700]">
                        {items.name}
                        <span className="dot">
                          <Image
                            src="/assets/dot.svg"
                            alt="dot"
                            width={223}
                            height={1}
                          />
                        </span>
                        <span>${items.price}</span>
                      </p>
                      <p className="jost text-[16px] ">
                        To much delicious food in our restaurant.Visit us &
                        taste it early.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-full text-center text-black">
                <p>
                  <span className="text-[#b82e2e] font-semibold">N.B:</span> All
                  food are available in restauarnt & don’t waste your food.
                  Address: Mirpur DOHS, House No-167/170, Avenue-01.
                </p>
              </div>
            </div>
            <Image
              src="/assets/menu-btm-left.svg"
              alt="photo"
              className="absolute bottom-0 left-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-btm-right.svg"
              alt="photo"
              className="absolute bottom-0 right-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-top-right.svg"
              alt="photo"
              className="absolute top-0 right-0"
              width={148}
              height={147}
            />
            <Image
              src="/assets/menu-top-left.svg"
              alt="photo"
              className="absolute top-0 left-0"
              width={148}
              height={147}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
