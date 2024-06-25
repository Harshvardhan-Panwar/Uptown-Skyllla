import React from "react";
import { PiPlayLight } from "react-icons/pi";
import { MdOutlineVilla } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const VideoBanner = () => {
  return (
    <>
      <section className="bg-cover bg-center w-full bg-[url('/src/assets/Rectangle%20629.png')] mt-[10%]">
        <div className="flex flex-wrap w-full h-full bg-[rgba(0,0,0,0.5)]">
          <div className="lg:w-[60%] md:w-[50%] w-full">
          <div className=" items-center pt-[13%] ml-[10%]">
            <div className="relative flex items-center justify-center lg:w-[90px] lg:h-[90px] w-[70px] h-[70px]">
              <button className="z-10 flex items-center justify-center w-full h-full text-white bg-[#34648d] rounded-full">
                <span className="lg:text-[50px] text-[30px]">
                  <a href="ADD_YOUR_LINK_HERE"><PiPlayLight  /></a>
                </span>
              </button>
              <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping-custom1"></span>
              <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping-custom2"></span>
              <span className="absolute inline-flex w-full h-full bg-blue-300 rounded-full opacity-75 animate-ping-custom3"></span>
              <span className="absolute inline-flex w-full h-full bg-blue-200 rounded-full opacity-75 animate-ping-custom4"></span>
              <span className="absolute inline-flex w-full h-full bg-blue-100 rounded-full opacity-75 animate-ping-custom5"></span>
            </div>
          </div>
          <div className="mt-[6%] ml-[8%]">
            <p className="text-white lg:text-[35px] text-[30px] font-semibold md:w-[40%]">
              THE PROJECT WALK-THROUGH
            </p>
          </div>
          </div>
          <div className="lg:w-[40%] md:w-[50%] w-full flex flex-wrap justify-between items-center p-[5%]">
            <div className="w-[48%] border-white border-[1px] text-center p-3 mt-5">
            <MdOutlineVilla className="xl:text-[70px] lg:text-[50px] text-[40px] p-2 hover:bg-white bg-[#2D6699] m-auto text-white hover:text-[#2D6699] rounded-full"/>
            <p className="text-white xl:text-[25px] m-auto">LUXURYS VILLAS</p>
            </div>
            <div className="w-[48%] border-white border-[1px] text-center p-3 mt-5">
            <VscWorkspaceTrusted className="xl:text-[70px] lg:text-[50px] text-[40px] p-2 hover:bg-white bg-[#2D6699] m-auto text-white hover:text-[#2D6699] rounded-full"/>
            <p className="text-white xl:text-[25px] m-auto">TRUSTED EXPERIENCE</p>
            </div>
            <div className="w-[48%] border-white border-[1px] text-center p-3 mt-5">
              <MdOutlineMiscellaneousServices className="xl:text-[70px] lg:text-[50px] text-[40px] p-2 hover:bg-white bg-[#2D6699] m-auto text-white hover:text-[#2D6699] rounded-full"/>
              <p className="text-white xl:text-[25px] m-auto ">UNPARALLELED SERVICE</p>
            </div>
            <div className="w-[48%] border-white border-[1px] text-center p-3 mt-5">
            <RiSecurePaymentLine className="xl:text-[70px] lg:text-[50px] text-[40px] p-2 hover:bg-white bg-[#2D6699] m-auto text-white hover:text-[#2D6699] rounded-full"/>
            <p className="text-white xl:text-[25px] m-auto">SECURE PAYMENTS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoBanner;
