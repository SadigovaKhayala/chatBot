import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./pages/ChatBot";
import Komputer from "./pages/Komputer";
import Printer from "./pages/Printer";
import Email from "./pages/Email";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatBot />} />
      <Route path="/computer" element={<Komputer />} />
      <Route path="/printer" element={<Printer />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
};

export default App;
