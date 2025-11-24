import { useState } from "react";

export default function Especificaciones() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 space-y-6">

      {/* Acordeón 1 – Especificaciones Generales */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full flex justify-between items-center text-left"
        >
          <h3 className="text-2xl font-bold text-blue-700">
            Especificaciones Generales
          </h3>
          <span className="text-3xl">{open1 ? "−" : "+"}</span>
        </button>

        {/* Contenido */}
        {open1 && (
          <div className="mt-4 space-y-3">
            <p><strong>Material:</strong> Tela suave, hipoalergénica y segura para todo tipo de piel.</p>
            <p><strong>Dimensiones:</strong> 30 cm de alto y 20 cm de ancho.</p>
            <p><strong>Colores disponibles:</strong> Azul y Rosado.</p>
            <p><strong>Función especial:</strong> Mecanismo interno que simula respiración.</p>
            <p><strong>Alimentación:</strong> Baterías internas (AAA o paquete según proveedor).</p>
            <p><strong>Duración estimada:</strong> 6 a 15 horas continuas.</p>
            <p className="leading-relaxed">
              <strong>Garantía:</strong><br />
              • Pedido incompleto: 10 días<br />
              • Mal funcionamiento: 10 días<br />
              • Producto roto: 10 días<br />
              • Pedido incorrecto: 10 días
            </p>
          </div>
        )}
      </div>

      {/* Acordeón 2 – Condiciones y Advertencias */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <button
          onClick={() => setOpen2(!open2)}
          className="w-full flex justify-between items-center text-left"
        >
          <h3 className="text-2xl font-bold text-blue-700">
            Condiciones y Advertencias
          </h3>
          <span className="text-3xl">{open2 ? "−" : "+"}</span>
        </button>

        {open2 && (
          <div className="mt-4 space-y-3">
            <p>
              <strong>Uso recomendado:</strong> Acompañamiento emocional y peluche relajante.
            </p>
            <p>
              <strong>Precauciones:</strong> Alejar de calor, humedad y objetos cortopunzantes.
            </p>
            <p className="leading-relaxed">
              <strong>No apto para:</strong><br />
              • Niños menores de 1 año<br />
              • Mascotas que puedan morderlo<br />
              • Personas sensibles a movimientos repetitivos
            </p>
            <p className="leading-relaxed">
              <strong>Mantenimiento:</strong><br />
              Limpiar con paño seco.<br />
              No lavar ni sumergir.<br />
              Cambiar baterías según indicaciones.
            </p>
            <p className="leading-relaxed">
              <strong>Seguridad del mecanismo:</strong> Contiene un módulo interno que simula respiración. No presionar ni abrir.
            </p>
            <p>
              <strong>Recomendación:</strong> Apagar el módulo cuando no esté en uso.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
