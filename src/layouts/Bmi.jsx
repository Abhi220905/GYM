import React from "react";
import { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const computeBMI = () => {
    const w = Number(weight);
    const h = Number(height);

    if (!w || !h) {
      setResult("Please enter both fields!");
      return;
    }

    const output = Math.round((w / (h * h)) * 100) / 100;

    if (output < 18.5) {
      setResult(`${output} (Underweight)`);
    } else if (output >= 18.5 && output <= 25) {
      setResult(`${output} (Normal)`);
    } else if (output >= 25 && output <= 30) {
      setResult(`${output} (Obese)`);
    } else if (output > 30) {
      setResult(`${output} (Overweight)`);
    } else {
      setResult(output.toString());
    }
  };

  return (
    <>
      <div className="bmi-section" >
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 bmi-img d-none d-lg-block" style={{  background: "url('img/bmi-bg.jpg')", backgroundSize: "cover",
        backgroundPosition: "center", backgroundRepeat:"no-repeat"}}></div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start p-5">
              <h2 className="bmi-title">
                Calculate your <span>BMI</span>
              </h2>
              <p className="bmi-desc">
                Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus
                ipsum nec sapien. Vivamus libero mauris, bibendum eget sapien
                ac, ultrices rhoncus ipsum nec sapien.
              </p>

              <div className="bmi-box mt-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Weight (KG)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Height (M)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <button className="btn-calc w-100" onClick={computeBMI}>
                      Calculate
                    </button>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      value={result}
                      readOnly
                      placeholder="Result"
                    />
                  </div>
                </div>

                <p className="bmi-note mt-4">
                  Vivamus libero mauris, bibendum eget sapien ac, ultrices
                  rhoncus ipsum nec sapien. Vivamus libero mauris, bibendum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmi;
