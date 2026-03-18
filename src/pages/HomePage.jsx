import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CategoryCard } from "../components/CategoryCard";
import { FlipCard } from "../components/FlipCard";
import { alphabetData } from "../data/alphabet";
import "./HomePage.css";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const speak = (text) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="page">
      <div className="container">

        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
          <h1>English Adventure</h1>
          <p>Начни своё путешествие в английском</p>
        </header>

        <div className="categories">
          <CategoryCard
            titleEn="ABC"
            titleKg="Тамгалар"
            onClick={() =>
              setActiveCategory({
                title: "ABC / Тамгалар",
                data: alphabetData,
              })
            }
          />
        </div>

        {activeCategory && (
          <div className="modal">

            <div className="modal-content">
              <h2>{activeCategory.title}</h2>

              <div className="cards">
                {activeCategory.data.map((item) => (
                  <FlipCard
                    key={item.en}
                    en={item.en}
                    kg={item.kg}
                    speak={speak}
                  />
                ))}
              </div>

              <button
                className="close-btn"
                onClick={() => setActiveCategory(null)}
              >
                Закрыть
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;