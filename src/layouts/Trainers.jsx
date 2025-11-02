import React from "react";
import { trainersData } from "../Utils/Data";

const Trainers = () => {
  return (
    <>
      <div className="trainers-section py-5">
        <div className="container text-center">
          <h2 className="section-title">
            Meet the <span>Trainers</span>
          </h2>

          <div className="row justify-content-center mt-5">
            {trainersData.map((trainer) => (
              <div
                key={trainer.id}
                className="col-lg-3 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
              >
                <div className="trainer-card text-center">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="trainer-img"
                  />
                  <h4 className="trainer-name">{trainer.name}</h4>
                  <p className="trainer-desc">{trainer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trainers;
