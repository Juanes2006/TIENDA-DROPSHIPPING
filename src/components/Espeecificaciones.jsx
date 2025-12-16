import { useState } from "react";

export default function Especificaciones({ product }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  // Valores por defecto si no se pasan en product
  const {
    especificacionesGenerales = [],
    condicionesAdvertencias = [],
  } = product || {};

  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 space-y-6">

      {/* Acordeón 1 – Especificaciones Generales */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full flex justify-between items-center text-left"
        >
          <h3 className="text-2xl font-bold text-blue-600">
            Especificaciones Generales
          </h3>
          <span className="text-3xl">{open1 ? "−" : "+"}</span>
        </button>

        {open1 && (
          <div className="mt-4 space-y-3">
            {especificacionesGenerales.map((item, index) => (
              <p key={index} className={item.leadingRelaxed ? "leading-relaxed" : ""}>
                <strong>{item.titulo}:</strong> {item.descripcion}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Acordeón 2 – Condiciones y Advertencias */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <button
          onClick={() => setOpen2(!open2)}
          className="w-full flex justify-between items-center text-left"
        >
          <h3 className="text-2xl font-bold text-blue-600">
            Condiciones y Advertencias
          </h3>
          <span className="text-3xl">{open2 ? "−" : "+"}</span>
        </button>

        {open2 && (
          <div className="mt-4 space-y-3">
            {condicionesAdvertencias.map((item, index) => (
              <p key={index} className={item.leadingRelaxed ? "leading-relaxed" : ""}>
                <strong>{item.titulo}:</strong> {item.descripcion}
              </p>
            ))}
          </div>
        )}
      </div>
      <div>
        <br />
        
      </div>

    </section>
  );
}
