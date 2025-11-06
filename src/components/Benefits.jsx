import { FaCheckCircle, FaShippingFast, FaShieldAlt } from "react-icons/fa";

export default function Benefits() {
  return (
    <section
      className="benefits py-16 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-center"
      id="benefits"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-12">
          ¿Por qué elegir <span className="text-pink-600">SuperProducto</span>?
        </h3>

        <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* --- Tarjeta 1 --- */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
            <div className="flex justify-center mb-4">
              <FaCheckCircle
                size={50}
                color="#4f46e5"
                className="animate-pulse"
              />
            </div>
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              Calidad premium
            </h4>
            <p className="text-gray-600">
              Materiales de alta durabilidad y confianza.
            </p>
          </div>

          {/* --- Tarjeta 2 --- */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
            <div className="flex justify-center mb-4">
              <FaShippingFast
                size={50}
                color="#4f46e5"
                className="animate-pulse"
              />
            </div>
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              Envío rápido
            </h4>
            <p className="text-gray-600">
              Recíbelo en pocos días, directo a tu puerta.
            </p>
          </div>

          {/* --- Tarjeta 3 --- */}
          <div className="benefit-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
            <div className="flex justify-center mb-4">
              <FaShieldAlt
                size={50}
                color="#4f46e5"
                className="animate-pulse"
              />
            </div>
            <h4 className="text-xl font-semibold text-indigo-700 mb-2">
              Garantía asegurada
            </h4>
            <p className="text-gray-600">
              Compra sin riesgos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
