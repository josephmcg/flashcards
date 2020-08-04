import React, { useState } from "react";
import CardList from "./components/CardList";

import "./App.css";

function App() {
  const [cards, setCards] = useState(KANA);

  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  );
}

const KANA = [
  {
    id: "1",
    romaji: "a",
    hiragana: "あ",
    katakana: "ア",
  },
];

export default App;
