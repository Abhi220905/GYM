import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="hero-section d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: "url('/img/hero-bg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        position: "relative",
      }}
    >
      {/* Text Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="fw-bold display-5">
          Physical activity <br /> enhances{" "}
          <span style={{ color: "#f7df1e" }}>positive energy!</span>
        </h1>

        <NavLink to="join" className="text-decoration-none">
          <button className="hero-cta-btn">
          Join the Gym
        </button>
        </NavLink>
      </div>
    </section>
  );
};


export default HeroSection;
