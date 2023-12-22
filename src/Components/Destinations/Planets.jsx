import React, { useState } from "react";
import "./planets.css";
import content from "../dataplanet";

const Planets = () => {
  const [selectedButton, setSelectedButton] = useState(content[0].id);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const selectedContent = content.find((item) => item.id === selectedButton);

  return (
    <div id="tabs">
      <menu>
        {content.map((item) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
            className={selectedButton === item.id ? "active" : ""}
          >
            {item.id}
          </button>
        ))}
      </menu>
      <div>
        {selectedContent && (
          <div id="tab-content">
            <div className="picture">
              <img
                className="photo"
                src={selectedContent.image}
                alt={selectedContent.title}
              ></img>
            </div>
            <div className="main-planet">
              <h2 className="title">{selectedContent.name}</h2>
              <p className="description">{selectedContent.description}</p>
              <div className="line-planet"></div>
              <div className="bottom">
                <div className="distance">
                  <p className="description">avg. distance</p>
                  <p className="time">{selectedContent.distance}</p>
                </div>
                <div className="travel">
                  <p className="description">est. travel time</p>
                  <p className="time">{selectedContent.travel}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planets;
