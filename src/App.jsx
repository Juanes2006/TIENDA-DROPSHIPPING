import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ModalContactForm from "./components/ModalContactForm";
import LimitedOfferHeader from "./components/LimitedOfferHeader";
import Ratings from "./components/Ratings";

// usa tu modal de video local
import ModalVideo from "./components/ModalVideo";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Mostrar el video apenas abre la app
  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <LimitedOfferHeader onWatchVideo={() => setShowVideo(true)} />

      <ModalVideo
        open={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc="/videos/videoCortoStich2.mp4"   // ← aquí usas tu archivo
        title=" El Stitch que Respira y Acompaña tus Momentos"
      />

      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Benefits />
      <Ratings />
      <Footer />
      <ModalContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
