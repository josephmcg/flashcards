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
        <div className="hiragana">{card.hiragana}</div>
        <div className="katakana">{card.katakana}</div>
      </div>

      <div className="back">{card.romaji}</div>
    </div>
  );
}

export default Card;
