import React, { useState } from "react";
import "./FlipCard.css";

export const FlipCard = ({ en, kg, speak }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card"
      onClick={() => {
        setFlipped(!flipped);
        speak(en);
      }}
    >
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
        
        {/* FRONT */}
        <div className="front">
          <h2>{en}</h2>
          <p>{kg}</p>
        </div>

        {/* BACK */}
        <div className="back">
          <h2>{en}</h2>
          <p>{kg}</p>
        </div>

      </div>
    </div>
  );
};
