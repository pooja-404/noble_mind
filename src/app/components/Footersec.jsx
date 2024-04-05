
"use client";
import Image from "next/image"
import React from 'react'
import { FooterFacebook, FooterInsta, FooterTwiter, FooterLinkdin } from "./Icons"
export default function Footersec() {
    const Dates = new Date()
    const year = Dates.getFullYear()
    return (
        <div className="bg-bg_footer  bg-cover xl:bg-BgSize bg-no-repeat ">
            <div className="max-w-[1140px] mx-auto px-3 lg:pb-16 pb-9 pt-32">
                <div className="flex flex-wrap flex-row -mx-3">
                    <div className="lg:w-8/12 w-full px-3"data-aos="fade-right">
                        <Image
                            src="/assets/images/footerlogo.webp"
                            alt="logo" width={241}
                            height={42} className="object-contain cursor-pointer" />
                        <p className="font-Exo text-base font-normal leading-[24px] text-white pt-7">Follow Us</p>
                        <div className="flex gap-3 pt-5">
                            <a href="https://www.facebook.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#A854E9] transition-all ease-linear duration-500 rounded-[50px]"><FooterFacebook />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#A854E9] transition-all ease-linear duration-500 rounded-[50px]"><FooterInsta />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#A854E9] transition-all ease-linear duration-500 rounded-[50px]"><FooterTwiter />
                            </a>
                            <a href="https://in.linkedin.com/" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#A854E9] transition-all ease-linear duration-500 rounded-[50px]"><FooterLinkdin />
                            </a>
                        </div>
                    </div>
                    <div className='lg:w-4/12 w-full px-3 pt-7 lg:pt-0 lg:flex justify-end flex-col'data-aos="fade-left">
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='w-1/2 px-3  lg:flex justify-end flex-col items-end'>
                                <ul>
                                    <li className=" font-Outfit  font-semibold sm:text-base text-sm md:leading-[24px] text-white">Maine</li>
                                    <li className='lg:pt-4 pt-2'><a href="#home" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>Home</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#about" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>About Us</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#service" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>services</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#choose" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>Why Choose Us</a></li>
                                </ul>

                            </div>
                            <div className='w-1/2 px-3  lg:flex justify-end flex-col items-end '>
                                <ul>
                                    <li className=" font-Outfit  font-semibold sm:text-base text-sm leading-[24px] text-white">Legal</li>
                                    <li className='lg:pt-4 pt-2'><a href="#choose" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] text-nowrap'>Term & Conduction</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#home" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>Privacy Policy</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#service" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>Contact</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="tel:7404215521" className='font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] opacity-[70%] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#A854E9] '>(629) 555-0129</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-[#FFFFFF4D] w-full  border'></div>
            <p className=' font-Exo text-sm font-normal leading-[24px] text-white opacity-[70%]  text-center py-5'>© Copyright {year} Noble Mind | All rights reserved. </p>
        </div>
    )
}