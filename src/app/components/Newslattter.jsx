"use client";
import Button from "./Button";
import Image from "next/image"
export default function Newslatter() {
    return (
        <div className="relative z-1 max-lg:mt-[-86px] px-3" id="blogs">
            <div className="max-w-[1140px] container mx-auto px-3 bg-bg_image2 md:h-[318px] h-full py-7 md:py-0 rounded-[20px] flex  justify-center flex-col translate-y-20">
                <h2 className='text-[#FDFDFF] font-Outfit  lg:text-[48px]  sm:text-5xl text-3xl font-light md:leading-[57.6px] text-center' data-aos="zoom-in-down">Subscribe to our <span className="font-semibold"> Newsletter!</span></h2>
                <p className="font-Exo sm:text-base text-sm font-normal md:leading-[24px] text-[#FDFDFF] text-center pt-2" data-aos="zoom-in-down">Be the first to get exclusive offers and the latest news.</p>
                <div className='pl-5 pr-3 py-2 bg-[#FFFFFF0D] rounded-[6px] border border-[#FDFDFF33] mx-auto md:w-[448px] w-full flex justify-between items-center mt-10 ' data-aos="zoom-in-down">
                    <input type="text" placeholder='Enter your email' className='!text-[#FDFDFF]  font-Outfit  font-semibold sm:text-base text-[11px] md:leading-[24px] outline-0 bg-transparent' />
                    <Button name='border border-[#FDFDFF]' text='Subscribe' />
                </div>
            </div>
            <Image
                src="/assets/images/lastellipse.png"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute top-0 left-7 -z-10 lg:block hidden" />
        </div>
    )
}