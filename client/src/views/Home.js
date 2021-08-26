import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <FeaturesTiles/>
      <div style = {{textAlign : "center", margin:"0 auto"}}>
        Note: Workshops will be conducted from 10 AM to 1 PM and from 2 PM to 5 PM.
      </div>
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
    </>
  );
};

export default Home;
