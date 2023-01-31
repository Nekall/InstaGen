import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<App />} />
        <Route path="/auth/:token" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
