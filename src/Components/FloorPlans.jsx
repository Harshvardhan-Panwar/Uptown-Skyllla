import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import img1980_east_1 from "../assets/1980-East-1.webp";
import img1980_east_2 from "../assets/1980-East-2.webp";
import img1980_west_1 from "../assets/1980-West-1.webp";
import img1980_west_2 from "../assets/1980-West-2.webp";
import img2220_east_1 from "../assets/2220-East-1.webp";
import img2220_east_2 from "../assets/2220-East-2.webp";

const Floorplans = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const TwoD_Data = [
    {
      id: 1,
      image: img1980_east_1,
      bhk: "3 BHK",
      sqft: "1980 sq.ft.",
      direction: "East",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },

    {
      id: 2,
      image: img1980_east_2,
      bhk: "3 BHK",
      sqft: "1980 sq.ft.",
      direction: "East",
      type: "Type-2",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },

    {
      id: 3,
      image: img1980_west_1,
      bhk: "3 BHK",
      sqft: "1980 sq.ft.",
      direction: "West",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },

    {
      id: 4,
      image: img1980_west_2,
      bhk: "3 BHK",
      sqft: "1980 sq.ft.",
      direction: "West",
      type: "Type-2",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },

    {
      id: 5,
      image: img2220_east_1,
      bhk: "3 BHK",
      sqft: "2220 sq.ft.",
      direction: "East",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },

    {
      id: 6,
      image: img2220_east_2,
      bhk: "3 BHK",
      sqft: "2220 sq.ft.",
      direction: "East",
      type: "Type-2",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },
    {
      id: 7,
      image: img1980_east_2,
      bhk: "3 BHK",
      sqft: "2220 sq.ft.",
      direction: "West",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },
    {
      id: 8,
      image: img1980_west_2,
      bhk: "3 BHK",
      sqft: "2220 sq.ft.",
      direction: "West",
      type: "Type-2",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },
    {
      id: 9,
      image: img1980_east_2,
      bhk: "3 BHK",
      sqft: "4440 sq.ft.",
      direction: "East",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },
    {
      id: 10,
      image: img1980_west_2,
      bhk: "3 BHK",
      sqft: "4440 sq.ft.",
      direction: "West",
      type: "Type-1",
      carpetarea: "1242 Sq.Ft.",
      balconyarea: "305 Sq.Ft.",
      wallarea: "1242 Sq.Ft.",
      commonarea: "305 Sq.Ft.",
    },
  ];

  return (
    <>
      <section id="floorplans" className="lg:pt-[10%] sm:pt-[15%] pt-[25%]">
        <div  className="flex justify-center relative mb-10">
          <div className="text-center m-auto w-[100%]">
            <p className="xl:text-[50px] lg:text-[35px] sm:text-[25px] text-[20px] font-bold w-[100%] text-[#254A7B]">
              FLOOR PLANS
            </p>
          </div>
        </div>
        <div className="slider-container mt-10 relative w-[95%] m-auto">
          <Slider ref={sliderRef} {...settings}>
            {TwoD_Data.map((item) => (
              <div key={item.id} className="slide text-center p-3 ">
                <div className="border-[2px] rounded-[15px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={`Plan ${item.type}`}
                    className="m-auto w-full p-5"
                  />
                  <div className="slide-info p-2 border-t-2 w-[95%] m-auto">
                    <h3 className="text-[#173F63] lg:text-[14px] text-[10px] font-bold">
                      EXCLUSIVE 3BHK
                    </h3>
                    <p className="text-[#173F63] lg:text-[20px] md:text-[14px] font-bold">
                      {item.bhk} {item.sqft} ( {item.direction} | {item.type} )
                    </p>
                    <p className="text-[#696969] lg:text-[15px] text-[13px] mt-1 font-semibold">
                      Where comfort meets happiness, everyday!
                    </p>
                    <button className="text-center border-[0.48px] text-[11px] py-2 px-4 border-[#173F63] text-[#040607] hover:bg-[#173F63] hover:text-white rounded-[4.5px] mt-5">
                      <Link to={"/unit_plan"}>Know More</Link>
                    </button>
                  </div>
                  <div className="w-full py-1 bg-[#173F63] mt-4"></div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center xl:mt-[-20%] md:mt-[-30%] sm:mt-[-110%] mt-[-80%] w-full flex justify-between absolute">
        <button
          className="text-[#93aec5] lg:text-[40px] sm:text-[30px] ml-[-3%]"
          onClick={handlePrevious}
        >
          <FaAngleLeft />
        </button>
        <button
          className="text-[#93aec5] lg:text-[40px] sm:text-[30px] mr-[-3%]"
          onClick={handleNext}
        >
          <FaAngleRight  />
        </button>
      </div>
        </div>
      </section>
    </>
  );
};

export default Floorplans;
