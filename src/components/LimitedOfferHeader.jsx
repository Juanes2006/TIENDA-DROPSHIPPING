import React, { useEffect, useState } from "react";

const LimitedOfferHeader = ({ onOpenModal }) => {
  // 20 minutos en milisegundos
  const DURATION = 20 * 60 * 1000;

  const getDeadline = () => {
    const saved = localStorage.getItem("offerDeadline");
    const now = Date.now();

    if (saved && Number(saved) > now) {
      return Number(saved);
    }

    const newDeadline = now + DURATION;
    localStorage.setItem("offerDeadline", newDeadline);
    return newDeadline;
  };

  const [deadline, setDeadline] = useState(getDeadline());
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  useEffect(() => {
    const tick = () => {
  const remaining = deadline - Date.now();

  if (remaining <= 0) {
    const newDeadline = Date.now() + DURATION;
    localStorage.setItem("offerDeadline", newDeadline);
    setDeadline(newDeadline);
    return;
  }

  setTimeLeft(remaining);
};

    tick();

    const msToNextSecond = 1000 - (Date.now() % 1000);
    let intervalId;

    const alignTimeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 1000);
    }, msToNextSecond);

    return () => {
      clearTimeout(alignTimeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [deadline]);

  const formatTime = (ms) => {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <header className="promo-header bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 shadow-md">
      <div className="promo-content flex flex-col md:flex-row justify-center items-center gap-3">

        <span className="promo-text text-lg font-semibold tracking-wide">
          🎉 ¡Oferta por tiempo limitado! <span className="text-yellow-300">40% OFF</span>
        </span>

        <div className="countdown urgent-pulse font-mono bg-black/30 px-4 py-2 rounded-lg text-yellow-300 text-xl shadow-lg">
  ⏰ {formatTime(timeLeft)}
</div>


          <div className="hero__actions">
            <button
            onClick={onOpenModal}
            type="button"
            className="btn btn--primary urgent-pulse">
  ⚡ PAGO CONTRAENTREGA
</button>


          </div>
        

      </div>
    </header>
  );
};

export default LimitedOfferHeader;
