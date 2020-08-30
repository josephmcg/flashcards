import React, { useState } from "react";

function Card({ card, category }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front">
        {category === "both" && (
          <>
            <div className="hiragana">{card.hiragana}</div>
            <div className="katakana">{card.katakana}</div>
          </>
        )}
        {category === "hiragana" && (
          <div className="hiragana">{card.hiragana}</div>
        )}
        {category === "katakana" && (
          <div className="katakana">{card.katakana}</div>
        )}
      </div>

      <div className="back">{card.romaji}</div>
    </div>
  );
}

export default Card;
