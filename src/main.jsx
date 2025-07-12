import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AddProject from "./pages/AddProject/AddProject.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProject from "./pages/SingleProject/SingleProject.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddProject />} />
      <Route path="/project" element={<SingleProject />} />
    </Routes>
  </BrowserRouter>
);
