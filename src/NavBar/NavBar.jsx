import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "/src/assets/cropped-Logo-White-1.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="bg-cover bg-center bg-[url('/src/assets/Rectangle%202.png')]"
      >
        <div className="h-full w-[100%] bg-[rgba(0,0,0,0.5)]">
          <div>
            <nav
              className={`top-0 z-10 duration-300  bg-tranparent ${
                scrolled ? "fixed z-[99] top-0 left-0 w-full bg-[#132742]" : ""
              }`}
            >
              <div className="max-w-13xl mx-auto px-4">
                <div className="flex  items-center justify-between mx-auto p-4">
                  <div className="flex items-left justify-between">
                    <div>
                      <a href="#home">
                        <img
                          src={logo}
                          alt="Logo"
                          className="sm:h-[60px] h-[40px] w-full md:pl-10"
                        />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 sm:w-10 sm:h-10 h-5 w-5 justify-center text-sm text-white rounded-lg lg:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    <div>
                      <TiThMenu className="w-10 h-10" aria-hidden="true" />
                    </div>
                  </button>
                  <div
                    className={`${
                      isOpen ? "block" : "hidden"
                    } w-full lg:block lg:w-auto absolute lg:top-0 ${
                      scrolled ? "top-[80%]" : "top-[15%]"
                    }  left-0 lg:relative`}
                    id="navbar-default"
                  >
                    <ul className="font-bold xl:text-[16px] text-[13px] font-lato text-center lg:gap-0 gap-4 flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-[rgba(0,0,0,0.6)] md:leading-[27.24px] leading-4 lg:flex-row xl:space-x-7 md:space-x-3 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-transparent ">
                      <a
                        className="relative text-white group"
                        href="#aboutus"
                        onClick={() => setIsOpen(false)}
                      >
                        ABOUT US
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#product"
                        onClick={() => setIsOpen(false)}
                      >
                        PRODUCTS
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#locationmap"
                        onClick={() => setIsOpen(false)}
                      >
                        LOCATION MAP
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#floorplans"
                        onClick={() => setIsOpen(false)}
                      >
                        FLOOR PLANS
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#price"
                        onClick={() => setIsOpen(false)}
                      >
                        PRICE
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#aminities"
                        onClick={() => setIsOpen(false)}
                      >
                        AMENITIES
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#gallery"
                        onClick={() => setIsOpen(false)}
                      >
                        GALLERY
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#faq"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQ
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                      <a
                        className="relative text-white group"
                        href="#contactus"
                        onClick={() => setIsOpen(false)}
                      >
                        CONTACT US
                        <div className="w-0 hidden lg:block duration-200 group-hover:w-[100%] absolute  py-[2px] rounded group-hover:bg-white"></div>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="p-[13%]">
            <p className="text-center text-white p-auto font-medium xl:text-[60px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[15px] m-auto font-lato xl:leading-[60px] md:leading-[30px] sm:leading-[25px] leading-[20px] ">
              MAKES YOUR LIFE MEMORABLE CHOOSE OUR LUXURY VILLAS
            </p>
            <p className="text-center text-white pt-[3%] p-[9%] font-medium xl:text-[20px] lg:text-[15px] sm:text-[12px] text-[10px] m-auto font-lato xl:leading-[35px] md:leading-[20px] sm:leading-[20px] ">
              Lorem Ipsum Is Smply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
              Ever Since
            </p>
          </div>
          <p className="text-center text-[white] lg:text-[20px] sm:text-[12px] text-[8px]">
            Rera No - PBRERA-SAS81-PR0693
          </p>
        </div>
      </section>
    </>
  );
};

export default NavBar;
