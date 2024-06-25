import React from "react";
import img1 from "../assets/getintouch.png";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

const GetInTouch = () => {
  return (
    <>
      <section id="contactus" className="pt-[1%]">
        <div className="w-full lg:flex bg-[#173F63] mt-[10%]">
          <div className="flex flex-wrap lg:w-[30%] w-[100%] m-auto">
            <img src={img1} alt="" className="w-full sm:h-[500px] h-[300px]" />
          </div>
          <div className="lg:w-[70%] w-[100% flex flex-wrap m-auto">
            <div className="lg:w-[40%] md:w-[49%] w-full p-5">
              <div>
                <p className="text-white md:text-[41.41px] text-[35px] font-semibold">
                  Contact Us
                </p>
                <p className="text-white sm:text-[18px] text-[15px] font-medium">
                  24x7 Service
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                <LuPhoneCall className="bg-[#3D6B96] text-white sm:text-[40px] text-[30px] rounded-full p-2" />
                <div>
                  <p className="text-white sm:text-[18px] text-[15px] font-normal">
                    +91 1234567890
                  </p>
                  <p className="text-white sm:text-[18px] text-[15px] font-normal">
                    +91 1234567890
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                <MdOutlineLocalPostOffice className="bg-[#3D6B96] text-white sm:text-[40px] text-[30px] rounded-full p-2" />
                <div>
                  <p className="text-white sm:text-[18px] text-[15px] font-normal">
                    Needhelp@gmail.com
                  </p>
                  <p className="text-white sm:text-[18px] text-[15px] font-normal">
                    sushma@gmail.com
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-2">
                <TiLocation className="bg-[#3D6B96] text-white sm:text-[40px] text-[30px] rounded-full p-2" />
                <div>
                  <p className="text-white sm:text-[18px] text-[15px] font-normal">
                    PR-7 Airport Road, Zirakpur, Punjab
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:w-[60%] md:w-[49%] h-[100%]">
              <div className="text-white md:text-[41.41px] text-[35px] font-semibold mt-5 sm:ml-[89px]">
                <p>Get in touch </p>
              </div>
              <p className="text-white md:text-[20px] sm:ml-[90px] font-medium">
                You have any question? feel free to contact us.
              </p>
              <div className="w-[70%] m-auto mt-5">
                <div className="relative w-full sm:text-[20px]">
                  <input
                    className=" w-full mt-3 bg-[#0B2D4B] text-[#888080] rounded py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className=" w-full mt-3 bg-[#0B2D4B] text-[#888080] rounded py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="Mobile No."
                  />
                  <input
                    className=" w-full mt-3 bg-[#0B2D4B] text-[#888080] rounded py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="Email"
                  />

                  <button className="px-9 py-4 font-medium rounded bg-[#3D6B96] text-[rgba(255,255,255,1)] mt-3 block sm:text-[24.5px] leading-[21.69px] mb-5 m-auto">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
