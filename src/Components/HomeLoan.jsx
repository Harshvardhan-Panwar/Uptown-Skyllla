import React from "react";

import img5 from "../assets/axis bank.png";
import img1 from "../assets/union bank.png";
import img2 from "../assets/idbi bank.png";
import img3 from "../assets/dena bank.png";
import img4 from "../assets/hdfc bank.png";

const HomeLoan = () => {


  return (
    <>
    <section>
      <div className="w-[95%] m-auto mt-[90px]">
        <div>
          <p className="text-center mt-[5%] font-bold md:text-[62px] text-[40px] text-[#3D6B96]">
            HOME LOAN FACILITY
          </p>
        </div>

        <div className="flex flex-wrap mt-[60px] justify-center gap-4">
          <div className="lg:w-[19%] md:w-[40%] w-[80%] h-[80px] flex items-center justify-center rounded-[17px] border-2 shadow-xl hover:scale-105 transition-transform duration-300">
            <img className="w-[80%]" src={img1} alt="" />
          </div>
          <div className="lg:w-[19%] md:w-[40%] w-[80%] h-[80px] flex items-center justify-center rounded-[17px] border-2 shadow-xl p-5 hover:scale-105 transition-transform duration-300">
            <img className="w-[80%]" src={img2} alt="" />
          </div>
          <div className="lg:w-[19%] md:w-[40%] w-[80%] h-[80px] flex items-center justify-center rounded-[17px] border-2 shadow-xl hover:scale-105 transition-transform duration-300">
            <img className="w-[50%]" src={img3} alt="" />
          </div>
          <div className="lg:w-[19%] md:w-[40%] w-[80%] h-[80px] flex items-center justify-center rounded-[17px] border-2 shadow-xl hover:scale-105 transition-transform duration-300">
            <img className="w-[50%]" src={img4} alt="" />
          </div>
          <div className="lg:w-[19%] md:w-[40%] w-[80%] h-[80px] flex items-center justify-center rounded-[17px] border-2 shadow-xl hover:scale-105 transition-transform duration-300">
            <img className="w-[50%]" src={img5} alt="" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HomeLoan;
