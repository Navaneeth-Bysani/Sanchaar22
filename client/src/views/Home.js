import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import Heros from "../components/sections/Heros";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import AboutUs from "../components/sections/AboutUS";
import Faculty from "../components/sections/Faculty";
import Certificate from "../components/sections/Certificate";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Heros /> */}
      <FeaturesSplit id="#edu-vitae" />
      <FeaturesTiles topDivider id="#programs" />
      <AboutUs
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
        id="#aboutUs"
      />
      {/* <Faculty
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
        id="#faculty"
      /> */}
      <Certificate
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
        id="#certificate"
      />
    </>
  );
};

export default Home;
