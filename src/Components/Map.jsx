import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp, FaPhone, FaRocketchat } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Map = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section>
      <div className="flex relative w-[100%] lg:h-[500px] mt-[10%]">
        <div className="flex justify-center md:w-[100%] w-[100%] relative">
          <img src="/src/assets/footprint.gif" alt="" className="w-full" />
          <div className="absolute w-fit border-t top-0 translate-x-[-50%] left-[50%] flex">
            <button className="px-7 py-1 bg-white text-[#173F63] rounded-bl-[20px] lg:text-[18px] sm:text-[11px] text-[5px] font-semibold">
              Near By
            </button>
            <button className="px-6 py-1 bg-[#173F63] text-white rounded-br-[20px] lg:text-[18px] sm:text-[11px] text-[5px] font-semibold">
              Google Map
            </button>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[10%]">
        <div className="flex flex-wrap sm:w-[70%] md:justify-between justify-center w-[80%] m-auto xl:text-[30px] text-[12px] md:gap-0 gap-2">
          <button className="md:w-[30%] bg-[#173F63] rounded-[50px] flex items-center gap-2 py-2 px-10 font-semibold text-white mt-5 shadow-xl transition-transform duration-300 hover:scale-105">
            <IoMdDownload />
            Brochure
          </button>
          <button className="md:w-[30%] bg-[#173F63] rounded-[50px] flex items-center gap-2 py-2 px-10 font-semibold text-white mt-5 shadow-xl transition-transform duration-300 hover:scale-105">
            <IoMdDownload />
            Price List
          </button>
          <button className="md:w-[30%] bg-[#173F63] rounded-[50px] flex items-center gap-2 py-2 px-10 font-semibold text-white mt-5 shadow-xl transition-transform duration-300 hover:scale-105">
            <IoMdDownload />
            Site Plan
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="lg:bottom-[-40px] md:bottom-[-36px] bottom-[-13px] right-[-85%] relative w-[4%]">
        <button
          className="xl:w-14 xl:h-14 w-11 h-11 xl:text-[40px] bg-[#254A7B] text-white rounded-full shadow-lg flex items-center justify-center focus:outline-none"
          onClick={toggleExpand}
        >
          <FiPlus />
        </button>

        {/* Expanded icons */}
        {expanded && (
          <div className="absolute xl:bottom-20 bottom-12 lg:space-y-1 bg-white border rounded-full shadow-md ">
            <button className="xl:w-12 xl:h-12 w-10 h-10 bg-white text-[#173F63] xl:text-[20px] rounded-full flex items-center justify-center hover:bg-[#173F63] hover:text-white focus:outline-none">
              <FaPhone />
            </button>
            <button className="xl:w-12 xl:h-12 w-10 h-10 bg-white text-[#173F63] xl:text-[20px] rounded-full flex items-center justify-center hover:bg-[#173F63] hover:text-white focus:outline-none">
              <FaWhatsapp />
            </button>
            <button className="xl:w-12 xl:h-12 w-10 h-10 bg-white text-[#173F63] xl:text-[20px] rounded-full flex items-center justify-center hover:bg-[#173F63] hover:text-white focus:outline-none">
              <HiOutlineClipboardDocumentList />
            </button>
            <button className="xl:w-12 xl:h-12 w-10 h-10 bg-white text-[#173F63] xl:text-[20px] rounded-full flex items-center justify-center hover:bg-[#173F63] hover:text-white focus:outline-none">
              <FaRocketchat />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Map;
