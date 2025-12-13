import React from "react";


const HomeHeader = () => {

  return (
    <header className="promo-header">
      <div className="promo-content">
        
        <div style={{ width: '70px', height: '70px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', borderRadius: '50%', overflow: 'hidden' }}>
          <img src="/kalyzo_nofondo.png" alt="imgenkalyzo" />
        </div>

        <span className="oferton block font-extrabold text-white text-xl md:text-3xl lg:text-4xl leading-tight">
  🎉 ¡Bienvenidos a Kalyzo! <br />
  <span className="block mt-2 text-yellow-300 text-base md:text-xl  font-bold">
    Explora nuestras ofertas y productos exclusivos.
  </span>
</span>


        
      </div>
    </header>
  );
};

export default HomeHeader;
