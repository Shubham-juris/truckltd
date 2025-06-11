import React from "react";
import AboutSection from "../../components/AboutComponent/AboutSection";
import AboutHero from "../../components/AboutComponent/AboutHero";
import CargoSteps from "../../components/AboutComponent/CargoSteps";
import Companyvalue from "../../components/AboutComponent/Companyvalue";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <CargoSteps/>
      <Companyvalue/>
    </>
  );
};

export default AboutPage;
