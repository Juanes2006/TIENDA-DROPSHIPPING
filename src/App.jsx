import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import ModalContactForm from "./components/ModalContactForm";
import LimitedOfferHeader from "./components/LimitedOfferHeader";
import Ratings from "./components/Ratings";
import BotonWhatsapp from "./components/Botoon_whatsapp.jsx";
import Especificaciones from "./components/Espeecificaciones.jsx";
import CalculadorEnvio from "./components/CalculadorEnvio.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <LimitedOfferHeader onOpenModal={() => setIsModalOpen(true)} />

      

      <div className="container">
        <CalculadorEnvio />
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
