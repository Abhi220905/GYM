import React from "react";
import Header from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Trainers from "../layouts/Trainers";
import AboutHead from "../layouts/AboutHead";
import AboutHero from "../layouts/AboutHero";

const About = () => {
  return (
    <>
      <Header />
      <AboutHead />
      <AboutHero/>
      <Trainers />
      <Footer />
    </>
  );
};

export default About;
