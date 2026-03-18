import React, { useState } from "react";
import { lettersData } from "./AlphabetTable";

export default function AlphabetGame() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(
    lettersData[Math.floor(Math.random() * lettersData.length)]
  );

  const checkAnswer = (letter) => {
    if (letter === question.letter) {
      setScore(score + 1);
      alert("Правильно! ⭐");
    } else {
      alert(`Неправильно! Это была буква ${question.letter}`);
    }
    setQuestion(lettersData[Math.floor(Math.random() * lettersData.length)]);
  };

  return (
    <div className="alphabet-game">
      <h2>Выбери правильную букву: {question.transcription}</h2>
      <div className="letters-game">
        {lettersData.map((item) => (
          <button key={item.letter} onClick={() => checkAnswer(item.letter)}>
            {item.letter}
          </button>
        ))}
      </div>
      <p>⭐ Очки: {score}</p>
    </div>
  );
}