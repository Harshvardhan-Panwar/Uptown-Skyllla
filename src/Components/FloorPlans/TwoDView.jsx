import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import img1980_east_1 from "../../assets/1980-East-1.webp";
import img1980_east_2 from "../../assets/1980-East-2.webp";
import img1980_west_1 from "../../assets/1980-West-1.webp";
import img1980_west_2 from "../../assets/1980-West-2.webp";
import img2220_east_1 from "../../assets/2220-East-1.webp";
import img2220_east_2 from "../../assets/2220-East-2.webp";
import img1 from "../../assets/image 9.png";
// image file import when you add image

const TwoDView = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
    updatetrue(false);
  };

  const handleSlideChange = (index) => {
    sliderRef.current.slickGoTo(index);
    updatetrue(false);
  };

  var settings = {
    infinite: true,
    fade: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
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

  const [filters, setFilters] = useState({
    direction: "",
    sqft: "",
    type: "",
  });

  // Handler to update filter
  const handleFilterChange = (filterName, value) => {
    updatetrue(true);
    setFilters({ ...filters, [filterName]: value });
  };

  // Filtered data based on selected filters
  const filteredData = TwoD_Data.filter((item) => {
    const { direction, sqft, type } = filters;
    return (
      (!direction || item.direction === direction) &&
      (!sqft || item.sqft === sqft) &&
      (!type || item.type === type)
    );
  });
  const [maketrue, updatetrue] = useState(true);
  const [threeSqft, setThreeSwft] = useState("1980");
  return (
    <>
      <section>
        <Slider ref={sliderRef} {...settings}>
          {(maketrue === true ? filteredData : TwoD_Data).map((data) => (
            <div key={data.id}>
              <div className="flex px-9 md:justify-start justify-center">
                <div>
                  <p className="sm:text-[15px] text-[10px] lg:mt-5 mt-3 text-[#7F7F79] md:text-start text-center font-semibold lg:tracking-[10px] tracking-[5px]">
                    EXCLUSIVE 3BHK
                  </p>
                  <p className="sm:text-[20px] md:text-[25px] text-[15px] lg:mt-3 mt-2 md:text-start text-center text-[#3D6B96] font-extrabold">
                    {data.bhk} {data.sqft} ( {data.direction} | {data.type} )
                  </p>
                  <p className="sm:text-[21px] text-[15px] mt-2 text-[#807F79] md:text-start text-center">
                    Where comfort meets happiness, everyday!
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap flex-col m-auto items-center w-[90%] mt-10">
                <div className="w-[100%] m-auto flex ps-9 justify-center">
                  <div className="inline-flex sm:w-[40%] w-full md:ps-9 m-atuo md:justify-start justify-center ">
                    <div className="border-[2px] m-auto flex lg:w-[50%] rounded-[13px] border-[#3D6B96] lg:mt-5 mt-3 ">
                      <button
                        onClick={() => handleFilterChange("direction", "East")}
                        className={`xl:text-[15px]  w-[50%]  ${
                          data.direction === "East"
                            ? "text-white bg-[#3D6B96] rounded-[10px]"
                            : "bg-white text-[#3D6B96] rounded-[13px]"
                        } font-bold xl:py-2 xl:px-1 py-1 px-6`}
                      >
                        East
                      </button>
                      <button
                        onClick={() => handleFilterChange("direction", "West")}
                        className={` xl:text-[15px]  w-[50%]  ${
                          data.direction === "West"
                            ? "text-white bg-[#3D6B96] rounded-[10px]"
                            : "bg-white text-[#3D6B96] rounded-[13px]"
                        } font-bold xl:py-2 xl:px-1 py-1 px-6 `}
                      >
                        West
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[60%] md:w-[50%] w-[100%] justify-center flex">
                  <img
                    className="w-[100%] xl:h-full lg:h-[500px] items-center"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="lg:w-[80%] md:w-[80%] w-[100%] mt-1 ">
                  <div className=" m-auto w-fit md:mt-[7%] mt-[5%]">
                    <div className=" gap-6 flex flex-wrap  md:justify-start justify-center ">
                      <div className="font-semibold text-[30px] border-[#3D6B96] border-r-[1px] lg:pr-6 pr-[14.5px] ">
                        <h1 className="border-b border-[#3D6B96] text-[15px] lg:text-[20px] text-[#3D6B96]">
                          Rera Carpet Area
                        </h1>
                        <p className="xl:text-[25px] text-[20px] text-[rgba(68,67,66,1)]">
                          {data.carpetarea}
                        </p>
                      </div>
                      <div className="font-semibold text-[30px] border-[#3D6B96] border-r-[1px] lg:pr-6 pr-[14.5px] ">
                        <h1 className="border-b border-[#3D6B96] text-[15px] lg:text-[20px] text-[#3D6B96]">
                          Balcony Area
                        </h1>
                        <p className="xl:text-[25px] text-[20px] text-[rgba(68,67,66,1)]">
                          {data.balconyarea}
                        </p>
                      </div>
                      <div className="font-semibold text-[30px] border-[#3D6B96] border-r-[1px] xl:pr-3 lg:pr-3 pr-[7px]">
                        <h1 className="border-b border-[#3D6B96] text-[15px] lg:text-[20px]  text-[#3D6B96]">
                          External Wall Area
                        </h1>
                        <p className="xl:text-[25px] text-[20px] text-[rgba(68,67,66,1)]">
                          {data.wallarea}
                        </p>
                      </div>
                      <div className="font-semibold text-[18px] md:border-0 border-[#3D6B96] border-r-[1px] pr-[7px]">
                        <h1 className="border-b border-[#3D6B96] text-[15px] xl:text-[20px] text-[#3D6B96]">
                          Common Area
                        </h1>
                        <p className="xl:text-[25px] text-[20px] text-[rgba(68,67,66,1)]">
                          {data.commonarea}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[98%] ml-auto mr-2 mt-3 flex">
                <h1 className="text-[#6D6868] xl:text-[50px] lg:text-[35px] md:text-[27px] text-[17px] w-[65%]">
                  BROWSER FROM HERE
                </h1>
                <div className="w-full items-center xl:py-7 py-4">
                  <hr className="lg:mt-3 border-black border-[1px]" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center xl:mt-[-30%] md:mt-[-40%] sm:mt-[-70%] max-sm:mt-[-110%] w-full  m-auto flex justify-center md:gap-[600px] sm:gap-[500px] gap-[240px] px-5 absolute">
          <button
            className="text-[#3D6B96] border-[1px] border-[#3D6B96] sm:text-[15px] text-[11px] rounded-full p-3"
            onClick={handlePrevious}
          >
            <CgArrowLongLeft />
          </button>
          <button
            className="text-[#3D6B96] border-[1px] border-[#3D6B96] sm:text-[15px] text-[11px] rounded-full p-3"
            onClick={handleNext}
          >
            <CgArrowLongRight />
          </button>
        </div>
        <div className="w-[100%] m-auto mt-4 font-semibold text-[25px] text-[#444342]">
          <div className="w-full flex flex-wrap">
            <button
              onClick={() => {
                setThreeSwft("1980");
              }}
              className={`sm:w-fit w-full text-[18px] py-2 px-[50px] mt-3 sm:rounded-[0] rounded-full   ${
                threeSqft == "1980"
                  ? "bg-[rgba(23,63,99,1)] text-white"
                  : "text-[#3D6B96] bg-[rgba(61,107,150,0.2)]"
              }  `}
            >
              <span>3 BHK 1980 Sq.Ft</span>
            </button>
            <button
              onClick={() => {
                setThreeSwft("2220");
              }}
              className={`sm:w-fit w-full text-[18px] py-2 px-[50px] mt-3 sm:rounded-[0] rounded-full ${
                threeSqft == "2220"
                  ? "bg-[rgba(23,63,99,1)] text-white"
                  : "text-[#3D6B96] bg-[rgba(61,107,150,0.2)]"
              }  `}
            >
              <span>3 BHK 2220 sq.ft</span>
            </button>
            <button
              onClick={() => {
                setThreeSwft("4440");
              }}
              className={`sm:w-fit w-full text-[18px] py-2 px-[50px] mt-3 sm:rounded-[0] rounded-full ${
                threeSqft == "4440"
                  ? "bg-[rgba(23,63,99,1)] text-white"
                  : "text-[#3D6B96] bg-[rgba(61,107,150,0.2)]"
              }  `}
            >
              <span>3 BHK 4440 Sq.Ft</span>
            </button>
          </div>
        </div>
        <div className="w-[95%] m-auto flex flex-wrap gap-5 mt-5">
          <button
            onClick={() => handleSlideChange(0)}
            className="border-2 overflow-hidden rounded-lg flex xl:w-[20%] lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               1980 Sq.Ft EAST TYPE-1
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(1)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%]  sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               1980 Sq.Ft EAST TYPE-2
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(2)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               1980 Sq.Ft WEST TYPE-1
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(3)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               1980 Sq.Ft WEST TYPE-2
            </div>
          </button>
        </div>
        <div className="w-[95%] m-auto mt-4 font-semibold text-[25px] text-[#444342]"></div>
        <div className="w-[95%] m-auto flex flex-wrap gap-4 mt-5">
          <button
            onClick={() => handleSlideChange(4)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               2220 Sq.Ft EAST TYPE-1
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(5)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               2220 Sq.Ft EAST TYPE-2
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(8)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               4440 Sq.Ft EAST TYPE-1
            </div>
          </button>
          <button
            onClick={() => handleSlideChange(9)}
            className="border-2 rounded-lg flex xl:w-[20%] overflow-hidden lg:w-[23%] sm:w-[48%] w-[98%] lg:text-[18px] sm:text-[15px] text-[13px] items-center hover:shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <div className="p-1 h-full bg-[#3D6B96]"></div>
            <img src={img1} alt="" className="xl:w-[30%] w-[25%] flex" />
            <div className="text-start text-[#858585]">
              <span className="font-bold text-start text-[#444342]">
                3 BHK{" "}
              </span>
               4440 Sq.Ft West TYPE-1
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default TwoDView;
