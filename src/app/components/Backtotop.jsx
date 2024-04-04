"use client"
import { useEffect, useState } from 'react';
export default function Backtotop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    return (
        isVisible &&
        <>
            <div onClick={scrollToTop} className=' overflow-hidden relative z-20'>
                <button className="bg-gradient group duration-300 hover:scale-95  fixed bottom-5 right-3 sm:right-5 rounded-full p-3 shadow-[0_0_10px_9px_#A854E9]   ">
                    <span><svg className="h-4 w-4 group-hover:h-8 group-hover:w-8 border-0 duration-300 group-hover:text-wh ite sm:w-6 sm:h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                    </svg></span></button>
            </div>
        </>
    )
}