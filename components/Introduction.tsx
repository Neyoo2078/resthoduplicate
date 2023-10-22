import React from 'react';
import Image from 'next/image';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Introduction = () => {
  return (
    <div className="bg-white p-[30px] md:p-[88px] md:items-center  items-start  gap-2 flex flex-col w-full min-h-[500px] text-black mt-[0px]">
      <div className="dot flex gap-2">
        <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        <h1 className="text-[18px]">introduction to restho</h1>

        <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
      </div>

      <div className="section-title">
        <h3 className=" text-[2rem] md:text-[3.75rem] font-semibold text-black">
          We Are Experienced Restaurant
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start gap-3">
        <div className="w-[431px] rounded-tl-lg rounded-br-lg h-[419px]">
          <Image
            className="rounded-tl-lg rounded-br-lg "
            src="/assets/left-img.png"
            alt="magnetic"
            height={419}
            width={431}
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="w-[887px] md:h-[109px] flex flex-col md:flex-row items-start gap-2">
            <div className="w-[200px]  flex flex-col items-start gap-2 h-[120px] border-[1px] rounded-tl-lg rounded-br-lg border-[#eee] py-[15px] px-[25px] mr-[24px] ">
              <Image
                src="/assets/mission.svg"
                alt="mission"
                width={26}
                height={27}
              />
              <h2 className="text-black text-[20px]">Our Mission</h2>
            </div>
            <div className="md:w-[80%] w-[450px] ">
              <h1 className="text-[#5e5e5e] text-[14px] md:text-[20px] w-full">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </h1>
            </div>
          </div>
          <div className="flex gap-1 p-3 flex-col md:flex-row  items-start ">
            <div className="flex flex-col gap-3 md:gap-0 items-start">
              <div className=" flex  flex-col md:flex-row gap-3 md:gap-[55px] items-start justify-center">
                <div className="flex flex-col gap-3 text-[#5e5e5e] ">
                  <h1 className=" text-[1.125rem] md:text-[20px]  flex gap-2">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Delicious Food
                  </h1>
                  <h1 className="text-[1.125rem] md:text-[20px]   flex gap-2">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Cost Effective
                  </h1>
                  <h1 className="text-[1.125rem] md:text-[20px]   flex gap-2">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Clean Enviroment
                  </h1>
                </div>
                <div className="flex flex-col gap-2 text-[#5e5e5e] ">
                  <h1 className="text-[20px]  flex gap-2 ">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Expert Chef
                  </h1>
                  <h1 className="text-[1.125rem] md:text-[20px]   flex gap-2">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Letraset Sheets.
                  </h1>
                  <h1 className="text-[1.125rem] md:text-[20px]   flex items-center gap-2">
                    <span className="text-[#bf9444]">
                      <AiOutlineCheckCircle />
                    </span>
                    Quality Food.
                  </h1>
                </div>
              </div>
              <div>
                <div className="author-content w-[413px] p-[3px] flex justify-center">
                  <p className="md:text-[24px]   text-[1rem] text-[#5e5e5e] font-[300] ">
                    “Welcome our restaurant! Our Restaurant is the best as like
                    delicious food, nutrition food etc in world-wide.”
                  </p>
                </div>
                <div className="flex gap-2 pl-[65px]">
                  <Image
                    src="/assets/intro-author.png"
                    alt="intro-author"
                    height={65}
                    width={64}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <h1 className="ham">Mr Hamilton</h1>
                    <h1 className="text-[#5e5e5e] text-[14px]">Co Founder</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                className="rounded-tl-lg rounded-br-lg "
                src="/assets/right-img.png"
                alt="right-img"
                height={419}
                width={431}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
