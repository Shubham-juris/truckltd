import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage/Homepage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import ScrollToTop from "../components/toptoscroll/Toptoscroll";

const RoutesPage = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage/>} />
      </Routes>
    </>
  );
};

export default RoutesPage;
