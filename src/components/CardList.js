import React from "react";
import Card from "./Card";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function CardList({ cards }) {
  const shuffledCards = shuffleArray(cards);

  return (
    <div className="card-grid">
      {shuffledCards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
