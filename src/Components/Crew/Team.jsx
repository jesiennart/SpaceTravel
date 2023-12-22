import React, { useState } from "react";
import "./crew.css";
import datacrew from '../datacrew'

const Team = () => {
  const [selectedButton, setSelectedButton] = useState(datacrew[0].id);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const selectedContent = datacrew.find((item) => item.id === selectedButton);
  
  return (
    <div id="contener">
      <menu className="point">
        {datacrew.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={`buttonClass ${selectedButton === item.id ? 'active' : ''} button-crew`}
          >
            {item.id}
          </button>
        ))}
      </menu>
      <div>
        {selectedContent && (
          <div id="crew-content">
            <div className="main-crew">
              <p className="profesion">{selectedContent.role}</p>
              <h2 className="name">{selectedContent.name}</h2>
              <p className="crew-bio">{selectedContent.bio}</p>
            </div>
            <div className="picture-crew">
              <img
                className="photo-crew"
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

export default Team;
