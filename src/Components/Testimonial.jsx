import React from 'react'
import img1 from "../assets/Dikshamukharji.png"
import img2 from "../assets/RaniRathore.png"
const Testimonial = () => {
  return (
    <>
    <section className="bg-cover bg-center bg-[url('/src/assets/Group%202429.png')] mt-[10%]">
    <div className=''>
        <p className='text-white sm:text-[50px] text-[40px] font-semibold pt-10 sm:ml-14 ml-10'>Testimonials</p>
    </div>
    <div className="w-full flex flex-wrap p-10 justify-between">
    <div className=" flex-wrap md:w-[49%] lg:h-full sm:h-[130px] w-[100%] mt-5 m-auto flex border-2 bg-white rounded-[10px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="md:w-[29%] w-[100%] h-auto flex justify-center">
        <img src={img1} alt="" className="md:h-[170px] h-[120px] w-full" />
      </div>
      <div className="md:w-[69%] w-full lg:m-auto p-1">
        <p className="text-[rgba(101,98,98,1)] lg:text-[23.43px] font-bold">
        Diksha mukharji 
        </p>
        <hr className="w-[90%] border-[rgba(119,113,113,1)]" />
        <p className="text-[rgba(73,62,62,1)] text-[13.28px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown
        </p>
      </div>
    </div>

    <div className=" flex-wrap md:w-[49%] lg:h-full sm:h-[130px] w-[100%] mt-5 m-auto flex border-2 bg-white rounded-[10px] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="md:w-[29%] w-[100%] h-auto flex justify-center">
        <img src={img2} alt=""className="md:h-[170px] h-[120px] w-full" />
      </div>
      <div className="md:w-[69%] w-full lg:m-auto p-1">
        <p className="text-[rgba(101,98,98,1)] lg:text-[23.43px] font-bold">
        Rani Rathore 
        </p>
        <hr className="w-[90%] border-[rgba(119,113,113,1)]" />
        <p className="text-[rgba(73,62,62,1)] text-[13.28px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown
        </p>
      </div>
    </div>
  </div>
    </section>
    </>
    
  )
}

export default Testimonial