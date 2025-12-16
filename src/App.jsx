import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ModalContactForm from "./components/ModalContactForm";
import BotonWhatsapp from "./components/Botoon_whatsapp.jsx";
import HomeHeader from "./components/HomeHeader.jsx";
import MainHome from "./components/MainHome.jsx";
import Benefits from "./components/Benefits";
import Ratings from "./components/Ratings";
import Cinta from "./components/Cinta.jsx";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <div>
      <HomeHeader />
      <Cinta />


      

      <MainHome />
      <Benefits />
      <Ratings />


      <BotonWhatsapp />
      <Footer />
      <ModalContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
    </div>
  );
}
