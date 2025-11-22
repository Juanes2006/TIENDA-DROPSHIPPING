import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ModalContactForm from "./components/ModalContactForm";
import LimitedOfferHeader from "./components/LimitedOfferHeader";
import Ratings from "./components/Ratings";
import BotonWhatsapp from "./components/Boton_whatsapp.jsx";
import Especificaciones from "./components/Especificaciones.jsx";
import ModalVideo from "./components/ModalVideo";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <LimitedOfferHeader onOpenModal={() => setIsModalOpen(true)} />

      <ModalVideo
        open={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc="/videos/stitchVideo1.mov"
        title=" Stitch Respira Contigo"
      />

      <div className="container">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Especificaciones />
        <Benefits />
        <Ratings />
      </div>

      <BotonWhatsapp />
      <Footer />
      <ModalContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
    </div>
  );
}
