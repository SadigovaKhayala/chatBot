import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BloomTechPage from "./pages/BloomTechPage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
const App = () => {
  const [data, setData] = useState({});
  return (
    <Routes>
      <Route path="/" element={<BloomTechPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
