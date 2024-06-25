import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { LuBedSingle } from "react-icons/lu";
import { ImPriceTags } from "react-icons/im";
import { IoKey } from "react-icons/io5";

const Feature = () => {
  return (
    <>
      <section>
        <div className="flex flex-wrap drop-shadow-2xl shadow-[rgba(0,0,0,0.50)] bg-[#295FA9]">
          <div className="lg:w-[20%] sm:w-[50%] w-[100%] text-white bg-[#234674]">
            <div className="flex justify-center m-7 sm:ml-0 ml-[20px]">
              <FaBuilding className="lg:text-[70px] text-[50px] me-3 p-1 border-r-[1px]" />
              <div>
                <div className="xl:text-[18px] text-[15px] mt-2 font-bold">Property Type</div>
                <div className=" xl:text-[15px] text-[13px] mt-1 leading-5">Luxury Villas</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[20%] sm:w-[50%] w-[100%] text-white bg-[#274D81]">
            <div className="flex justify-center m-7 sm:ml-0 ml-[60px]">
              <HiLocationMarker className="lg:text-[70px] text-[50px] me-3 p-1 border-r-[1px]" />
              <div>
                <div className="xl:text-[18px] mt-2 font-bold">Location</div>
                <div className="xl:text-[15px] mt-1 leading-5">
                  Sector 82A, Maholi
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[20%] sm:w-[50%] w-[100%] text-white bg-[#2A548E]">
            <div className="flex justify-center m-7 sm:ml-0 ml-[-3px]">
              <LuBedSingle className="lg:text-[70px] text-[50px] me-3 p-1 border-r-[1px]" />
              <div>
                <div className="xl:text-[18px] mt-2 font-bold">Unit Type</div>
                <div className="xl:text-[13px] mt-1 leading-5">Villas</div>
              </div>
            </div>
          </div>

          <div className="lg:w-[20%] sm:w-[50%] w-[100%] text-white bg-[#295BA0]">
            <div className="flex justify-center m-7 sm:ml-0 ml-[50px]">
              <ImPriceTags className="lg:text-[75px] text-[50px] me-3 p-1 border-r-[1px]" />
              <div>
                <div className="xl:text-[18px] mt-2 font-bold">Investment</div>
                <div className="xl:text-[15px] mt-1 leading-5">
                  1.16 Cr Onwards
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[20%] w-[100%] text-white bg-[#295FA9]">
            <div className="flex justify-center m-7 sm:ml-0 ml-[70px]">
              <IoKey className="lg:text-[75px] text-[50px] me-3 p-1 border-r-[1px]" />
              <div>
                <div className="xl:text-[18px] mt-2 font-bold">Status</div>
                <div className="xl:text-[15px] mt-1 leading-5">
                  Under Construction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
