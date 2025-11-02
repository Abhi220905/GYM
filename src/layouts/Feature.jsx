import React from "react";
import { featuresData } from "../Utils/Data";

const Features = () => {
  return (
    <div className="py-5 text-center bg-light">
      <div className="container">
        <div className="mb-5">
          <h2 className="fw-bold mb-3">
            The real <span style={{ background: "yellow", padding: "0 5px" }}>WORKOUTS</span> starts
            when you want to stop.
          </h2>
          <p className="text-muted">
            Push your limits and achieve your fitness goals with our
            best-in-class trainers and equipment.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {featuresData.map((ele) => (
            <div
              key={ele.id}
              className="col-12 col-sm-6 col-lg-3 d-flex align-items-stretch"
            >
              <div className="text-center p-4 rounded-3 w-100">
                <div className="mb-3">{ele.icon}</div>
                <h5 className="fw-bold mb-2">{ele.title}</h5>
                <p className="text-muted">{ele.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
