//import Image from "next/image";
import { Row, Col, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import React from "react";
import { HeroSection } from "./HeroComponents";
import { OtherNews } from "./HeroComponents/OtherNews-Section";
import { PhoneImage } from "./HeroComponents/Phone-ad";
import dynamic from "next/dynamic";

const NewsSection = dynamic(() => import("./HeroComponents/News-Section"), {
  ssr: false,
});

const page = () => {
  return (
    <main className="flex flex-col px-[50px] py-[20px]">
      {/* <div className="flex-bold bg-black text-white">page</div> */}

      <div className="search-col">
        <SearchOutlined />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>

      <HeroSection />

      <div className="line main-news"></div>

      {/*Start of second section */}

      <NewsSection />

      <div className="line main-news"></div>

      {/**Phone Image Scetion */}

      <PhoneImage />

      {/*Start of third Section */}
      <OtherNews />
    </main>
  );
};

export default page;
