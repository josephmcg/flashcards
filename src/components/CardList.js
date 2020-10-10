import React from "react";
import Card from "./Card";
let randomizedCount = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function CardList({ cards, category, random }) {
  if (random > randomizedCount) {
    cards = shuffleArray(cards);
    randomizedCount += 1;
  }

  return (
    <div className="card-grid">
      {cards.map((card) => {
        return <Card card={card} key={card.id} category={category} />;
      })}
    </div>
  );
}
