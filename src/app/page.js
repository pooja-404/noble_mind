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
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000,
      }
    );
  }, [])
  return (
    <>
      {/* <Preloder /> */}
      <Head>
        <title> Noble Mind"</title>
        <meta property="og:image" content="https://i.ibb.co/6nGGxH4/confranceimg.png" />
        <meta property="twitter:image" content="https://i.ibb.co/6nGGxH4/confranceimg.png" />
      </Head>
      <Navsec />
      <Headersec />
      <Mission />
      <Inovation />
      <Formsec />
      <Faqsec />
      <Newslatter />
      <Footersec />
      <Backtotop />
    </>
  );
}
