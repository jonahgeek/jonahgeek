import React from "react";
import Me from "./Me";
import Counts from "./Counts";
import Interests from "./Interests";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <Me />
      <Skills />
      <Counts />
      <Interests />
      <Testimonials />
    </>
  );
};

export default About;
