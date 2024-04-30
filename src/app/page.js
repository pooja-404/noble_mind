'use client'
import Image from "next/image";
import Headersec from "./components/Headersec";
import Mission from "./components/Mission";
import Inovation from "./components/Inovation";
import Faqsec from "./components/Faqsec";
import Newslatter from "./components/Newslattter";
import Footersec from "./components/Footersec";
import Formsec from "./components/Formsec";
import Navsec from "./components/Navsec";
import Backtotop from "./components/Backtotop";
import Head from 'next/head'
import Preloder from "./components/Preloder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <div className="overflow-hidden">
      <>
        <Head>
          <title>Noble-Mind</title>
          <meta name="description" content="Your page description" />
          <Image src='/assets/images/meta.webp' alt="meta" width={1440} height={600} />
        </Head>
      </>
      {data ? (
        <div>{<Preloder />}</div>
      ) : (
        <div className="App ">
          <div className="bg-bg_image relative z-[1]  max-lg:after:absolute  max-lg:after:w-full max-lg:after:bg-white max-lg:after:opacity-[0.8] max-lg:after:z-[-1] max-lg:after:h-full min-h-[80vh]   sm:min-h-screen object-contain  flex flex-col lg:bg-BgSize bg-cover bg-center  bg-repeat  ">
            <Navsec />
            <Headersec />
          </div>
          <Mission />
          <Inovation />
          <Formsec />
          <Faqsec />
          <Newslatter />
          <Footersec />
          <Backtotop />
        </div>
      )}
    </div>

  );
}


