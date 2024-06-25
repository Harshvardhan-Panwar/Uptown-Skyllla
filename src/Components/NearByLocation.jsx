import React from "react";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { FaRegHospital } from "react-icons/fa";
import { IoTrainOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { LiaGraduationCapSolid } from "react-icons/lia";


const NearByLocation = () => {
  return (
    <>
      <section className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
      <div className="w-[95%] m-auto">
          <p className="sm:text-[18px] text-center text-[15px] text-[#777777]">
            Luxury Location
          </p>
          <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] leading-[60px] m-auto sm:mt-4">
            NEAR BY LOCATION
          </p>
          </div>
        <div className="flex flex-wrap gap-3 justify-center drop-shadow-2xl shadow-[rgba(0,0,0,0.50)] mt-20">
          <div className="lg:w-[19%] sm:w-[40%] w-[60%] text-[#254A7B] border-2 rounded-[19px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center  p-3 sm:gap-3 gap-5 ">
              <PiAirplaneTiltThin className="xl:text-[70px] md:text-[50px] text-[40px] me-3 p-2 text-white bg-[#254A7B] rounded-full border" />
              <div>
                <div className="xl:text-[18px] md:text-[15px] text-[13px] font-bold">Airport</div>
                <div className="xl:text-[15px] text-[13px] leading-5">10 MINS</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[19%] sm:w-[40%] w-[60%] text-[#254A7B] border-2 rounded-[19px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center p-3 sm:gap-3 gap-5 ">
              <FaRegHospital className="xl:text-[70px] md:text-[50px] text-[40px] me-3 p-2 text-white bg-[#254A7B] rounded-full border" />
              <div>
                <div className="xl:text-[18px] md:text-[15px] text-[13px] font-bold">Hospital</div>
                <div className=" xl:text-[15px] text-[13px] leading-5">
                25 MINS
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[19%] sm:w-[40%] w-[60%] text-[#254A7B] border-2 rounded-[19px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center p-3 sm:gap-3 gap-5 ">
              <IoTrainOutline className="xl:text-[70px] md:text-[50px] text-[40px] me-3 p-2 text-white bg-[#254A7B] rounded-full border" />
              <div>
                <div className="xl:text-[18px] md:text-[15px] text-[13px] font-bold">Railway Station</div>
                <div className=" xl:text-[15px] text-[13px] leading-5">30 MINS</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[19%] sm:w-[40%] w-[60%] text-[#254A7B] border-2 rounded-[19px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center p-3 sm:gap-3 gap-5 ">
              <CiShop className="xl:text-[70px] md:text-[50px] text-[40px] me-3 p-2 text-white bg-[#254A7B] rounded-full border" />
              <div>
                <div className="xl:text-[18px] md:text-[15px] text-[13px] font-bold">Market</div>
                <div className=" xl:text-[15px] text-[13px] leading-5">
                40 MINS
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[19%] md:w-[40%] w-[60%] text-[#254A7B] border-2 rounded-[19px] shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center p-3 sm:gap-3 gap-5 ">
              <LiaGraduationCapSolid className="xl:text-[70px] md:text-[50px] text-[40px] me-3 p-2 text-white bg-[#254A7B] rounded-full border" />
              <div>
                <div className="xl:text-[18px] md:text-[15px] text-[13px] font-bold">Education C...</div>
                <div className=" xl:text-[15px] text-[13px] leading-5">
                55 MINS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NearByLocation;

