import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactHero = () => {
  return (
    <>
     <div className="contact-page">
      <div className="contact-wrapper">
        {/* LEFT SECTION */}
        <div className="contact-info">
          <h1>Let's Connect</h1>
          <p className="intro">
            We'd love to hear from you. Whether you have a question about
            features, trials, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>

          <div className="info-block">
            <h3><FaMapMarkerAlt className="icon" /> Address</h3>
            <p>1525 Awesome Lane,<br />Los Angeles, CA</p>
          </div>

          <div className="info-block">
            <h3><FaPhoneAlt className="icon" /> Phone</h3>
            <p>+1 (603) 535-4592</p>
            <p>+1 (603) 535-4556</p>
          </div>

          <div className="info-block">
            <h3> <FaEnvelope className="icon" />  Email</h3>
            <p>contact@xgym.com</p>
            <p>www.xgym.com</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <input type="text" placeholder="Subject" required />
            <textarea rows="6" placeholder="Write your message..." required></textarea>

            <button type="submit">Send Message </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactHero;
