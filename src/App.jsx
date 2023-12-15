import React from "react";
import Home from "./Components/Homepage/Home";
import Nav from "./Components/Homepage/Nav";
import Destinations from "./Components/Destinations/Destinations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </Router>
  );
}

export default App;
