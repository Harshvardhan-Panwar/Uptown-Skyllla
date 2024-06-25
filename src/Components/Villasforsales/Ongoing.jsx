import React, { useRef } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight   } from "react-icons/fa6";
import img1 from "../../assets/Rectangle 17.png";
import img2 from "../../assets/Rectangle 17 (1).png";
import img3 from "../../assets/Rectangle 17 (2).png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


const Ongoing = () => {

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

  const Ongoing_Data = [
    {
      id: 1,
      image: img1,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 2,
      image: img2,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 3,
      image: img3,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 4,
      image: img1,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 5,
      image: img2,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 6,
      image: img3,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 7,
      image: img1,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
    {
      id: 8,
      image: img2,
      info: "4BHK + SERVANT + LOUNGE",
      name: "Luxury Mannat Villa",
      location: "Airport Road, Zirakpur",
      bedrooms: "3 Bedrooms",
      baths: "Baths",
      guests: "12 Guests",
    },
  ];

  return (
    <>
      <section>
        <div className="slider-container mt-10 relative">
          <Slider ref={sliderRef} {...settings}>
            {Ongoing_Data.map((item) => (
              <div key={item.id} className="slide p-3">
                <div className="border-[1px] ">
                <img src={item.image} alt={`Plan ${item.type}`} className="m-auto w-full" />
                <div className="slide-info p-2">
                  <h3 className="text-[#515151] lg:text-[14px] text-[13px]">{item.info}</h3>
                  <p className="text-[#173F63] lg:text-[25px] text-[20px] font-bold">{item.name}</p>
                  <p className="text-[#7E7E7E] lg:text-[11px] text-[10px] flex mt-1"><IoLocationSharp className="text-[15px]" />{item.location}</p>
                  <div className="flex flex-wrap gap-1 items-center">
                  <p className="text-[#7E7E7E] lg:text-[14px] text-[12px] flex flex-wrap mt-2 gap-1 font-bold items-center"><MdOutlineBedroomParent className="lg:text-[15px]" />{item.bedrooms}</p>
                  <p className="text-[#7E7E7E] lg:text-[14px] text-[12px] ml-3 flex flex-wrap mt-2 gap-1 font-bold items-center"><FaBath className="lg:text-[15px]" />{item.baths}</p>
                  <p className="text-[#7E7E7E] lg:text-[14px] text-[12px] md:ml-0 ml-3 lg:ml-3 flex flex-wrap mt-2 gap-1 font-bold items-center"><FaPeopleGroup className="lg:text-[15px]"/>{item.guests}</p>
                  </div>
                  <button className="text-center border-[0.48px] text-[11px] py-2 px-4 border-[#173F63] text-[#040607] hover:bg-[#173F63] hover:text-white rounded-[4.5px] mt-5">
                  Explore now
                  </button>
                </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center xl:mt-[-30%] md:mt-[-30%] sm:mt-[-110%] mt-[-80%] w-full flex justify-between absolute">
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

export default Ongoing;
