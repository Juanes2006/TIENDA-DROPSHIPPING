import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsapp() {
  return (
    <a
      href="https://wa.me/573217618510text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20productos"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-10
        right-10
        bg-green-500
        text-white
        rounded-full
        shadow-lg
        hover:bg-green-800
        transition-all
        duration-500
        animate-bounce
        z-50
        md:p-2
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
