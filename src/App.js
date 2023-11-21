import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./pages/ChatBot";
import Komputer from "./pages/Komputer";
import IPphone from "./pages/IPphone";
import Others from "./pages/Others";
import Printer from "./pages/Printer";
import Email from "./pages/Email";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState({});
  return (
    <Routes>
      <Route path="/" element={<ChatBot data={data} setData={setData} />} />
      <Route
        path="/computer"
        element={<Komputer data={data} setData={setData} />}
      />

      <Route path="/others" element={<Others />} />
      <Route path="/ipPhone" element={<IPphone />} />
      <Route path="/printer" element={<Printer />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
};

export default App;
