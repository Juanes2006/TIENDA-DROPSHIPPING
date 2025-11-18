import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


export default function Especificaciones() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  return (
    <section className="container text-center">
      <h2 className="text-4xl  font-extrabold mb-5 text-center text-gray-900 tracking-tight ">
        Especificaciones del Producto
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
            <p>✔️ Material: [escribe aquí]</p>
            <p>✔️ Dimensiones: [escribe aquí]</p>
            <p>✔️ Peso: [escribe aquí]</p>
            <p>✔️ Color(es): [escribe aquí]</p>
            <p>✔️ Garantía: [escribe aquí]</p>
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
            <p>⚠️ Uso recomendado: [escribe aquí]</p>
            <p>⚠️ Precauciones: [escribe aquí]</p>
            <p>⚠️ No apto para: [escribe aquí]</p>
            <p>⚠️ Mantenimiento: [escribe aquí]</p>
            <p>⚠️ Advertencia de seguridad: [escribe aquí]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
