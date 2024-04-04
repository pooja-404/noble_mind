"use client";
import Image from "next/image"
import { useState } from "react";
import Button from "./Button";
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
            <nav className=" max-w-[1140px] mx-auto px-3 ">
                <div className='flex py-8   justify-between'>
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo" width={221.86}
                        height={38.43} className="object-contain" />
                    <ul
                        className={`gap-5 flex mobileView items-center ${show ? "right-0" : "right-[-100%]"}`}
                    >
                        <li>
                            <a
                                href="#home" onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Marketplace"
                                onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#nexchat"
                                onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Why Choose Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#nexchat"
                                onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#nexchat"
                                onClick={hide}
                                className=" text-[#131200] opacity-[70%] font-Exo text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                FAQ
                            </a>
                        </li>
                        <Button name='bg-gradient lg:ml-7' text='Contact Us' />
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