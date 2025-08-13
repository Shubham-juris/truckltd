import React from "react";
import HomeSection from "../../components/Homecomponent/HomeSection";
import Servicecontent from "../../components/Homecomponent/Servicecontent";
import StatsSection from "../../components/Homecomponent/StateSection";
import ChooseUs from "../../components/Homecomponent/ChooseUs";
import Companyvalue from "../../components/AboutComponent/Companyvalue";

const Homepage = () => {
  return (
    <>
      <HomeSection />
      <Servicecontent />
      <ChooseUs />
      <StatsSection />
      <Companyvalue />
    </>
  );
};

export default Homepage;
