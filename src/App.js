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
  {
    id: "2",
    romaji: "i",
    hiragana: "い",
    katakana: "イ",
  },
  {
    id: "3",
    romaji: "u",
    hiragana: "う",
    katakana: "ウ",
  },
  {
    id: "4",
    romaji: "e",
    hiragana: "え",
    katakana: "エ",
  },
  {
    id: "5",
    romaji: "o",
    hiragana: "お",
    katakana: "オ",
  },
  {
    id: "6",
    romaji: "ka",
    hiragana: "か",
    katakana: "カ",
  },
  {
    id: "7",
    romaji: "ki",
    hiragana: "き",
    katakana: "キ",
  },
  {
    id: "8",
    romaji: "ku",
    hiragana: "く",
    katakana: "ク",
  },
  {
    id: "9",
    romaji: "ke",
    hiragana: "け",
    katakana: "ケ",
  },
  {
    id: "10",
    romaji: "ko",
    hiragana: "こ",
    katakana: "コ",
  },
  {
    id: "11",
    romaji: "sa",
    hiragana: "さ",
    katakana: "サ",
  },
  {
    id: "12",
    romaji: "shi",
    hiragana: "し",
    katakana: "シ",
  },
  {
    id: "13",
    romaji: "su",
    hiragana: "す",
    katakana: "ス",
  },
  {
    id: "14",
    romaji: "se",
    hiragana: "せ",
    katakana: "セ",
  },
  {
    id: "15",
    romaji: "so",
    hiragana: "そ",
    katakana: "ソ",
  },
  {
    id: "16",
    romaji: "ta",
    hiragana: "た",
    katakana: "タ",
  },
  {
    id: "17",
    romaji: "chi",
    hiragana: "ち",
    katakana: "千",
  },
  {
    id: "18",
    romaji: "tsu",
    hiragana: "つ",
    katakana: "ツ",
  },
  {
    id: "19",
    romaji: "te",
    hiragana: "て",
    katakana: "テ",
  },
  {
    id: "20",
    romaji: "to",
    hiragana: "と",
    katakana: "ト",
  },
  {
    id: "21",
    romaji: "na",
    hiragana: "な",
    katakana: "ナ",
  },
  {
    id: "22",
    romaji: "ni",
    hiragana: "に",
    katakana: "ニ",
  },
  {
    id: "23",
    romaji: "nu",
    hiragana: "ぬ",
    katakana: "ヌ",
  },
  {
    id: "24",
    romaji: "ne",
    hiragana: "ね",
    katakana: "ネ",
  },
  {
    id: "25",
    romaji: "no",
    hiragana: "の",
    katakana: "ノ",
  },
  {
    id: "26",
    romaji: "ha",
    hiragana: "は",
    katakana: "ハ",
  },
  {
    id: "27",
    romaji: "hi",
    hiragana: "ひ",
    katakana: "ヒ",
  },
  {
    id: "28",
    romaji: "hu",
    hiragana: "ふ",
    katakana: "フ",
  },
  {
    id: "29",
    romaji: "he",
    hiragana: "へ",
    katakana: "ヘ",
  },
  {
    id: "30",
    romaji: "ho",
    hiragana: "ほ",
    katakana: "ホ",
  },
  {
    id: "31",
    romaji: "ma",
    hiragana: "ま",
    katakana: "マ",
  },
  {
    id: "32",
    romaji: "mi",
    hiragana: "み",
    katakana: "ミ",
  },
  {
    id: "33",
    romaji: "mu",
    hiragana: "む",
    katakana: "ム",
  },
  {
    id: "34",
    romaji: "me",
    hiragana: "め",
    katakana: "メ",
  },
  {
    id: "35",
    romaji: "mo",
    hiragana: "も",
    katakana: "モ",
  },
  {
    id: "36",
    romaji: "ya",
    hiragana: "や",
    katakana: "ヤ",
  },
  {
    id: "37",
    romaji: "yu",
    hiragana: "ゆ",
    katakana: "ユ",
  },
  {
    id: "38",
    romaji: "yo",
    hiragana: "よ",
    katakana: "ヨ",
  },
  {
    id: "39",
    romaji: "ra",
    hiragana: "ら",
    katakana: "ラ",
  },
  {
    id: "40",
    romaji: "ri",
    hiragana: "り",
    katakana: "リ",
  },
  {
    id: "41",
    romaji: "ru",
    hiragana: "る",
    katakana: "ル",
  },
  {
    id: "42",
    romaji: "re",
    hiragana: "れ",
    katakana: "レ",
  },
  {
    id: "43",
    romaji: "ro",
    hiragana: "ろ",
    katakana: "ロ",
  },
  {
    id: "44",
    romaji: "wa",
    hiragana: "わ",
    katakana: "ワ",
  },
  {
    id: "45",
    romaji: "wo",
    hiragana: "を",
    katakana: "ヲ",
  },
  {
    id: "46",
    romaji: "n",
    hiragana: "ん",
    katakana: "ン",
  },
];

export default App;
