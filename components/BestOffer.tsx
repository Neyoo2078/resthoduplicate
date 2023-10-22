import React from 'react';
import Image from 'next/image';

const BestOffer = () => {
  return (
    <div className="bg-white flex-col  text-white  items-start justify-center p-[40px]  gap-5  flex w-full min-h-[500px]  ">
      <div className="section-title2 w-full mx-auto flex flex-col justify-center items-center">
        <div className="dot flex justify-center items-center gap-2">
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
          <h1 className=" text-[18px]">Best Offer</h1>
          <Image src="/assets/sub.svg" alt="photo" width={20} height={20} />
        </div>
        <h3 className="text-[#000]  text-[1.5rem] lg:text-[3.75rem] font-semibold">
          {' '}
          Choose Your Best Offer
        </h3>
        <div className="w-full flex lg:flex-row flex-col gap-3 justify-center">
          <div className="lg:w-[636px] p-6  w-full flex items-center  lg:h-[401px] border-[1px] border-[#eee] rounded-[5px]">
            <div className="flex p-3 flex-col gap-2 items-start">
              <h3 className="text-[30px] text-black font-[700]">
                Buy One Get One Free
              </h3>
              <p className="text-[#5e5e5e] font-[400] text-[1.25rem]">
                If you are going to use a passage of Lorem Ipsum need.
              </p>
              <button className="primary-btn2 btn-md rounded-full">
                Limited Offer
              </button>
              <ol className="text-[#5e5e5e] jost text-[16px]">
                <li>
                  <span className="mx-2">1.</span>Prawn with Noodls.
                </li>
                <li>
                  <span className="mx-2">2.</span>Special Drinks.
                </li>
              </ol>
            </div>
            <div className="w-[200px] h-[234px] float-right relative">
              <Image
                src="/assets/best-offer-img1.png"
                alt="photo"
                width={300}
                height={335}
              />
              <div className="w-[64px] h-[64px] absolute left-0 top-[30%] text-[#bf9444]  border-[1px] justify-center font-[600]  flex items-center rounded-full border-dashed border-[#bf9444] bg-white">
                $55
              </div>
            </div>
          </div>
          <div className="lg:w-[636px] p-6 w-full  flex items-center  lg:h-[401px] border-[1px] border-[#eee] rounded-[5px]">
            <div className="flex p-3 flex-col gap-2 items-start">
              <h3 className="text-[30px] text-black font-[700]">
                Buy One Get One Free
              </h3>
              <p className="text-[#5e5e5e] font-[400] text-[1.25rem]">
                If you are going to use a passage of Lorem Ipsum need.
              </p>
              <button className="primary-btn2 btn-md rounded-full">
                Limited Offer
              </button>
              <ol className="text-[#5e5e5e] jost text-[16px]">
                <li>
                  <span className="mx-2">1.</span>Prawn with Noodls.
                </li>
                <li>
                  <span className="mx-2">2.</span>Special Drinks.
                </li>
              </ol>
            </div>
            <div className="w-[200px] h-[234px] float-right relative">
              <Image
                src="/assets/best-offer-img2.png"
                alt="photo"
                width={300}
                height={335}
              />
              <div className="w-[64px] h-[64px] absolute left-0 top-[30%] text-[#bf9444]  border-[1px] justify-center font-[600]  flex items-center rounded-full border-dashed border-[#bf9444] bg-white">
                $55
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
