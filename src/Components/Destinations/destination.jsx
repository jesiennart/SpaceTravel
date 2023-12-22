import React from "react";
import Nav from "../Navbar/Nav";
import Planets from "./Planets";
import "../Destinations/destination.css";

const Destination = () => {
  return (
    <div className="bodydes">
      <Nav />
      <h1 className="desth1">
        <span className="number">01</span>Pick your destination
      </h1>
      <div>
        <Planets />
      </div>
    </div>
  );
};

export default Destination;
