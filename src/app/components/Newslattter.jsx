"use client";
import Image from "next/image"
export default function Newslatter()
{
    return (
        <div className="relative z-1 max-lg:mt-[-86px] px-3" id="blogs">
            <div className="max-w-[1140px] container 2xl:max-w-[1320px] mx-auto px-3 bg-bg_image2 md:h-[318px] bg-no-repeat bg-cover   h-full py-7 md:py-0 rounded-[20px] flex  justify-center flex-col translate-y-20">
                <h2 className='text-[#FDFDFF] font-Outfit  lg:text-[48px]  sm:text-5xl text-3xl font-light md:leading-[57.6px] text-center' data-aos="zoom-in-down">Subscribe to our <span className="font-semibold"> Newsletter!</span></h2>
                <p className="font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] text-center pt-2" data-aos="zoom-in-down">Be the first to get exclusive offers and the latest news.</p>
                <div className='sm:pl-5 pl-2 pr-2 sm:pr-3 box-border py-2 bg-[#FFFFFF0D] rounded-[6px] border border-[#FDFDFF33] mx-auto md:w-[448px]  w-full flex justify-between items-center mt-5 lg:mt-10 ' data-aos="zoom-in-down">
                    <input type="text" placeholder='Enter your email' className='placeholder:text-[#FDFDFF] text-[#FDFDFF]  placeholder:font-Outfit  max-[345px]:w-[80%] placeholder:font-semibold placeholder:sm:text-base placeholder:text-[11px] placeholder:md:leading-[24px] outline-0 bg-transparent' />
                    <input type="button" value="Subscribe" className="border-[#FDFDFF]  border cursor-pointer  !p-[13px_15px_14px_15px] sm:!p-[14px_24px_14px_24px] text-[#FDFDFF]  rounded-[4px] hover:bg-white hover:!text-[#A854E9] duration-500 font-Outfit font-semibold sm:text-base text-[12px] md:leading-[24px]" />
                </div>
            </div>
            <Image
                src="/assets/images/lastellipse.webp"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute top-0 left-7 -z-10 lg:block hidden" />
        </div>
    )
}