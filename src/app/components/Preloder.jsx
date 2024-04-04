"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react";
export default function Preloder() {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#040404] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="relative flex justify-center items-center animate-bounce">
                        <p className="font-bold text-[40px] leading-[31px] font-recharge text-[#02CDCF] mt-9">Noble Mind</p>
                    </div>

                </section>
            ) : (
                ""
            )}
        </>
    )
}