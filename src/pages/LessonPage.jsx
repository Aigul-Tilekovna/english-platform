import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

export default function LessonPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <motion.div
      className="lesson"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ paddingTop: "120px", textAlign: "center" }}
    >
      <h1>Урок {id} 🅰️</h1>

      <ProgressBar progress={40} />

      <p>Здесь начинается интерактивное обучение 🎮</p>

      <button
        className="back-btn"
        onClick={() => navigate("/levels")}
      >
        Назад
      </button>
    </motion.div>
  );
}