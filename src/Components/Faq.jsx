import React, { useState } from "react";
import FaqChild from "./FaqChild";
import faq from "../assets/Faq.png";

const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Define the faqData array containing FAQ items with IDs
  const faqData = [
    {
      id: 1,
      heading:
        "What all property types are there in Zirakpur Project?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 2,
      heading:
        "What are the possession status and possession date of Uptown skylla?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 3,
      heading: "What are the Best offers in Uptown skylla ?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 4,
      heading:
        "Who is the Best Sushma Service Partner dealing in this Uptown skylla Apartments ?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 5,
      heading: "What is the location of Uptown skylla?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 6,
      heading: "What is the price of 4 bhk Flat in Uptown skylla?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 7,
      heading: "Where Can i Check Uptown skylla Price ?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    {
      id: 8,
      heading: "Is Uptown skylla Rera Approved ?",
      info: "Uptown skylla offers ultra luxury large size 3 & 4 BHK  Apartments and Low rise Independent  Villa Floor.",
    },
    // Add other FAQ items here
  ];

  return (
    <>
      <section id="faq" className="pt-[3%]">
        <div>
          <div>
            <p className="text-center mt-[5%] font-semibold md:text-[62px] text-[30px] text-[#173F63]">
              FAQs
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-0 gap-10 mt-[5%]">
          <div className="lg:w-[40%] w-full lg:m-0 m-[10%] overflow-hidden">
            <img src={faq} alt="" className="md:h-full w-full" />
          </div>

          <div className="lg:w-[60%] w-full">
            <div className="ms-10 me-10">
              <div>
                {faqData.map((faq) => (
                  <div
                    className="flex flex-wrap justify-between mt-[10px]"
                    key={faq.id}
                  >
                    <FaqChild
                      id={faq.id}
                      heading={faq.heading}
                      info={faq.info}
                      isOpen={openFaqId === faq.id}
                      toggleFaq={toggleFaq}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
