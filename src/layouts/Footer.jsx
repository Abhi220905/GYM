import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaThumbsUp,
  FaPinterestP,
  FaFacebookF,
  FaTwitter,
  FaBasketballBall,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section " style={{  background: "url('img/footer-bg.jpg')", backgroundSize: "cover",
        backgroundPosition: "center", backgroundRepeat:"no-repeat"}}>
        <div className="container">
          <div className="row gy-4">
            {/* Location */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Location</h4>
                <p>
                  <FaMapMarkerAlt className="icon" /> 1525 Awesome Lane,
                  <br /> Los Angeles, CA
                </p>
              </div>
            </div>

            {/* Subscriptions */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Subscriptions</h4>
                <p>
                  <FaPhoneAlt className="icon" /> +1 (603)535-4592
                  <br />
                  <FaPhoneAlt className="icon" /> +1 (603)535-4556
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>E-mail</h4>
                <p>
                  <FaEnvelope className="icon" /> Contact@xgym.com
                  <br />
                     www.xgym.com  
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4>Social Media</h4>
                <div className="social-links">
                  <FaThumbsUp />
                  <FaPinterestP />
                  <FaFacebookF />
                  <FaTwitter />
                  <FaBasketballBall />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom text-center mt-5">
            <p>
              Copyright ©2025 All rights reserved by <span>Abhishek</span>
            </p>
            <ul className="footer-menu">
              <Link to="/" className="text-decoration-none text-white"><li>Home</li></Link>
              <Link to="/about" className="text-decoration-none text-white"><li>About Us</li></Link>
              <Link to="/classes" className="text-decoration-none text-white"> <li>Classes</li></Link>
              <Link to="/news" className="text-decoration-none text-white"> <li>News</li></Link>
              <Link to="/contact" className="text-decoration-none text-white"> <li>Contact</li></Link>                        
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
