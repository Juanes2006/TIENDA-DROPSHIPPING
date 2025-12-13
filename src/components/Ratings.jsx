import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";

const testimoniosTodos = [
  {
    nombre: "Laura Martínez",
    fecha: "2025-11-09",
    mensaje:
      "Compré en Kalyzo y todo fue perfecto. El pedido llegó rápido y el producto es tal cual como se muestra en la tienda.",
    rating: 5,
  },
  {
    nombre: "Carlos Ramírez",
    fecha: "2025-11-07",
    mensaje:
      "Primera vez comprando en la tienda y quedé muy satisfecho. Buena atención y excelente calidad.",
    rating: 5,
  },
  {
    nombre: "Daniela Pérez",
    fecha: "2025-11-05",
    mensaje:
      "La compra fue súper fácil y el seguimiento del envío muy claro. Sin duda volvería a comprar en Kalyzo.",
    rating: 5,
  },
  {
    nombre: "Juliana Torres",
    fecha: "2025-11-04",
    mensaje:
      "Me encantó la experiencia de compra. El producto llegó bien empacado y antes de lo esperado.",
    rating: 5,
  },
  {
    nombre: "Ricardo López",
    fecha: "2025-11-02",
    mensaje:
      "Buen producto y buena tienda. Todo llegó en orden y el proceso de pago contraentrega confiable.",
    rating: 4,
  },
  {
    nombre: "Marcela Gómez",
    fecha: "2025-11-01",
    mensaje:
      "Ya he comprado dos veces en Kalyzo y siempre cumplen. Muy recomendados.",
    rating: 5,
  },
  {
    nombre: "Tomás Aguilar",
    fecha: "2025-10-30",
    mensaje:
      "La tienda es confiable. El envío tardó un poco más de lo esperado, pero el producto valió la pena.",
    rating: 4,
  },
  {
    nombre: "Andrea Rivas",
    fecha: "2025-10-29",
    mensaje:
      "Excelente servicio al cliente. Respondieron mis dudas antes de comprar y todo salió perfecto.",
    rating: 5,
  },
  {
    nombre: "Paola Hernández",
    fecha: "2025-10-27",
    mensaje:
      "Muy buena experiencia comprando en esta tienda. El producto llegó en excelentes condiciones.",
    rating: 5,
  },
  {
    nombre: "Luis Fernando Mora",
    fecha: "2025-10-26",
    mensaje:
      "Me gustó mucho la claridad de la página y la información del producto. Compra segura.",
    rating: 4,
  },
  {
    nombre: "Natalia Cárdenas",
    fecha: "2025-10-24",
    mensaje:
      "Todo el proceso fue sencillo y rápido. Definitivamente volveré a comprar en Kalyzo.",
    rating: 5,
  },
  {
    nombre: "Sebastián Ruiz",
    fecha: "2025-10-23",
    mensaje:
      "Muy buena tienda online. El producto coincide exactamente con lo publicado.",
    rating: 5,
  },
  {
    nombre: "Camila Vargas",
    fecha: "2025-10-22",
    mensaje:
      "Me dio confianza comprar aquí y no me equivoqué. Llegó rápido y bien empacado.",
    rating: 5,
  },
  {
    nombre: "Jorge Molina",
    fecha: "2025-10-20",
    mensaje:
      "Buen precio y buena calidad. El envío fue correcto y sin inconvenientes.",
    rating: 4,
  },
  {
    nombre: "Valentina Ospina",
    fecha: "2025-10-19",
    mensaje:
      "Excelente experiencia de compra. Se nota que es una tienda seria.",
    rating: 5,
  },
  {
    nombre: "Miguel Ángel Soto",
    fecha: "2025-10-18",
    mensaje:
      "Compré como regalo y quedé muy bien. La tienda cumplió en todo.",
    rating: 5,
  },
  {
    nombre: "Diana Castillo",
    fecha: "2025-10-16",
    mensaje:
      "Me encantó comprar aquí. Todo fue claro desde el inicio hasta la entrega.",
    rating: 5,
  },
  {
    nombre: "Andrés Quintero",
    fecha: "2025-10-15",
    mensaje:
      "Buena tienda, confiable y con productos de calidad. Recomendado.",
    rating: 4,
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
      <h3 className="text-3xl font-bold text-center text-blue-600">
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
