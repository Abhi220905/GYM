import React from "react";

const AboutHero = () => {
  return (
    <>
      <div className="health-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-8 col-md-12">
              <h2 className="mb-4 text-center text-lg-start">
                <span>We care</span> about your health
              </h2>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Donec nec sapien in urna fermentum ornare. Morbi vel
                    ultrices leo. Sed eu turpis eu arcu vehicula fringilla ut
                    vitae orci. Donec eget efficitur ex. Donec eget dolor vitae
                    eros feugiat tristique id vitae massa. Proin vulputate
                    congue rutrum.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Suspendisse potenti. Ut gravida mattis magna, non varius
                    lorem sodales nec. In libero orci, nec sapien in urna
                    fermentum ornare. Morbi vel ultrices leo. Sed eu turpis eu
                    arcu vehicula fringilla ut vitae orci.
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center text-lg-start">
                <button className="hero-cta-btn">Become a Member</button>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-4 col-md-12 text-center mt-5 mt-lg-0">
              <img
                src="img/about-img.png"
                alt="health"
                className="img-fluid health-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
