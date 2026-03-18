import React, { useState } from "react";

// Данные по буквам
const lettersData = [
  { letter: "A", transcription: "[eɪ]", ru: "Эй", kg: "Эй" },
  { letter: "B", transcription: "[biː]", ru: "Би", kg: "Би" },
  { letter: "C", transcription: "[siː]", ru: "Си", kg: "Си" },
  { letter: "D", transcription: "[diː]", ru: "Ди", kg: "Ди" },
  { letter: "E", transcription: "[iː]", ru: "И", kg: "И" },
  { letter: "F", transcription: "[ef]", ru: "Эф", kg: "Эф" },
  { letter: "G", transcription: "[dʒiː]", ru: "Джи", kg: "Джи" },
  { letter: "H", transcription: "[eɪtʃ]", ru: "Эйч", kg: "Эйч" },
  { letter: "I", transcription: "[aɪ]", ru: "Ай", kg: "Ай" },
  { letter: "J", transcription: "[dʒeɪ]", ru: "Джей", kg: "Джей" },
  { letter: "K", transcription: "[keɪ]", ru: "Кей", kg: "Кей" },
  { letter: "L", transcription: "[el]", ru: "Эль", kg: "Эль" },
  { letter: "M", transcription: "[em]", ru: "Эм", kg: "Эм" },
  { letter: "N", transcription: "[en]", ru: "Эн", kg: "Эн" },
  { letter: "O", transcription: "[əʊ]", ru: "Оу", kg: "Оу" },
  { letter: "P", transcription: "[piː]", ru: "Пи", kg: "Пи" },
  { letter: "Q", transcription: "[kjuː]", ru: "Кью", kg: "Кью" },
  { letter: "R", transcription: "[ɑːr]", ru: "Ар", kg: "Ар" },
  { letter: "S", transcription: "[es]", ru: "Эс", kg: "Эс" },
  { letter: "T", transcription: "[tiː]", ru: "Ти", kg: "Ти" },
  { letter: "U", transcription: "[juː]", ru: "Ю", kg: "Ю" },
  { letter: "V", transcription: "[viː]", ru: "Ви", kg: "Ви" },
  { letter: "W", transcription: "[ˈdʌb.əl.juː]", ru: "Дабл-ю", kg: "Дабл-ю" },
  { letter: "X", transcription: "[eks]", ru: "Экс", kg: "Экс" },
  { letter: "Y", transcription: "[waɪ]", ru: "Вай", kg: "Вай" },
  { letter: "Z", transcription: "[zed] / [ziː]", ru: "Зед / Зи", kg: "Зед / Зи" },
];

export default function AlphabetTable() {
  const [currentLetter, setCurrentLetter] = useState(null);

  // Функция воспроизведения буквы
  const playLetter = (letter) => {
    const utter = new SpeechSynthesisUtterance(letter);
    utter.lang = "en-US";
    window.speechSynthesis.speak(utter);
    setCurrentLetter(letter);
  };

  return (
    <div className="alphabet-page">
      <h1>Английский Алфавит</h1>
      <table>
        <thead>
          <tr>
            <th>Буква</th>
            <th>Транскрипция</th>
            <th>Русское произношение</th>
            <th>Кыргызча аталышы</th>
            <th>🔊 Прослушать</th>
          </tr>
        </thead>
        <tbody>
          {lettersData.map((item) => (
            <tr key={item.letter}>
              <td>{item.letter}</td>
              <td>{item.transcription}</td>
              <td>{item.ru}</td>
              <td>{item.kg}</td>
              <td>
                <button onClick={() => playLetter(item.letter)}>🔊</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentLetter && <p>Сейчас играет: {currentLetter}</p>}
    </div>
  );
}