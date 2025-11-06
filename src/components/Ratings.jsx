import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


export default function Ratings() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [votes, setVotes] = useState(128);
  const [average, setAverage] = useState(4.6);

  const handleClick = (value) => {
    setRating(value);

    // Simulación de actualización de promedio
    const newAverage = ((average * votes + value) / (votes + 1)).toFixed(1);
    setAverage(parseFloat(newAverage));
    setVotes(votes + 1);
  };

  return (
    <section className="ratings-container">
      <h3 className="ratings-title">⭐ Califica tu experiencia</h3>

      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <FaStar
              key={value}
              className={`star ${value <= (hover || rating) ? "active" : ""}`}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
      </div>

      <p className="average">
        Promedio actual: <strong>{average}</strong> / 5 ⭐
      </p>
      <p className="votes">{votes} calificaciones registradas</p>
    </section>
  );
}
