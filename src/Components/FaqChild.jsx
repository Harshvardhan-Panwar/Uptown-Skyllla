import React, { useState } from "react";
import { BiSolidPlusSquare } from "react-icons/bi";
import { BiSolidMinusSquare } from "react-icons/bi";

const FaqChild = ({ id, heading, info, isOpen, toggleFaq }) => {
  const [isPlusClicked, setIsPlusClicked] = useState(true);

  const handleClick = () => {
    setIsPlusClicked(!isPlusClicked);
  };

  return (
    <div className="accordion-item w-[100%] transition-transform duration-300 hover:scale-105">
      <label
        onClick={() => {
          toggleFaq(id);
          handleClick();
        }}
        className={`accordion-header md:text-[20px] text-[15px] cursor-pointer transition-all duration-300 ease-in-out flex items-center p-5 font-bold rtl:text-right text-[#173F63] border-[0.5px] border-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-white gap-3 shadow-xl`}
      >
        <div>
          {isPlusClicked ? <BiSolidPlusSquare /> : <BiSolidMinusSquare />}
        </div>

        <span className="font-bold">{heading}</span>
      </label>
      <div
        className={`accordion-body ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
        aria-labelledby="accordion-item"
      >
        <div className="p-4 border rounded-b-lg border-white">
          <p className="mb-2 text-[#5A5454] md:text-[19px] font-medium text-[12px] ms-5 ">
            {info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqChild;
