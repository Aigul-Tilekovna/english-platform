import React from "react";
import "./CategoryCard.css"; 

export const CategoryCard = ({ titleEn, titleKg, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <h3>{titleEn}</h3>
      <p>{titleKg}</p>
    </div>
  );
};