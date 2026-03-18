import { motion } from "framer-motion";
import { saveProgress, loadProgress } from "../utils/localStorage";

export default function LevelsPage() {
  const user = loadProgress();

  const setLevel = (level) => {
    const updatedUser = { ...user, level };
    saveProgress(updatedUser);
    alert("Уровень выбран: " + level);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Выбери уровень</h1>

      <button onClick={() => setLevel("A1")}>A1</button>
      <button onClick={() => setLevel("A2")}>A2</button>
      <button onClick={() => setLevel("B1")}>B1</button>
      <button onClick={() => setLevel("B2")}>B2</button>
      <button onClick={() => setLevel("C1")}>C1</button>
      <button onClick={() => setLevel("C2")}>C2</button>
    </motion.div>
  );
}