import { useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="hero-carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="carousel-item" />
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev}>‹</button>
      <button className="carousel-btn next" onClick={next}>›</button>
    </div>
  );
}
