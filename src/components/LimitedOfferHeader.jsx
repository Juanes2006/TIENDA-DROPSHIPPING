import React from "react";
import { useNavigate } from "react-router-dom";

const LimitedOfferHeader = ({
  onOpenModal,
  discount = 40,
  offerText = "¡Oferta por tiempo limitado!",
  logo = "/kalyzo_nofondo.png",
  buttonText = "COMPRAR AHORA",
  subButtonText = "PAGO CONTRAENTREGA + ENVÍO GRATIS",
}) => {
  const navigate = useNavigate();

  return (
    <header className="promo-header bg-blue-700 py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">

        {/* BOTÓN HOME MODERNO */}
        <div className="w-full md:w-auto flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="
               px-6 py-3 md:px-8 md:py-4
              rounded-md
              font-semibold
              border border-white
              text-white
              hover:bg-white hover:text-blue-700
              transition
              duration-300
              w-full md:w-auto
              text-center
            "
          >
            Home
          </button>
        </div>

        {/* LOGO + TEXTO */}
        <div className="flex-1 flex flex-col items-center text-center my-2 md:my-0">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mb-2">
            <img
              src={logo}
              alt="logo producto"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="oferton font-bold text-white text-sm md:text-base lg:text-lg">
            🎉 {offerText} <span className="text-yellow-300">{discount}% OFF</span>
          </span>
        </div>

        {/* BOTÓN DE COMPRA */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <button
            onClick={onOpenModal}
            type="button"
            className="
              urgent-pulse
              bg-(--color-accent)
              text-(--color-text-dark)
              font-bold
              py-3 md:py-4
              px-4 md:px-6
              rounded-xl
              shadow-lg
              w-full md:w-auto
              text-center
              whitespace-nowrap
            "
          >
            ⚡🚚 {subButtonText}
            <br />
            🛒✨ {buttonText}
          </button>
        </div>

      </div>
    </header>
  );
};

export default LimitedOfferHeader;
