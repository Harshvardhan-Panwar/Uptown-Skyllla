import React from "react";
import img1 from "../../assets/Kitchen(1).jpg";
import img2 from "../../assets/Kitchen(2).jpg";
import img3 from "../../assets/Kitchen(3).jpg";
import img4 from "../../assets/Kitchen(4).jpg";
import img5 from "../../assets/Kitchen(5).jpg";
import img6 from "../../assets/Kitchen(6).jpg";
import img7 from "../../assets/Kitchen(7).jpg";


function KitchenPhotos() {
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
                <img className="w-full h-full" src={img2} alt="" />
              </div>
              <div className="w-full lg:h-[150px] group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img3} alt="" />
              </div>
              <div className="w-full lg:h-[150px] relative group mt-[1px] md:mt-2">
                <img className="w-full h-full" src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:h-[200px] gap-[1px] md:gap-2 mt-[1px] md:mt-2">
          <div className="w-[35%] group">
            <img className="w-full h-full" src={img5} alt="" />
          </div>
          <div className="w-[65%] flex gap-[1px] md:gap-2">
            <div className="w-1/2 group">
              <img className="w-full h-full" src={img6} alt="" />
            </div>
            <div className="w-1/2 group">
              <img className="w-full h-full" src={img7} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KitchenPhotos;
