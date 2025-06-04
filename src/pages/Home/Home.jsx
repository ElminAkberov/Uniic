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
      <Features />
      <Info />
      {/* <Catalog /> */}
      <HowItWorks />
    </menu>
  );
};

export default Home;
