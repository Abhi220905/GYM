import React from "react";

const AddSection = () => {
  return (
    <>
      <div
        className="add-section set-bg"
        style={{ backgroundImage: `url("img/add-bg.jpg")` }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-7 col-md-9 col-sm-12">
              <div className="add-text text-start">
                <h2>
                  Pay now and get a 25% <span>Discount</span>
                </h2>
                <ul>
                  <li>
                    <img src="img/check-icon.png" alt="icon" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    <img src="img/check-icon.png" alt="icon" />
                    Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </li>
                  <li>
                    <img src="img/check-icon.png" alt="icon" />
                    Ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                  </li>
                </ul>
                <button className="hero-cta-btn">Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSection;
