import React from "react";

// Función para sumar días evitando domingos
function addBusinessDays(days) {
  let date = new Date();

  while (days > 0) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() !== 0) {
      days--;
    }
  }

  return date.toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

export default function DeliveryEstimator() {
  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  const deliveryMin = addBusinessDays(2);
  const deliveryMax = addBusinessDays(3);

  return (
    <div
      className="
        w-full 
        bg-blue-50 
        border border-blue-300 
        rounded-2xl 
        text-blue-900 
        py-6 px-6 
        mt-6 
        shadow-md
      "
    >
      <div className="flex flex-col items-center text-center space-y-4">
        
        {/* Título */}
        <div>
          <h3 className="text-xl font-bold tracking-wide">
            Compra Hoy
          </h3>

          <p className="text-lg font-bold mt-1 opacity-80">
            <strong>{today}</strong>
          </p>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px bg-blue-200"></div>

        {/* Fechas */}
        <div>
          <h3 className="text-xl font-bold tracking-wide">
            Recibe entre
          </h3>

          <p className="text-lg font-bold mt-1 opacity-80">
            {deliveryMin} – {deliveryMax}
          </p>
        </div>
      </div>
    </div>
  );
}
