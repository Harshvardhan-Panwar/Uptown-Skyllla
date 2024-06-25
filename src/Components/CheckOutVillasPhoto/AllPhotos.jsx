import React from "react";
import img1 from "../../assets/Interior(1).jpg";
import img2 from "../../assets/Kitchen(1).jpg";
import img3 from "../../assets/Bedroom(1).jpg";
import img4 from "../../assets/Drawingroom(1).jpg";
import img5 from "../../assets/Balcony(1).jpg";
import img6 from "../../assets/Bathroom(1).jpg";
import img7 from "../../assets/Constructionupdates(1).jpg";


function AllPhotos() {
  return (
    <>
      <section>
        <div className="w-full lg:h-[466px] flex gap-[1px] md:gap-2">
          <div className="w-3/4 relative group">
            <img className="w-full h-full" src={img1} alt="Interiors" />
            <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[50px] text-[25px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              INTERIORS
            </button>
          </div>
          <div className="w-1/4">
            <div className=" gap-[1px] md:gap-2">
              <div className="w-full lg:h-[150px] relative group">
                <img className="w-full h-full" src={img2} alt="Kitchen" />
                <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  KITCHEN
                </button>
              </div>
              <div className="w-full lg:h-[150px] relative group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img3} alt="Bedroom" />
                <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  BEDROOM
                </button>
              </div>
              <div className="w-full lg:h-[150px] relative group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img4} alt="Bedroom" />
                <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  DRAWING ROOM
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:h-[200px] gap-[1px] md:gap-2 mt-[1px] md:mt-2">
          <div className="w-[35%] relative group">
            <img className="w-full h-full" src={img5} alt="Drawing Room" />
            <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              BALCONY
            </button>
          </div>
          <div className="w-[65%] flex gap-[1px] md:gap-2">
            <div className="w-1/2 relative group">
              <img className="w-full h-full" src={img6} alt="Balcony" />
              <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                BATHROOM
              </button>
            </div>
            <div className="w-1/2 relative group">
              <img className="w-full h-full" src={img7} alt="Bathroom" />
              <button className="absolute inset-0 bg-[rgba(0,0,0,0.5)] sm:text-[20px] text-[10px] font-semibold text-white text-center flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CONSTRUCTION UPDATE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllPhotos;
