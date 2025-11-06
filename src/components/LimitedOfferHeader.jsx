import React, { useEffect, useState } from "react";

const LimitedOfferHeader = ({ onWatchVideo }) => {
  // Milisegundos hasta la próxima medianoche (hora local)
  const getMsToEndOfDay = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(24, 0, 0, 0); // 24:00 = medianoche del día siguiente
    return end.getTime() - now.getTime();
  };

  const [timeLeft, setTimeLeft] = useState(getMsToEndOfDay());

  useEffect(() => {
    const tick = () => setTimeLeft(getMsToEndOfDay());

    // 1) Tick inicial
    tick();

    // 2) Alinear al borde del segundo real para evitar deriva
    const msToNextSecond = 1000 - (Date.now() % 1000);
    let intervalId; // importante: variable separada del timeout

    const alignTimeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 1000);
    }, msToNextSecond);

    // Limpieza
    return () => {
      clearTimeout(alignTimeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <header className="promo-header bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 shadow-md">
      <div className="promo-content flex flex-col md:flex-row justify-center items-center gap-3">
        <>
          <span className="promo-text text-lg font-semibold tracking-wide">
            🎉 ¡Oferta por tiempo limitado! <span className="text-yellow-300">50% OFF</span>
          </span>

          <div className="countdown font-mono bg-black/30 px-3 py-1 rounded-lg text-yellow-200 text-lg shadow-inner">
            ⏰ {formatTime(timeLeft)}
          </div>

          {/* Renderiza el botón solo si onWatchVideo es una función */}
          {typeof onWatchVideo === "function" && (
            <div className="hero__actions">
              <button type="button" onClick={onWatchVideo} className="btn btn--primary">
                ▶   Producto
              </button>
            </div>
          )}
        </>
      </div>
    </header>
  );
};

export default LimitedOfferHeader;
``