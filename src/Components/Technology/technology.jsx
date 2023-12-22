import React from "react";
import Nav from "../Navbar/Nav";
import Tech from "./Tech";
import '../Style/back.css' 

const Technology = () => {
    return (
        <div className="bodytech">
        <Nav />
        <h1 className="desth1">
        <span className="number">03</span>Space Lounch
      </h1>
          <Tech />  
        </div>
        
    );
};
 
export default Technology;