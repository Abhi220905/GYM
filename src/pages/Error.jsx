import React from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <img src="img/error.jpg" alt="404 Error" className="w-50" />
        <Link to="/" className="text-decoration-none text-dark">
          <h2 className="text-uppercase fw-semibold ">Click Me !!</h2>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
