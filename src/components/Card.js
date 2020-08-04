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
        {card.hiragana}
        {card.katakana}
      </div>

      <div className="back">{card.romaji}</div>
    </div>
  );
}

export default Card;
