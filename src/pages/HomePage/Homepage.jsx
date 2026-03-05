import React from "react";
import HomeSection from "../../components/Homecomponent/HomeSection";
import Servicecontent from "../../components/Homecomponent/Servicecontent";
// import StatsSection from "../../components/Homecomponent/StateSection";
import ChooseUs from "../../components/Homecomponent/ChooseUs";
import Companyvalue from "../../components/AboutComponent/Companyvalue";
import Value from "../../components/Homecomponent/Value";

const Homepage = () => {
  return (
    <>
      <HomeSection />
      <Servicecontent />
      <ChooseUs />
      <Value/>
    </>
  );
};

export default Homepage;
