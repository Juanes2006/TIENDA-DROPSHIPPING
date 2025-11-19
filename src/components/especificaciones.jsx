import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


export default function Especificaciones() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <section className="container text-center">
     

      <h2 className="text-5xl font-extrabold leading-tight">
          <span className="text-blue-600">Especificaciones del Producto</span>
          </h2>

      {/* Acordeón 1 */}
      <div className="mb-6 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200">
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg transition"
        >
          Especificaciones Generales
          <FaChevronDown
            className={`${
              open1 ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            open1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
         <div className="p-5 space-y-3 text-gray-700 text-sm leading-relaxed bg-gray-50">
  <p>✔️ <strong>Material:</strong> Tela suave, hipoalergénica y segura para todo tipo de piel.</p>
  <p>✔️ <strong>Dimensiones:</strong> Aproximadamente 30 cm de alto y 20 cm de ancho.</p>
  <p>✔️ <strong>Colores disponibles:</strong> Azul y Rosado.</p>

  <p>
    ✔️ <strong>Garantía:</strong>  
    <br />• Pedido incompleto (Incomplete order): 10 días  
    <br />• Mal funcionamiento (Malfunction): 10 días  
    <br />• Producto roto (Broken product): 10 días  
    <br />• Pedido incorrecto (Different order): 10 días
  </p>
</div>

        </div>
      </div>

      {/* Acordeón 2 */}
      <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200">
        <button
          onClick={() => setOpen2(!open2)}
          className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg transition"
        >
          Condiciones y Advertencias
          <FaChevronDown
            className={`${
              open2 ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </button>

        <div
          className={`transition-all duration-300 ease-in-out ${
            open2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="p-5 space-y-3 text-gray-700 text-sm leading-relaxed bg-gray-50">
  <p>⚠️ Uso recomendado: Ideal para uso decorativo y acompañamiento emocional suave. No utilizar como dispositivo médico ni como herramienta para inducir sueño.</p>

  <p>⚠️ Precauciones: Mantener alejado de fuentes de calor, humedad excesiva y objetos cortopunzantes. No retirar el mecanismo interno de respiración.</p>

  <p>⚠️ No apto para: Niños menores de 1 año, mascotas que puedan morder el mecanismo interno y personas sensibles a luces o movimientos repetitivos.</p>

  <p>⚠️ Mantenimiento: Limpiar únicamente con paño seco. No sumergir en agua ni lavar en lavadora. Cargar o cambiar baterías según indicaciones del proveedor.</p>

  <p>⚠️ Advertencia de seguridad: El producto contiene un módulo interno que simula respiración. No abrir, presionar con fuerza ni manipular el mecanismo para evitar daños o fallos.</p>
</div>

        </div>
      </div>
    </section>
  );
}
