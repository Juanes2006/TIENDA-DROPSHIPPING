// App.jsx
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ModalContactForm from "./components/ModalContactForm";
import LimitedOfferHeader from "./components/LimitedOfferHeader";
import Ratings from "./components/Ratings";

// IMPORTA el modal de YouTube (ajusta la ruta si está en otra carpeta)
import ModalYoutubeVideo from "./components/ModalYoutubeVideo";
// (Opcional) si no importas el CSS dentro del propio componente:

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openVideo = () => setShowVideo(true);

  const [showVideo, setShowVideo] = useState(false);

  // Mostrar SIEMPRE el video al abrir la app
  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <LimitedOfferHeader onWatchVideo={openVideo}  />

      <ModalYoutubeVideo
        open={showVideo}
        onClose={() => setShowVideo(false)}
        youtubeId="9vBfUj4kKA4"  /* ⟵ ID del video */
        title="Demo del producto"
        startWithSoundPreferred={true} /* intentará iniciar con sonido */
      />

      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Benefits />
      <Ratings />
      <Footer />
      <ModalContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}