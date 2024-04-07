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

      <Head>
        <title>Noble-mind</title>
        <meta name="title" content="Noble-mind" />
        <meta name="description" content="Inspiring Innovation, Elevating Solutions – Noble Mind" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noble-mind-umv3.vercel.app/" />
        <meta property="og:title" content="Noble-mind" />
        <meta property="og:description" content="Inspiring Innovation, Elevating Solutions – Noble Mind" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1712229218439-befac221f1f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://noble-mind-umv3.vercel.app/" />
        <meta property="twitter:title" content="Noble-mind" />
        <meta property="twitter:description" content="Inspiring Innovation, Elevating Solutions – Noble Mind" />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1712229218439-befac221f1f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Head>
      {data ? (
        <div>{<Preloder />}</div>
      ) : (
        <div className="App ">
          <div className="bg-bg_image relative z-[1]  max-lg:after:absolute max-lg:after:top-0 max-lg:after:right-0 max-lg:after:left-0 max-lg:after:w-full max-lg:after:bg-white max-lg:after:opacity-[0.8] max-lg:after:z-[-1] max-lg:after:h-full min-h-[95vh]   sm:min-h-screen object-contain  flex flex-col lg:bg-BgS ize bg-cover bg-center  bg-repeat  ">
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


