"use client";
import Image from "next/image"
import Button from "./Button";
export default function Mission() {
    return(
        <div className="relative z-1">
            <div className="max-w-[1140px] container mx-auto px-3 md:my-16 my-10 lg:my-24" id="about">
                <div className="flex flex-wrap flex-row -mx-3">
                    <div className='lg:w-1/2 w-full px-3 lg:pr-10 max-lg:flex justify-center' data-aos="fade-right">
                        <Image
                            src="/assets/images/missionimg.png"
                            alt="logo" width={554}
                            height={567} className="object-contain rounded-[0px_50px_0px_0px] " />
                    </div>
                    <div className="lg:w-1/2 w-full px-3  pt-7 lg:pt-0"data-aos="fade-left">
                        <div className=" flex gap-2 items-center max-lg:justify-center">
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z" fill="#00EAEC" />
                                <path d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z" fill="url(#paint0_linear_101_304)" />
                                <path d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z" fill="#00EAEC" />
                                <path d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z" fill="url(#paint1_linear_101_304)" />
                                <defs>
                                    <linearGradient id="paint0_linear_101_304" x1="6.11235" y1="0.224727" x2="69.1736" y2="54.8026" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A854E9" />
                                        <stop offset="1" stop-color="#4F91FC" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_101_304" x1="1.13135" y1="-2.39195" x2="37.2609" y2="26.4442" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#A854E9" />
                                        <stop offset="1" stop-color="#4F91FC" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <p className="text-[#131200] font-Exo sm:text-base text-sm font-normal md:leading-[24px] ">About Us</p>
                        </div>
                        <h2 className="text-[#000000]  font-Outfit  lg:text-[48px]  sm:text-5xl text-3xl font-light md:leading-[57.6px] pt-3 max-lg:text-center ">Pioneering Vision & Mission- <span className="font-Outfit font-semibold ">Driven Sectoral Innovation</span></h2>
                        <p className="text-[#000000] lg:max-w-[491px] font-Exo sm:text-base text-sm font-normal md:leading-[24px] pb-9 pt-4 max-lg:text-center opacity-[70%]">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there&&apos;s the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al,&apos;s promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                        <Button name='bg-gradient'  text='Read More' />
                    </div>
                </div>
            </div>
            <Image
                src="/assets/images/sliderellipse.png"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute bottom-10 right-7 -z-10 lg:block hidden" />
        </div>
    )
}