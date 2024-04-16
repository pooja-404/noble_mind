"use client";
import Image from "next/image"
import { useState } from "react";
import Button from "./Button";
import { NavLogo } from "./Icons";
export default function Navsec() {
    const [show, setshow] = useState(false);
    function view() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    function hide() {
        setshow(false);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    return (
        <>
            <nav className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 ">
                <div className='flex py-4 justify-between'>
                    <a href="#"><NavLogo /></a>
                    <ul
                        className={`gap-5 flex mobileView  items-center ${show ? "right-0" : "right-[-100%]"}`}
                    >
                        <li>
                            <a
                                href="#home" onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] hover:opacity-75 duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] duration-300 hover:opacity-75"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#service"
                                onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] duration-300 hover:opacity-75"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#choose"
                                onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] duration-300 hover:opacity-75"
                            >
                                Why Choose Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blogs"
                                onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] duration-300 hover:opacity-75"
                            >
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#faq"
                                onClick={hide}
                                className=" text-[#5A594D] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:text-[#131200] duration-300 hover:opacity-75"
                            >
                                FAQ
                            </a>
                        </li>
                        <a href="#service">
                            <Button name='bg-gradient lg:ml-7' text='Contact Us' />
                        </a>
                    </ul>
                    <label
                        className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
                        onClick={view}
                    >
                        <span
                            className={`${show
                                ? "rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                                : " "
                                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "hidden" : ""
                                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "rotate-[-50deg] translate-y-[-50%]" : ""
                                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                    </label>
                </div>
            </nav>
        </>
    )
}