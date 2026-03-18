import React from "react";
import "./AlphabetPage.css";
import { alphabetData } from "../data/alphabet"; // импортируем буквы с киргизским соответствием
import { speak } from "../utils/speak";

export default function AlphabetPage() {
  return (
    <div className="alphabet-page p-4">
      <h1 className="text-2xl font-bold mb-4">Алфавит / Alphabet</h1>
      <div className="letters-grid grid grid-cols-6 gap-4">
        {alphabetData.map((letter) => (
          <div
            key={letter.en}
            className="letter-card flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => speak(letter.en)}
          >
            <span className="text-2xl font-bold">{letter.en}</span>
            <span className="text-sm text-gray-600 mt-1">{letter.kg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}