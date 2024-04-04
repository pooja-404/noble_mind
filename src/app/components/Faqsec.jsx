"use client";
import React from "react";
import Image from "next/image"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
    
    return (
        <div className="relative ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${id === open ? "" : "rotate-180"
                }  h-5   transition-transform`}>
                <g opacity="0.7">
                    <path d="M12.0008 9.0252C11.8674 9.0252 11.7381 9.0502 11.6128 9.1002C11.4874 9.1502 11.3834 9.21686 11.3008 9.3002L6.70078 13.9002C6.51745 14.0835 6.42578 14.3169 6.42578 14.6002C6.42578 14.8835 6.51745 15.1169 6.70078 15.3002C6.88411 15.4835 7.11745 15.5752 7.40078 15.5752C7.68411 15.5752 7.91745 15.4835 8.10078 15.3002L12.0008 11.4002L15.9008 15.3002C16.0841 15.4835 16.3174 15.5752 16.6008 15.5752C16.8841 15.5752 17.1174 15.4835 17.3008 15.3002C17.4841 15.1169 17.5758 14.8835 17.5758 14.6002C17.5758 14.3169 17.4841 14.0835 17.3008 13.9002L12.7008 9.3002C12.6008 9.2002 12.4924 9.1292 12.3758 9.0872C12.2591 9.0452 12.1341 9.02453 12.0008 9.0252Z" fill="#131200" />
                </g>
            </svg>
        </div>
    );
}
export default function Faqsec() {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className="relative z-10 lg:pt-24 pb-10">
                <div className="max-w-[774px] mx-auto px-3">
                    <h2 className="text-[#000000]  font-Outfit  lg:text-[48px]  sm:text-5xl text-3xl font-light md:leading-[57.6px] pt-3 text-center">Frequently <span className="font-Montserrat font-semibold ">Asked Questions</span></h2>
                    <p className="text-[#131200] max-w-[491px]  font-Exo sm:text-base text-sm pt-4 font-normal md:leading-[24px] pb-9 opacity-[70%] text-center mx-auto">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat mi leo. Nibh nisl consequat metus.</p>
                    <Accordion
                        className={`border  mb-5 rounded-[10px] shadow-[0px_4px_32px_0px_#00000014] border-[#A854E933] after:w-full relative after:absolute after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0 overflow-hidden  ${open === 1 ? "border-[#A854E9] after:block" : "after:hidden"} py-4 px-5`} data-aos="fade-up-right"
                        open={open === 1 }
                        icon={<Icon id={1} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="font-Outfit sm:text-base text-sm  py-0 text-start font-medium text-[#000000] leading-[24px] border-0 "
                        >
                            What is Artificial Intelligence (AI)?
                        </AccordionHeader>
                        <AccordionBody className="font-Exo text-sm md:text-base text-[#131200] font-Exo  font-normal md:leading-[24px] max-w-[680px] opacity-[70%] pt-2 pb-0 ">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className={`border  mb-5 rounded-[10px] shadow-[0px_4px_32px_0px_#00000014] border-[#A854E933] after:w-full relative after:absolute after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0 overflow-hidden  ${open === 2 ? "border-[#A854E9] after:block" : "after:hidden"} py-4 px-5`} data-aos="fade-up-right"
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="font-Outfit sm:text-base text-sm  py-0 text-start font-medium text-[#000000] leading-[24px] border-0 "
                        >
                            {" "}
                            How can our company ensure data security with AI?
                        </AccordionHeader>
                        <AccordionBody className="font-Exo text-sm md:text-base text-[#131200] font-Exo  font-normal leading-[24px] max-w-[680px] opacity-[70%] pt-2 pb-0 ">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className={`border  mb-5 rounded-[10px] shadow-[0px_4px_32px_0px_#00000014] border-[#A854E933] after:w-full relative after:absolute after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0 overflow-hidden  ${open === 3 ? "border-[#A854E9] after:block" : "after:hidden"} py-4 px-5`} data-aos="fade-up-right"
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="font-Outfit sm:text-base text-sm py-0 text-start font-medium text-[#000000] leading-[24px] border-0 " >
                            {" "}
                            What types of AI technologies are relevant to our industry?
                        </AccordionHeader>
                        <AccordionBody className="font-Exo text-sm md:text-base text-[#131200] font-Exo  font-normal leading-[24px] max-w-[680px] opacity-[70%] pt-2 pb-0 ">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className={`border  mb-5 rounded-[10px] shadow-[0px_4px_32px_0px_#00000014] border-[#A854E933] after:w-full relative after:absolute after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0 overflow-hidden  ${open === 4 ? "border-[#A854E9] after:block" : "after:hidden"} py-4 px-5`} data-aos="fade-up-right"
                        open={open === 4}
                        icon={<Icon id={4} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="font-Outfit sm:text-base text-sm py-0 text-start font-medium text-[#000000] leading-[24px] border-0 "
                        >
                            How can our employees adapt to AI integration?
                        </AccordionHeader>
                        <AccordionBody className="font-Exo text-sm md:text-base text-[#131200] font-Exo  font-normal leading-[24px] max-w-[680px] opacity-[70%] pt-2 pb-0 ">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className={`border  mb-5 rounded-[10px] shadow-[0px_4px_32px_0px_#00000014] border-[#A854E933] after:w-full relative after:absolute after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0 overflow-hidden  ${open === 5 ? "border-[#A854E9] after:block" : "after:hidden"} py-4 px-5`} data-aos="fade-up-right"
                        open={open === 5}
                        icon={<Icon id={5} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className="font-Outfit sm:text-base text-sm py-0 text-start font-medium text-[#000000] leading-[24px] border-0 "
                        >
                            How can our company ensure data security with AI?
                        </AccordionHeader>
                        <AccordionBody className="font-Exo text-sm md:text-base text-[#131200] font-Exo  font-normal leading-[24px] max-w-[680px] opacity-[70%] pt-2 pb-0 ">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                </div>
                <Image
                    src="/assets/images/lastsecondellipse.png"
                    alt="logo" width={70.97}
                    height={95.49} className="object-contain absolute bottom-48 right-7 lg:block hidden" />
                <Image
                    src="/assets/images/accellipse.png"
                    alt="logo" width={70.97}
                    height={95.49} className="object-contain absolute top-20 left-7 lg:block hidden" />
            </div>
        </>
    )
}