import React from "react";
import map from "../assets/location_map.png";

const LocationMap = () => {
  return (
    <>
      <section id="locationmap" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div className="w-[95%] m-auto">
          <p className="sm:text-[18px] text-center text-[15px] text-[#777777]">
            Luxury Location
          </p>
          <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] leading-[60px] m-auto sm:mt-4">
            LOCATION MAP
          </p>
          <div className="w-[80%] m-auto">
            <img src={map} alt="" className="w-full" />
          </div>
          <p className="lg:w-[40%] sm:w-[60%] w-full xl:text-[22px] md:text-[18px] text-[15px] text-[#676767]">
            Location of Zirakpur is Very Prime as it is close to Malls of
            Zirakpur, prominent Schools of Zirakpur, Hospitals of Zirakpur &
            close Proximity to International Airport Mohali Chandigarh.
          </p>
        </div>
      </section>
    </>
  );
};

export default LocationMap;
