"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Inovation() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 0,
        centerMode: true,
        centerPadding: 0,
        VariableWidth: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: 0,
                    VariableWidth: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '-10px',
                    VariableWidth: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '-10px',
                    VariableWidth: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '-10px',
                    VariableWidth: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '-10px',
                    VariableWidth: false,
                }
            },
        ],
    };
    const cards = [
        {
            text: 1,
            heading: "Customer-Centric",
            para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value."
        },
        {
            text: 2,
            heading: "Workplace Harmony",
            para: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family."
        },
        {
            text: 3,
            heading: "Ethical Leadership",
            para: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent."

        },
        {
            text: 2,
            heading: "Workplace Harmony",
            para: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family."
        },

    ]
    const card = cards.map((cards, i) => (<div key={i} className={`lg:w-1/3 md:w-2/4  w-full flex justify-center group duration-500 lg:py-16 md:pt-10 pt-7 pb-16 ${cards.botm}`}>
        <div className=" xl:max-w-[364px] h-[220px]  mx-2 slider-box p-4 rounded-[12px] border-[1px]  border-solid border-[#A854E933]" data-aos={`${cards.animation}`} data-aos-duration="1000" data-aos-offset="500"
            data-aos-easing="ease-in-sine" style={{ backgroundImage: `url(${cards.bg})` }}>
            <div className='w-[50px] h-[50px] opacity-3 rounded-full  border-[#c993f33d] border-solid border-[9px]  flex justify-center items-center'>
                <p className='font-Outfit font-bold text-[24px] leading-[50px] text-gradient'>{cards.text}</p>
            </div>
            <h2 className='text-[#131200] pt-3 font-Outfit font-normal text-xl sm:text-xl lg:leading-[25.2px]  max-w-[212px]'> {cards.heading}</h2>
            <p className="text-[#131200] font-Exo text-base font-normal leading-[24px] max-w-[303px]  ">{cards.para}</p>
        </div>
    </div>));
    return (
        <div className="relative z-1 overflow-y-clip " id="choose">
            <div className="max-w-[1140px] container  mx-auto px-3">
                <div className=" flex gap-2 items-center justify-center" data-aos="zoom-in">
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
                    <p className="text-[#131200] font-Exo text-base font-normal leading-[24px]">Why Choose Us</p>
                </div>
                <h2 className="text-[#000000]  font-Outfit  lg:text-[48px]  sm:text-5xl text-3xl font-light md:leading-[57.6px] md:pt-3 pt-2 text-center" data-aos="zoom-in">Driving Innovation & <span className="font-Montserrat font-semibold lg:block ">Transforming Industries </span></h2>
                <Slider  {...settings}>{card}</Slider>
                <Image
                    src="/assets/images/confranceimg.webp"
                    alt="logo" width={1140}
                    height={527} className="object-cover  rounded-[24px] md:h-[527px] h-[300px]" data-aos="zoom-in" />
            </div>
            <Image
                src="/assets/images/sliderellipse.webp"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute bottom-0 right-7 -z-10 lg:block hidden" />
            <Image
                src="/assets/images/sliderellipse2.webp"
                alt="logo" width={70.97}
                height={95.49} className="object-contain absolute top-0 left-7 -z-10 lg:block hidden" />
        </div>
    )
}