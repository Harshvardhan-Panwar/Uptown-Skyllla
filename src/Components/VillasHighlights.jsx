import React, { useState } from "react";
import infosys from "../assets/Rectangle 616.png";
import playground from "../assets/large play ground.jpg";
import airport from "../assets/airport.webp";
import swimming from "../assets/Swimming pool.webp";
import neighbourhood from "../assets/quiet neighbourhood.jpg";

const VillasHighlights = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const Villas_Highlights_Data = [
    {
      id: 1,
      image: playground,
      name: "Large Play Ground",
      info: "Powerful corporate social responsibility and employee engagement strategies. Impact is about more than moving.",
    },
    {
      id: 2,
      image: airport,
      name: "Airport",
      info: "Powerful corporate social responsibility and employee engagement strategies. Impact is about more than moving.",
    },
    {
      id: 3,
      image: infosys,
      name: "Infosys & IT City",
      info: "Powerful corporate social responsibility and employee engagement strategies. Impact is about more than moving.",
    },
    {
      id: 4,
      image: swimming,
      name: "Swimming Pool",
      info: "Powerful corporate social responsibility and employee engagement strategies. Impact is about more than moving.",
    },
    {
      id: 5,
      image: neighbourhood,
      name: "Quiet Neighbourhood",
      info: "Powerful corporate social responsibility and employee engagement strategies. Impact is about more than moving.",
    },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <section>
        <div>
          <p className="sm:text-[18px] text-center text-[15px] text-[#777777] mt-[10%]">
            ENJOY VILLAS
          </p>
          <p className="text-center xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] text-[#254A7B] font-semibold md:w-[40%] m-auto sm:mt-2">
            Villas Highlights
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-between sm:relative mt-8">
          <div className="bg-[#EBF3FF] w-[40%] items-center ">
            <div className="w-full justify-center h-full items-center sm:p-10 p-5 xl:pt-[25%]">
              {Villas_Highlights_Data.map((item, index) => (
                <div key={index}>
                  <button
                    className={`text-[#254A7B] xl:text-[25px] lg:text-[23px] md::text-[15px] sm:text-[12px] text-[7px] border-l-4 p-3 font-semibold ${
                      selectedItem === index
                        ? "border-[#254A7B]"
                        : "border-white"
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[60%]">
            <img
              src={Villas_Highlights_Data[selectedItem].image}
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="sm:absolute sm:border-8 border-2 border-white bg-[#173F63] md:w-[30%] sm:w-[35%] w-full sm:m-0 m-auto sm:ml-[30%] xl:mt-[11%] sm:mt-[8%] sm:p-5">
            <p className="border-b-[1px] text-white xl:text-[30px] lg:text-[23px] md:text-[16px] sm:text-[14px] text-[10px] font-bold p-1">
              {Villas_Highlights_Data[selectedItem].name}
            </p>
            <p className="text-white xl:text-[20px] lg:text-[15px] sm:text-[13px] text-[8px] text-start p-2 font-semibold">
              {Villas_Highlights_Data[selectedItem].info}
            </p>
          </div>
        </div>

        <div className="w-full bg-[#173F63] flex flex-wrap p-10 sm:mt-0 mt-5 sm:gap-0 gap-5">
          <div className=" text-white sm:w-[30%] sm:m-auto">
            <p className="lg:text-[22px] text-[15px]">A Few Words About House</p>
            <p className="lg:text-[50px] md:text-[40px] text-[30px]">LUXUARY VILLA</p>
          </div>
          <div className="sm:w-[60%] text-justify text-white m-auto">
            <p className="lg:text-[19px] md:text-[15px] text-[13px]">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VillasHighlights;
