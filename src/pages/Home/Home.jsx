import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Info from "../../components/Info/Info";
import Catalog from "../../components/Catalog/Catalog";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
const Home = () => {
  return (
    <menu className="w-full sofia-pro ">
      <Hero />
      <div className="!mx-[114px] max-md:!mx-[22px]">
        <Features />
        <Info />
      </div>
      <Catalog />
      <div className="!mx-[114px] max-md:!mx-[22px]">
        <HowItWorks />
      </div>
    </menu>
  );
};

export default Home;
