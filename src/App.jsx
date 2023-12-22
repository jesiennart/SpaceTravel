import React from "react";
import Home from "./Components/Homepage/Home";
import Nav from "./Components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./Components/Destinations/destination";
import Crew from "./Components/Crew/crew";
import Technology from "./Components/Technology/technology";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
