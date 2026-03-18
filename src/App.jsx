import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import CloudBackground from "./components/CloudBackground";
import HomePage from "./pages/HomePage";
import LevelsPage from "./pages/LevelsPage";
import LessonPage from "./pages/LessonPage";
import AlphabetPage from "./pages/AlphabetPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <CloudBackground />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/levels" element={<LevelsPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/alphabet" element={<AlphabetPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}