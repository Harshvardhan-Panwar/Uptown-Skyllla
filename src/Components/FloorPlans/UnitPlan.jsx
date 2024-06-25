import React, { useState } from "react";
import TwoDView from "./TwoDView";
import ThreeDView from "./ThreeDView";

const UnitPlan = () => {
  const [activePlan, setActivePlan] = useState("TwoDView");

  const renderPlan = () => {
    switch (activePlan) {
      case "TwoDView":
        return <TwoDView />;
      case "ThreeDView":
        return <ThreeDView />;
      default:
        return null;
    }
  };

  return (
    <>
      <section>
        <div id="floorplans" className="flex justify-center relative mb-10">
          <div className="text-center m-auto w-[100%] mt-[5%]">
            <h1 className="sm:text-[50px] text-[30px] font-bold w-[100%] text-[#3D6B96]">
              UNIT PLANS
            </h1>
            <img
              src="/src/assets/Group 1147.png"
              className="m-auto sm:w-0 w-[50%]"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <div className="inline-flex md:relative justify-center w-[100%] ">
              <div className="border-[3px] md:absolute z-[9] xl:right-[80px] right-[40px] rounded-[15px] border-[#3D6B96] mt-10">
                <button
                  className={`lg:text-[15px]  text-[12px]  ${
                    activePlan === "TwoDView"
                      ? "text-white bg-[#3D6B96] rounded-[10px]"
                      : "bg-white text-[#3D6B96]"
                  }  font-bold py-2 px-4   rounded-[10px]`}
                  onClick={() => setActivePlan("TwoDView")}
                >
                  2D View
                </button>
                <button
                  className={` lg:text-[15px]  text-[12px]  ${
                    activePlan === "ThreeDView"
                      ? "text-white bg-[#3D6B96] rounded-[10px]"
                      : "bg-white text-[#3D6B96]"
                  }  font-bold py-2 px-4  rounded-[10px]`}
                  onClick={() => setActivePlan("ThreeDView")}
                >
                  3D View
                </button>
              </div>
            </div>
          </div>

          {/* Render the selected plan component */}
          {renderPlan()}
        </div>
      </section>
    </>
  );
};

export default UnitPlan;
