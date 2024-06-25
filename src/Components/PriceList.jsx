import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import Price from "./PriceList/Price";
import PaymentPlan from "./PriceList/PaymentPlan";

function PriceList() {
  const [slide, updateSlide] = useState("slide1");
  return (
    <>
      <section id="price" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div className="w-[95%] m-auto">
          <div>
            <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] m-auto">
              PRICE LIST
            </p>
            <p className="sm:text-[18px] text-center text-[15px] text-[#777777] mt-2">
              Within the premises of the Sushma Township are reputed Schools.
            </p>
          </div>
          <div className="w-full md:pt-6 m-auto flex flex-wrap justify-center lg:text-[20px] sm:text-[18px] text-[13px]  mt-3 sm:mt-0 font-semibold text-[#A0A0A0]">
            <button
              onClick={() => {
                updateSlide("slide1");
              }}
              className={`flex items-center justify-center w-[50%] ${
                slide === "slide1"
                  ? "text-[#254A7B] border-b-4 border-[#254A7B]"
                  : "text-[#A0A0A0] border-b-4 border-[#A0A0A0]"
              }`}
            >
              <h4 className="py-2 flex flex-wrap items-center gap-1">
                PRICE <IoIosArrowForward />
              </h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide2");
              }}
              className={`py-2 flex items-center justify-center w-[50%] ${
                slide === "slide2"
                  ? "text-[#254A7B] border-b-4 border-[#254A7B]"
                  : "text-[#A0A0A0] border-b-4 border-[#A0A0A0]"
              }`}
            >
              <h4 className="flex flex-wrap items-center gap-1">
              PAYMENT PLAN<IoIosArrowForward />
              </h4>
            </button>
          </div>
          <div>
            <div className="mt-4">
              {slide === "slide1" ? <Price /> : ""}
              {slide === "slide2" ? <PaymentPlan /> : ""}
            </div>
          </div>
        </div>

        <div className="w-[95%] rounded-[15px] bg-[#173F63] p-10 m-auto mt-[7%]">
          <div className="flex flex-wrap sm:justify-between justify-center w-full items-center">
            <p className="lg:text-[30px] md:text-[20px] font-semibold text-white">
              SCHEDULE YOUR SITE VISIT
            </p>
            <button className="flex items-center bg-white font-semibold py-1 px-6 mt-3 border-[2.6px] shadow lg:text-[18px] sm:text-[15px] text-[10px] rounded-[22px] transition-transform duration-300 hover:scale-105">
              BOOK SITE VISIT <CgArrowLongRight className="text-[25px] ml-3" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PriceList;
