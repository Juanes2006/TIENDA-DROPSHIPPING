import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";

const testimoniosTodos = [
  {
    nombre: "Laura M.",
    fecha: "2025-09-11",
    mensaje:
      "El peluche ayudó muchísimo a mi hijo a dormir más tranquilo. La respiración suave realmente lo calma.",
    rating: 5,
  },
  {
    nombre: "Carlos R.",
    fecha: "2025-09-08",
    mensaje:
      "No sabía si funcionaría, pero me sorprendió. Muy buena calidad y el mecanismo es silencioso.",
    rating: 4,
  },
  {
    nombre: "Daniela P.",
    fecha: "2025-10-05",
    mensaje:
      "Lo compré como regalo y fue un éxito total. El tamaño y la textura son perfectos.",
    rating: 5,
  },
  {
    nombre: "Juliana Torres",
    fecha: "2025-10-14",
    mensaje:
      "Mi bebé se calma en minutos. No esperaba que el efecto fuera tan fuerte. Vale cada peso.",
    rating: 5,
  },
  {
    nombre: "Ricardo López",
    fecha: "2025-11-11",
    mensaje:
      "El producto es bueno, aunque esperaba que fuera un poco más grande. Igual funciona bien.",
    rating: 4,
  },
  {
    nombre: "Marcela G.",
    fecha: "2025-11-09",
    mensaje:
      "Le ayudó mucho a mi hija con ansiedad. El movimiento de respiración es suave y relajante.",
    rating: 5,
  },
  {
    nombre: "Tomás Aguilar",
    fecha: "2025-02-03",
    mensaje:
      "Todo bien, pero el envío demoró un día más. El peluche sí cumple su función.",
    rating: 3,
  },
  {
    nombre: "Andrea Rivas",
    fecha: "2025-11-12",
    mensaje:
      "Lo uso para mis siestas y es increíble lo relajante que se siente. Súper recomendado.",
    rating: 5,
  },
];

export default function Testimonios() {

  // Selecciona 3 testimonios aleatorios diferentes cada vez que se renderiza la página
  const testimonios = useMemo(() => {
    const copia = [...testimoniosTodos];
    return copia.sort(() => Math.random() - 0.5).slice(0, 3);
  }, []);

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      <h3 className="text-3xl font-bold text-center text-blue-700">
        Opiniones de Clientes
      </h3>

      {testimonios.map((t, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md space-y-3 border border-gray-200"
        >
          {/* Nombre y fecha */}
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">{t.nombre}</h4>
            <p className="text-sm text-gray-500">{t.fecha}</p>
          </div>

          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-xl ${
                  index < t.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mensaje */}
          <p className="text-gray-700 leading-relaxed">{t.mensaje}</p>
        </div>
      ))}
    </section>
  );
}
