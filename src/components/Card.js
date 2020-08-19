import React, { useState } from "react";

function Card({ card }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front">
        <span className="hiragana">{card.hiragana}</span>
        <span className="katakana">{card.katakana}</span>
      </div>

      <div className="back">{card.romaji}</div>
    </div>
  );
}

export default Card;
