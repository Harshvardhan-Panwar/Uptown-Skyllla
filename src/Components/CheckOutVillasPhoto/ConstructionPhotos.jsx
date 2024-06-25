import React from "react";
import img1 from "../../assets/Constructionupdates(1).jpg";


function ConstructionPhotos() {
  return (
    <>
      <section>
        <div className="w-full lg:h-[466px] flex gap-[1px] md:gap-2">
          <div className="w-3/4 group">
            <img className="w-full h-full" src={img1} alt="Interiors" />
          </div>
          <div className="w-1/4">
            <div className=" gap-[1px] md:gap-2">
              <div className="w-full lg:h-[150px] group">
                <img className="w-full h-full" src={img1} alt="" />
              </div>
              <div className="w-full lg:h-[150px] group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img1} alt="" />
              </div>
              <div className="w-full lg:h-[150px] relative group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:h-[200px] gap-[1px] md:gap-2 mt-[1px] md:mt-2">
          <div className="w-[35%] group">
            <img className="w-full h-full" src={img1} alt="" />
          </div>
          <div className="w-[65%] flex gap-[1px] md:gap-2">
            <div className="w-1/2 group">
              <img className="w-full h-full" src={img1} alt="" />
            </div>
            <div className="w-1/2 group">
              <img className="w-full h-full" src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ConstructionPhotos;
