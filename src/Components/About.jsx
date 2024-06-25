import React from "react";
import villa from "../assets/Rectangle 6.png";
import airplane from "../assets/about-1-plan.png";
import location from "../assets/about-2-location.png";
import { LuShieldCheck } from "react-icons/lu";

const About = () => {
  return (
    <>
      <section id="aboutus" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div className="w-[95%] m-auto">
          <p className="sm:text-[18px] text-[15px] text-[#777777]">
            WELCOME TO VILLA
          </p>
          <p className="xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] xl:leading-[50px] lg:leading-[40px] leading-[30px] sm:mt-4 ">
            Get to Know About Luxury & Comfortable Villas
          </p>

          <div className="w-full pt-[6%] flex flex-wrap relative">
            <img
              src={airplane}
              alt=""
              className="absolute top-[-40px] ml-[48%] z-0"
            />
            <img
              src={location}
              alt=""
              className="absolute bottom-[-10%] right-[-4%]"
            />
            <div className=" md:w-[50%] w-[100%]  rounded-[26px] z-20">
              <img src={villa} alt="" className="w-full h-full" />
            </div>
            <div className="md:w-[50%] w-[100%] p-7">
              <p className=" xl:text-[37px] lg:text-[30px] md:text-[25px] text-[20px] text-[#254A7B] font-bold lg:leading-10 sm:leading-7">
                We’re Providing a Great Opportunity for Staying in Top Luxury
                Villas.
              </p>
              <div className="lg:text-[25px] sm:text-[15px] text-start text-[#7D7D7D] pt-10 m-auto ">
                <p>
                  Lorem Ipsum Dolor Sit Amet, Con Adipiscing Elit Tiam Convallis
                  Elit Id Impedie. Quisq Commodo Simply Free Ornare Tortor. If
                  You Are Going To Use A Passage.
                </p>
                <p className="pt-4">
                  Lorem Ipsum Dolor Sit Amet, Con Adipiscing Elit Tiam Convallis
                  Elit Id Impedie. Quisq Commodo
                </p>
              </div>

              <div className="bg-[#25497B] rounded-[13px] mt-10 flex flex-wrap w-full p-5">
                <div className="lg:w-[25%] sm:w-[50%] w-[100%] text-white ">
                  <div>
                    <div className="text-center sm:border-r-[1px] mt-3 ">
                      <LuShieldCheck className="xl:text-[80px] text-[50px] p-2 m-auto" />
                      <div>
                        <div className="xl:text-[18px] text-[15px] font-bold p-1">
                          Guarantee happiness
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[25%] sm:w-[50%] w-[100%] text-white ">
                  <div>
                    <div className="text-center lg:border-r-[1px] mt-3 ">
                      <LuShieldCheck className="xl:text-[80px] text-[50px] p-2 m-auto" />
                      <div>
                        <div className="xl:text-[18px] text-[15px] font-bold p-1">
                        Search & book 
                        the best
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[25%] sm:w-[50%] w-[100%] text-white ">
                  <div>
                    <div className="text-center sm:border-r-[1px] mt-3">
                      <LuShieldCheck className="xl:text-[80px] text-[50px] p-2 m-auto" />
                      <div>
                        <div className="xl:text-[18px] text-[15px] font-bold p-1">
                        Premier choice 
                        for vacation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[25%] sm:w-[50%] w-[100%] text-white ">
                  <div>
                    <div className="text-center mt-3">
                      <LuShieldCheck className="xl:text-[80px] text-[50px] p-2 m-auto" />
                      <div>
                        <div className="xl:text-[18px] text-[15px] font-bold p-1">
                        Most luxury 
                        villas available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
