import React from "react";
import img1 from "../assets/Modern aminites.png";
import { LiaCouchSolid } from "react-icons/lia";
import { BiCctv } from "react-icons/bi";
import { FiBatteryCharging } from "react-icons/fi";
import { GiValve } from "react-icons/gi";
import { GiRetroController } from "react-icons/gi";
import { LiaTableTennisSolid } from "react-icons/lia";
import { FaSolarPanel } from "react-icons/fa";
import { GiRadarDish } from "react-icons/gi";
import { TbFireExtinguisher } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";
import banner from "../assets/banner.png";

const ModernAmenities = () => {
  return (
    <>
      <section id="aminities" className="pt-[8%]">
        <div className="w-full flex flex-wrap m-auto mt-10 bg-[#173F63]">
          <div className="md:w-[70%] w-full p-10">
            <p className="sm:text-[20px] text-[15px] text-white leading-5">
            Villa Apartment 
            </p>
            <p className="xl:text-[60px] lg:text-[35px] sm:text-[25px] text-[20px] text-white font-semibold leading-[60px] mt-4">
              MODERN AMENITIES
            </p>
            <div className="w-[100%] flex-wrap flex m-auto mt-10">
              <div className="w-[100%] flex-wrap flex lg:gap-3 gap-2 lg:text-[13px] sm:text-[10px] text-[13px]">
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <LiaCouchSolid className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Informal Sit-Out</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <BiCctv className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Cctv Camera</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <FiBatteryCharging className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>24 Hrs Backup Electricity</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <GiValve className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Adani Gas Line</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <GiRetroController className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Indoor Game</p>
                </div>
              </div>
            </div>

            <div className="w-[100%] m-auto mt-10">
              <div className="w-[100%] flex-wrap flex lg:gap-3 gap-2 lg:text-[13px] sm:text-[10px] text-[13px]">
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <LiaTableTennisSolid className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Activity Room</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <FaSolarPanel className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Solar System</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <GiRadarDish className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Dth Connection</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <TbFireExtinguisher className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>Fire Safety</p>
                </div>
                <div className="bg-white lg:w-[15%] sm:w-[18%] w-full text-center sm:p-5 p-1 rounded-[6px] flex flex-wrap items-center sm:gap-0 gap-3">
                  <GiHomeGarage className="lg:text-[50px] text-[25px] text-[#173F63] sm:m-auto" />
                  <p>3 Basement Parking</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] w-full bg-slate-600">
            <img src={img1} alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="mt-[10%]">
          <img src={banner} alt="" className="w-full" />
      </section>

    </>
  );
};

export default ModernAmenities;
