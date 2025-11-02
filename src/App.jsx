import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/assets/CSS/Style.css"
import "./Utils/Data"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Error from "./pages/Error.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/classes" element={<Classes />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;
