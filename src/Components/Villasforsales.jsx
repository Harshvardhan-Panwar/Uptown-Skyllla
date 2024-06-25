import React, { useState } from "react";
import Newlaunch from "./Villasforsales/NewLaunch";
import ReadtToOccupy from "./Villasforsales/ReadtToOccupy";
import Ongoing from "./Villasforsales/Ongoing";
import Completed from "./Villasforsales/Completed";

const Villasforsales = () => {

  const [activePlan, setActivePlan] = useState("New_Launch");

  const renderPlan = () => {
    switch (activePlan) {
      case "New_Launch":
        return <Newlaunch />;
      case "Ready_To_Occupy":
        return <ReadtToOccupy />;
      case "Ongoing":
        return <Ongoing />;
      case "Completed":
        return <Completed />;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="product" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div className="w-[95%] m-auto">
          <p className="sm:text-[18px] text-[15px] text-center text-[#777777]">
            OUR VILLAS FOR SALES
          </p>
          <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[50%] lg:leading-[50px] m-auto sm:mt-4 leading-[30px]">
            See Villas You’ll Love to Book for Vacations
          </p>
          <div className="flex gap-1 sm:mt-10">
            <button
              className={`xl:text-[22px] sm:text-[12px] text-[10px] mt-5 gap-3 flex items-center justify-center font-bold py-2 px-4
                ${activePlan === "New_Launch" ? "bg-[#173F63] text-white" : "text-[#173F63] bg-[#F2F2F2]"}`}
              onClick={() => setActivePlan("New_Launch")}
            >
              New Launch
            </button>
            <button
              className={`xl:text-[22px] sm:text-[12px] text-[10px] mt-5 gap-3 flex items-center justify-center font-bold py-2 px-4
                ${activePlan === "Ready_To_Occupy" ? "bg-[#173F63] text-white" : "text-[#173F63] bg-[#F2F2F2]"}`}
              onClick={() => setActivePlan("Ready_To_Occupy")}
            >
              Ready To Occupy
            </button>
            <button
              className={`xl:text-[22px] sm:text-[12px] text-[10px] mt-5 gap-3 flex items-center justify-center font-bold py-2 px-4
                ${activePlan === "Ongoing" ? "bg-[#173F63] text-white" : "text-[#173F63] bg-[#F2F2F2]"}`}
                onClick={() => setActivePlan("Ongoing")}
            >
              Ongoing
            </button>
            <button
              className={`xl:text-[22px] sm:text-[12px] text-[10px] mt-5 gap-3 flex items-center justify-center font-bold py-2 px-4
                ${activePlan === "Completed" ? "bg-[#173F63] text-white" : "text-[#173F63] bg-[#F2F2F2]"}`}
                onClick={() => setActivePlan("Completed")}
            >
              Completed
            </button>
          </div>
          {/* Render the selected plan component */}
          {renderPlan()}
        </div>
      </section>
    </>
  );
};

export default Villasforsales;
