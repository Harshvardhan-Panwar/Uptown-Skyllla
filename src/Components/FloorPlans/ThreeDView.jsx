import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { LuBedDouble } from "react-icons/lu";

// images import to insert in data
import livingroom from "../../assets/livingroom.png";

const ThreeDView = () => {
  const sliderRef = useRef(null);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleSlideChange = (index) => {
    sliderRef.current.slickGoTo(index);
    setSelectedButtonIndex(index);
  };

  const handleAfterChange = (index) => {
    setSelectedButtonIndex(index);
  };

  useEffect(() => {
    // Set the default slide to Living Room when component mounts
    handleSlideChange(0);
  }, []);

  var settings = {
    infinite: true,
    fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    afterChange: handleAfterChange,
  };

  const ThreeD_Data = [
    {
      id: 1,
      image: livingroom,
      type: "LivingRoom",
      heading:"Largest Main Door In The Segment",
      DoorSegment: "8” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },

    {
      id: 2,
      image: livingroom,
      type: "Outdoor Living",
      heading:"Lorem ipsum dolor sit amet consecte",
      DoorSegment: "7” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },
    {
      id: 3,
      image: livingroom,
      type: "Kitchen",
      heading:"tur adipisicing elit. Consequuntur,",
      DoorSegment: "6” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },

    {
      id: 4,
      image: livingroom,
      type: "Dining",
      heading:" deserunt id distinctio ea optio",
      DoorSegment: "9” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },

    {
      id: 5,
      image: livingroom,
      type: "Master Bedroom",
      heading:" doloremque ut quisquam suscipit sequi",
      DoorSegment: "5” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },

    {
      id: 6,
      image: livingroom,
      type: "Guest room",
      heading:"dicta dolor iusto facilis officia rem v",
      DoorSegment: "3” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },

    {
      id: 7,
      image: livingroom,
      type: "Kids Bedroom",
      heading:" oluptate  sapiente eveniet asperiores!",
      DoorSegment: "5” Feet Height",
      flatHight: "10’5” (6 Inches More Than Usual)",
      Tiles:
        "800 x 800 mm Double Charged Vitrified, Designer Tiles With Spacer Joint",
    },
  ];

  return (
    <>
    <section>
      <Slider ref={sliderRef} {...settings}>
        {ThreeD_Data.map((data) => (
          <div key={data.id}>
            <div className="md:w-[90%] w-[80%] m-auto">
              <div className="text-[#3D6B96] lg:text-[40px] sm:text-[30px] text-[25px] font-bold">
                <h1>{data.type}</h1>
              </div>
              <div>
                <p className=" lg:text-[20px] sm:text-[18px] text-[15px] lg:mt-5 mt-2 text-[#5E5D59] font-semibold">
                  {data.heading} 
                </p>
                <p className=" lg:text-[18px] sm:text-[15px] text-[14px] text-[#3D6B96]">
                  {data.DoorSegment}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:mt-[-30px] mt-5 items-center xl:p-5 md:p-10 pt-0 justify-center m-auto w-[90%]">
              <div className="lg:w-[60%] w-[70%] lg:mt-[5%] justify-center flex">
                <img className="w-full" src={data.image} alt={data.type} />
              </div>
              <div className="ps-7 md:w-[30%] w-[100%]">
                <div className=" m-auto lg:mt-5">
                <h1 className="text-[#3D6B96] mb-5 xl:text-[40px] lg:text-[20px] text-[15px] ">
                BROWSER FROM HERE
              </h1>
              <div className="md:block sm:flex flex-wrap w-full sm:gap-2">
                  {ThreeD_Data.map((data, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`flex border border-[#3D6B96] sm:w-auto w-full mt-1 items-center justify-center font-semibold lg:text-[15px] text-[13px] p-1 gap-2 rounded-[30px] focus:bg-[#3D6B96] focus:text-white ${
                        selectedButtonIndex === index
                          ? "bg-[#3D6B96] text-white"
                          : "text-[#3D6B96] bg-white"
                      }`}
                    >
                      <LuBedDouble />
                      {data.type}
                    </button>
                    
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center lg:mt-[-20%] md:mt-[-30%] sm:mt-[-80%] max-sm:mt-[-100%] w-full flex justify-center xl:gap-[85%] lg:gap-[80%] sm:gap-[85%] gap-[80%] px-5 absolute">
        <button
          className="text-[#3D6B96] border-[0.95px] border-[#3D6B96] sm:text-[15px] text-[11px] rounded-full p-3"
          onClick={handlePrevious}
        >
          <CgArrowLongLeft />
        </button>
        <button
          className="text-[#3D6B96] border-[0.95px] border-[#3D6B96] sm:text-[15px] text-[11px] rounded-full p-3"
          onClick={handleNext}
        >
          <CgArrowLongRight />
        </button>
      </div>
      </section>
    </>
  );
};

export default ThreeDView;
