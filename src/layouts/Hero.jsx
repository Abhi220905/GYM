import React from "react";

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
      {/* Overlay */}
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div> */}

      {/* Text Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="fw-bold display-5">
          Physical activity <br /> enhances{" "}
          <span style={{ color: "#f7df1e" }}>positive energy!</span>
        </h1>

        <a href="join" className="text-decoration-none"><button className="hero-cta-btn">
          Join the Gym
        </button></a>
      </div>
    </section>
  );
};


export default HeroSection;
