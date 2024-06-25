import React from "react";
import { useState } from "react";
import AllPhotos from "./CheckOutVillasPhoto/AllPhotos";
import InterrorsPhotos from "./CheckOutVillasPhoto/InterrorsPhotos";
import KitchenPhotos from "./CheckOutVillasPhoto/KitchenPhotos";
import BedroomPhotos from "./CheckOutVillasPhoto/BedroomPhotos";
import DrawingroomPhotos from "./CheckOutVillasPhoto/DrawingroomPhotos";
import BalconyPhotos from "./CheckOutVillasPhoto/BalconyPhotos";
import BathroomPhotos from "./CheckOutVillasPhoto/BathroomPhotos";
import ConstructionPhotos from "./CheckOutVillasPhoto/ConstructionPhotos";

function CheckoutVillasPhoto() {
  const [slide, updateSlide] = useState("slide1");
  return (
    <>
      <section id="gallery" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div className="w-[95%] m-auto">
          <div>
            <p className="sm:text-[18px] text-center text-[15px] text-[#777777]">
              Tour Of Our Villa
            </p>
            <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] m-auto sm:mt-2">
              Checkout Villa Photos
            </p>
          </div>
          <div className="w-full md:gap-7 sm:gap-5 gap-2 md:pt-6 flex xl:text-[18px] lg:text-[13px] sm:text-[8px] text-[5px]  mt-3 sm:mt-0 text-center border-b-2 font-semibold text-[#A0A0A0]">
            <button
              onClick={() => {
                updateSlide("slide1");
              }}
              className={`rounded py-2 sm:py-4 ${
                slide === "slide1" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>All</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide2");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide2" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>INTEROORS</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide3");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide3" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>KITCHEN</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide4");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide4" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>BEDROOM</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide5");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide5" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>DRAWING ROOM</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide6");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide6" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>BALCONY</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide7");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide7" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>BATHROOM</h4>
            </button>
            <button
              onClick={() => {
                updateSlide("slide8");
              }}
              className={`   rounded py-2 sm:py-4 ${
                slide === "slide8" ? "text-[#254A7B]" : "text-[#A0A0A0]"
              }`}
            >
              <h4>CONSTRUCTION UPDATE</h4>
            </button>
          </div>
          <div>
            <div className="   mt-4">
              {slide === "slide1" ? <AllPhotos /> : ""}
              {slide === "slide2" ? <InterrorsPhotos /> : ""}
              {slide === "slide3" ? <KitchenPhotos /> : ""}
              {slide === "slide4" ? <BedroomPhotos /> : ""}
              {slide === "slide5" ? <DrawingroomPhotos /> : ""}
              {slide === "slide6" ? <BalconyPhotos /> : ""}
              {slide === "slide7" ? <BathroomPhotos /> : ""}
              {slide === "slide8" ? <ConstructionPhotos /> : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutVillasPhoto;
