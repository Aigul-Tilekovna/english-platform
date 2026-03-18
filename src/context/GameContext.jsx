import { createContext, useState, useEffect } from "react";
import { levels } from "../data/levels";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState("A1");
  const [completedLessons, setCompletedLessons] = useState([]);

  // 🔹 Загрузка из localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("englishGame"));
    if (saved) {
      setXp(saved.xp);
      setCompletedLessons(saved.completedLessons || []);
    }
  }, []);

  // 🔹 Автоматическое определение уровня по XP
  useEffect(() => {
    const currentLevel = levels
      .slice()
      .reverse()
      .find((lvl) => xp >= lvl.requiredXP);

    if (currentLevel) {
      setLevel(currentLevel.id);
    }
  }, [xp]);

  // 🔹 Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem(
      "englishGame",
      JSON.stringify({ xp, level, completedLessons })
    );
  }, [xp, level, completedLessons]);

  const completeLesson = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
      setXp((prev) => prev + 10);
    }
  };

  return (
    <GameContext.Provider
      value={{ xp, level, completedLessons, completeLesson }}
    >
      {children}
    </GameContext.Provider>
  );
}