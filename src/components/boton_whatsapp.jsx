import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsapp() {
  return (
    <a
      href="https://wa.me/573206217724?text=¡Hola!%20Quiero%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-10
        right-10
        bg-green-500
        text-white
        p-5
        rounded-full
        shadow-lg
        hover:bg-green-800
        transition-all
        duration-500
        animate-bounce
        z-50
      "
    >
      <FaWhatsapp size={40} />
    </a>
  );
}
