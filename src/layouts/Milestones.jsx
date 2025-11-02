import React from "react";
// import { statsData } from "../Utils/Data";
import { statsData } from "../Utils/Data"

const Milestones = () => {
  return (
    <>
      <div className="stats-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            {statsData.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="stat-box">
                  <h2 className="stat-number">{item.number}</h2>
                  <p className="stat-label">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Milestones;
