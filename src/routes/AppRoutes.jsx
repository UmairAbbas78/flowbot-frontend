import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AddProject from "../pages/AddProject/AddProject";
import SingleProject from "../pages/SingleProject/SingleProject";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProject />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
    </BrowserRouter>
  );
}
