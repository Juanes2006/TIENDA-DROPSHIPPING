import React, { useEffect, useState } from "react";

const LimitedOfferHeader = ({ onOpenModal }) => {
  // 20 minutos en milisegundos
  
  return (
    <header className="promo-header">
      <div className=" promo-content ">

        <div style={{ width: '60px', height: '60px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '50%', overflow: 'hidden',}} >
          <img src="/kalyzo_nofondo.png" alt="imgenkalyzo" />
        </div>

        <span className="oferton font-bold text-white">
          🎉 ¡Oferta por tiempo limitado! <span className="text-yellow-300">40% OFF</span>
        </span>
        

        
        <div className="hero__actions">
          <button
  onClick={onOpenModal}
  type="button"
  className="
    urgent-pulse
    bg-(--color-accent)
    text-(--color-text-dark)
    font-bold
    py-4
    px-6
    rounded-xl
    shadow-lg
    w-full
    tracking-wide
  "
>
  ⚡🚚 PAGO CONTRAENTREGA + ENVÍO GRATIS <br />
  🛒✨ COMPRAR AHORA
</button>

        </div>
      </div>
    </header>
  );
};

export default LimitedOfferHeader;
