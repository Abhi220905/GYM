import React from "react";

const ClassesHero = () => {
  return (
    <>
      <div className="trainer-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h2 className="trainer-title">
                Do you need a{" "}<br/>
                <span className="highlight">Personal Trainer?</span>
                <br /> Get in touch with us now.
              </h2>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 col-md-12">
              <p className="trainer-text">
                Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                leo. Sed eu turpis eu arcu vehicula fringilla ut vitae orci.
                Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <button className="hero-cta-btn">Send us a message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesHero;
