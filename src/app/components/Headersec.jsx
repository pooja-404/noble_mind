
import Image from "next/image"
export default function Headersec() {

    return (
        <div className="flex-grow items-center  flex  " id="home" >
            <div className=" container max-w-[1140px] mx-auto px-3">
                <div className=" flex gap-2 max-lg:justify-center items-center" data-aos="fade-right" data-aos-duration="2000">
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
                    <p className="text-[#131200] font-Exo sm:text-base text-sm font-normal md:leading-[24px]" data-aos="fade-right" data-aos-duration="2000">AI With Noble Mind</p>
                </div>
                <h2 className="text-[#000] lg:max-w-[584px] font-Outfit  lg:text-[64px] sm:text-6xl text-4xl font-light md:leading-[76.8px] max-lg:text-center" data-aos="fade-right" data-aos-duration="2000">Inspiring Innovation, Elevating Solutions – <span className="font-Montserrat font-extrabold ">Noble Mind</span>&quot;</h2>
                <p className="text-[#000000] lg:max-w-[584px]  font-Exo md:text-base text-sm font-normal md:leading-[24px] !opacity-[70%] max-lg:text-center pt-2 " data-aos="fade-right" data-aos-duration="2000">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
            </div>
            <Image
                src="/assets/images/missionellipse2.webp"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute -bottom-9 left-7  lg:block hidden" />
        </div>
    )
}