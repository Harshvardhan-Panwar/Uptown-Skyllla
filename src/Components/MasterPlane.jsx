import React from "react";
import masterplane from "../assets/masterplan.png";

const MasterPlane = () => {
  return (
    <>
      <section>
        <div className="w-[95%] m-auto mt-[10%]">
          <p className="text-center xl:text-[60px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] leading-[60px] m-auto mt-4">
            Master Plan
          </p>
        </div>
        <div className="w-[95%] m-auto flex flex-wrap justify-between">
          <div className="w-[100%] flex flex-wrap">
            <div className="md:w-[45%] w-[100%] p-10 ">
              <img
                src={masterplane}
                alt=""
                className="md:h-full h-[250px] w-[350px] m-auto"
              />
            </div>

            <div className="md:w-[55%] w-[100%]">
              <ul className="w-full space-y-1 md:mt-[8%] xl:text-[25px] m-auto md:text-[15px] text-[13px] text-[#565555] font font-semibold md:gap-10 justify-between p-10 flex list-decimal list-inside dark:text-gray-400">
                <div className="w-[100%] flex flex-col md:gap-3 ">
                  <li>Entry - Exit</li>
                  <li>Seating Terrace</li>
                  <li>Wellness Area</li>
                  <li>Children Play Area</li>
                  <li>Gazebo</li>
                  <li>Fire Tender Entry - Exit</li>
                  <li>Palm Grove</li>
                  <li>Gazebo</li>
                  <li>Lawn</li>
                  <li>Yoga Deck</li>
                </div>
                <div className="w-[100%] flex flex-col md:gap-3 ">
                  <li>Walking & Cycling Track</li>
                  <li>Sports Corner</li>
                  <li>Badminton Court</li>
                  <li>Outdoor Gym</li>
                  <li>Clubhouse</li>
                  <li>Basement Entry</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasterPlane;
