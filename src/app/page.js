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
        <meta property="og:image" content="https://ibb.co/5T90wC5" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://noble-mind-umv3.vercel.app/" />
        <meta property="twitter:title" content="Noble-mind" />
        <meta property="twitter:description" content="Inspiring Innovation, Elevating Solutions – Noble Mind" />
        <meta property="twitter:image" content="https://ibb.co/5T90wC5" />

      </Head>
      {data ? (
        <div>{<Preloder />}</div>
      ) : (
        <div className="App ">
          <div className="bg-bg_image sm:min-h-screen object-contain min-h-[500px] flex flex-col lg:bg-BgSize bg-cover bg-center bg-repeat  ">
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

