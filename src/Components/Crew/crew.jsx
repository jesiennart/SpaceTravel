import React from "react";
import Nav from "../Navbar/Nav";
import Team from './Team'
import '../Style/back.css'
 
const Crew = () => {
    return (
    <div className="bodycrew">
    <Nav />
    <h1 className="desth1">
        <span className="number">02</span>Meet your crew
      </h1>
      <Team />
    </div>
    )
};
 
export default Crew;