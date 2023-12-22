import React, { useState } from "react";
import './tech.css'
import datatechnology from '../datatech'

const Tech = () => {
  const [selectedButton, setSelectedButton] = useState(datatechnology[0].id);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const selectedContent = datatechnology.find((item) => item.id === selectedButton);
  
  return (
    <div id="wrapper">
      <menu className="tech-menu">
        {datatechnology.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={`buttonClass ${selectedButton === item.id ? 'active' : ''} button-tech`}
          >
            {item.id}
          </button>
        ))}
      </menu>
      <div>
        {selectedContent && (
          <div id="tech-content">
            <div className="main-tech">
              <h2 className="name">{selectedContent.name}</h2>
              <p className="tech-des">{selectedContent.description}</p>
            </div>
            <div className="picture-tech">
              <img
                className="photo-tech"
                src={selectedContent.images}
                alt={selectedContent.title}
              ></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tech;