import React from 'react'
import Logo from '../assets/cropped-Logo-White-1-1 (1) 3.png'
import FooterLogo from '../assets/Untitled__1_-removebg-preview 1.png'

const Footer = () => {
    return (
        <footer className='bg-[#0A2944] mt-[5%]'>
            <div className="w-full xl:container  flex flex-col gap-8 md:gap-0 justify-center sm:justify-between pt-16 pb-8  sm:pl-[20px] mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center  rounded-full">
                            <img src={Logo} width={190} alt="" />
                        </div>
                    </a>
                    <p className='text-white font-bold text-[11px] csm:text-[13.39px] w-full lg:w-[272px] mt-[22px] tracking-wider csm:tracking-wide px-2 sm:px-0'>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the
                        1500s, when an unknown</p>
                </div>
                <div className="flex justify-between sm:grid  text-sm gap-x-10 sm:gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3 px-4 sm:px-7 lg:px-0 flex-wrap cmd:flex-nowrap ">
                    <div className="space-y-3  mx-auto sm:mx-0 pl-4 ssm:pl-0">
                        <ul className="space-y-4  capitalize list-disc text-white tracking-wide text-base csm:text-lg sm:text-[22px] font-bold leading-10">
                            <li>
                                <a rel="noopener noreferrer" href="#">Home</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Product</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Amenities</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3  mx-auto sm:mx-0 pl-4 ssm:pl-0">
                        <ul className=" space-y-4 capitalize list-disc text-white tracking-wide text-base csm:text-lg sm:text-[22px] font-bold leading-10">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy policy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Help & supports</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of service</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col items-center mx-auto sm:mx-0 ">
                        <h6 className=" uppercase text-white font-medium  font-poppins text-[14px] text-center cmd:text-[15.81px] dark:text-gray-900 ">Sushma Service Partner</h6>
                        <div className='-mt-2'>
                            <img src={FooterLogo} alt="logo" />
                        </div>
                        <div className="flex justify-start space-x-[15px] relative top-5">
                            <span className='group rounded-full cursor-pointer duration-300'>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:fill-[#3D6B96]' fill-rule="evenodd" clip-rule="evenodd" d="M14.7138 0.0410156C6.9725 0.0410156 0.638672 6.37484 0.638672 14.1161C0.638672 21.8575 6.9725 28.1913 14.7138 28.1913C22.4552 28.1913 28.789 21.8575 28.789 14.1161C28.789 6.37484 22.4552 0.0410156 14.7138 0.0410156ZM22.6311 18.9545C22.6311 20.6259 21.2236 22.0334 19.5521 22.0334H9.8755C8.20407 22.0334 6.79656 20.6259 6.79656 18.9545V9.27784C6.79656 7.60642 8.20407 6.1989 9.8755 6.1989H19.5521C21.2236 6.1989 22.6311 7.60642 22.6311 9.27784V18.9545ZM20.5198 7.9583H20.8717V10.5974H18.2326V7.9583H20.5198ZM17.3529 14.1161C17.3529 15.5237 16.2093 16.7552 14.7138 16.7552C13.2184 16.7552 12.0747 15.6117 12.0747 14.1161C12.0747 13.5004 12.5146 11.4771 14.7138 11.4771C16.9131 11.4771 17.3529 13.5004 17.3529 14.1161ZM20.7837 12.3568H18.6725C18.8484 12.8846 19.0243 13.5883 19.0243 14.1161C19.0243 16.4914 17.089 18.4267 14.7138 18.4267C12.3387 18.4267 10.4033 16.4914 10.4033 14.1161C10.4033 13.5004 10.4913 12.8846 10.7552 12.3568H8.46798V18.7786C8.46798 19.6583 9.17174 20.274 9.96347 20.274H19.2883C20.168 20.274 20.7837 19.5703 20.7837 18.7786V12.3568Z" fill="white" />
                                </svg>
                            </span>
                            <span className='group rounded-full cursor-pointer duration-300'>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:fill-[#3D6B96]' fill-rule="evenodd" clip-rule="evenodd" d="M14.2187 0.0411377C6.47738 0.0411377 0.143555 6.37496 0.143555 14.1163C0.143555 21.8576 6.47738 28.1914 14.2187 28.1914C21.9601 28.1914 28.2939 21.8576 28.2939 14.1163C28.2939 6.37496 21.9601 0.0411377 14.2187 0.0411377ZM18.4413 13.5298H15.9781V21.7403H12.4593V13.5298H10.1135V11.1839H12.4593V9.77642C12.4593 8.48619 12.9285 6.49221 15.5089 6.49221H18.3239V9.18994H16.6819C16.4473 9.18994 15.9781 9.30724 15.9781 9.8937V11.0666H18.6758L18.4413 13.5298Z" fill="white" />
                                </svg>
                            </span>
                            <span className='group rounded-full cursor-pointer duration-300'>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:fill-[#3D6B96]' fill-rule="evenodd" clip-rule="evenodd" d="M14.7241 0.0411377C6.98275 0.0411377 0.648926 6.37496 0.648926 14.1163C0.648926 21.8576 6.98275 28.1914 14.7241 28.1914C22.4654 28.1914 28.7993 21.8576 28.7993 14.1163C28.7993 6.37496 22.4654 0.0411377 14.7241 0.0411377ZM20.9406 11.0667V11.4186C20.9406 15.5239 17.891 20.2155 12.1437 20.2155C10.3843 20.2155 8.74217 19.7465 7.45195 18.808C9.09405 19.0427 10.7361 18.5735 12.0264 17.5178C10.6189 17.5178 9.56322 16.5795 9.09405 15.4066C9.56322 15.5239 10.0324 15.5239 10.5016 15.4066C9.09405 15.172 8.03841 13.8817 8.03841 12.357C8.50759 12.5915 8.97675 12.7089 9.44593 12.7089C8.62488 12.1224 8.03841 11.184 8.03841 10.1284C8.03841 9.54193 8.1557 9.07275 8.50759 8.60359C10.0324 10.4803 12.261 11.6532 14.8414 11.8878C14.7241 11.5359 14.7241 11.3013 14.7241 11.0667C14.7241 9.30734 16.1316 8.01711 17.7738 8.01711C18.7121 8.01711 19.4159 8.36899 20.0023 8.95546C20.706 8.83817 22.3481 8.60359 22.3481 8.60359C21.879 9.30734 21.5271 10.5976 20.9406 11.0667Z" fill="white" />
                                </svg>
                            </span>
                            <span className='group rounded-full cursor-pointer duration-300'>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:fill-[#3D6B96]' fill-rule="evenodd" clip-rule="evenodd" d="M14.2285 0.0411377C6.48715 0.0411377 0.15332 6.37496 0.15332 14.1163C0.15332 21.8576 6.48715 28.1914 14.2285 28.1914C21.9698 28.1914 28.3037 21.8576 28.3037 14.1163C28.3037 6.37496 21.9698 0.0411377 14.2285 0.0411377ZM15.636 18.9547C14.4925 18.9547 13.4368 18.3388 13.0848 17.7231C13.0848 17.7231 12.4691 20.0103 12.3811 20.5381C11.9413 22.1216 10.6217 23.705 10.5338 23.881C10.4458 23.9689 10.2698 23.9689 10.2698 23.7929C10.2698 23.617 9.91797 21.5938 10.2698 19.9223L11.5894 14.3802C11.5894 14.3802 11.2375 13.7644 11.2375 12.7968C11.2375 11.3013 12.1172 10.1577 13.2608 10.1577C14.2285 10.1577 14.6684 10.8614 14.6684 11.6531C14.6684 12.6208 14.0525 13.9403 13.7886 15.2599C13.5247 16.3156 14.3165 17.1953 15.4601 17.1953C17.3954 17.1953 18.8029 14.7321 18.8029 11.8291C18.8029 9.62984 17.2195 7.95842 14.4925 7.95842C11.3255 7.95842 9.39015 10.2456 9.39015 12.7968C9.39015 13.6765 9.65406 14.2922 10.0939 14.82C10.2698 15.084 10.2698 15.1719 10.2698 15.3478L9.83 16.1396C9.74203 16.4035 9.56609 16.4915 9.30218 16.4035C7.89466 15.7878 7.1909 14.2922 7.1909 12.5328C7.1909 9.62984 9.65406 6.19902 14.6684 6.19902C18.627 6.19902 21.2661 9.01406 21.2661 12.005C21.2661 15.9637 18.9789 18.9547 15.636 18.9547Z" fill="white" />
                                </svg>
                            </span>
                            <span className='group rounded-full cursor-pointer duration-300'>
                                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='group-hover:fill-[#3D6B96]' fill-rule="evenodd" clip-rule="evenodd" d="M14.7343 0.0411377C6.993 0.0411377 0.65918 6.37496 0.65918 14.1163C0.65918 21.8576 6.993 28.1914 14.7343 28.1914C22.4757 28.1914 28.8095 21.8576 28.8095 14.1163C28.8095 6.37496 22.4757 0.0411377 14.7343 0.0411377ZM24.323 14.82C24.323 16.3156 24.1471 17.811 24.1471 17.811C24.1471 17.811 23.9711 19.0426 23.3554 19.6584C22.7851 20.2287 22.0992 20.3368 21.6724 20.4042C21.5724 20.4199 21.4868 20.4335 21.4201 20.4501C18.6929 20.626 14.7343 20.626 14.7343 20.626C14.7343 20.626 9.72007 20.626 8.22458 20.4501C8.14653 20.4345 8.05185 20.4217 7.94497 20.4072C7.4496 20.34 6.69218 20.2373 6.11331 19.6584C5.49752 19.1306 5.32158 17.811 5.32158 17.811C5.32158 17.811 5.14564 16.3156 5.14564 14.82V13.4125C5.14564 11.9171 5.32158 10.4216 5.32158 10.4216C5.32158 10.4216 5.49752 9.18999 6.11331 8.57421C6.70205 7.98547 7.35234 7.88925 7.8067 7.82202C7.89547 7.80889 7.97676 7.79686 8.04864 7.78248C10.6877 7.60654 14.7343 7.60654 14.7343 7.60654C14.7343 7.60654 18.781 7.60654 21.4201 7.78248C21.7719 7.78248 22.6516 7.87045 23.3554 8.57421C23.9711 9.10203 24.1471 10.4216 24.1471 10.4216C24.1471 10.4216 24.323 11.9171 24.323 13.4125V14.82ZM17.9013 13.9403L12.711 16.4915V11.3013L17.9013 13.9403Z" fill="white" />
                                </svg>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-lato text-[#131313] font-bold py-0.5 text-xs md:text-sm text-center bg-white dark:text-gray-600">© Copyright 2024 sushma. All Rights Reserved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Designed & developed by Adiyogi Technosoft Pvt. Ltd.</div>
        </footer>
    )
}

export default Footer
