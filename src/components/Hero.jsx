export default function Hero({ onOpenModal }) {
  return (
    <section className="hero bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        
        {/* --- Texto Principal --- */}
        <div className="hero-text space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            🚀 Transforma tu día con <span className="text-yellow-300">SuperProducto</span>
          </h1>

          <p className="text-lg opacity-90">
            No es solo un producto, es una <b>experiencia</b>.  
            Miles de personas ya mejoraron su rutina y ahora <b>tú puedes ser el siguiente</b>.  
            💪 Atrévete a sentir la diferencia desde el primer uso.
          </p>

          {/* --- Precios y oferta --- */}
          <div className="hero-price text-3xl font-bold flex items-baseline gap-3">
            <span className="old-price line-through text-gray-300 text-xl">$199.99</span>
            <span className="new-price text-yellow-300">$99.99</span>
            <span className="discount bg-yellow-400 text-indigo-800 text-sm font-bold px-2 py-1 rounded-md animate-pulse">
              -50% HOY
            </span>
          </div>

          {/* --- Llamado a la acción --- */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={onOpenModal}
              className="btn-hero bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              🛒 ¡Lo quiero ya!
            </button>

            <p className="text-sm opacity-80 mt-2 sm:mt-0 sm:ml-2">
              ⚡ <b>Oferta limitada</b>: solo por hoy.
            </p>
          </div>

          {/* --- Prueba social --- */}
          <div className="mt-6 text-sm opacity-80">
            ⭐ Más de <b>10,000 usuarios satisfechos</b>  
            <br />
            ⏰ Envíos rápidos y pago contraentrega.
          </div>
        </div>

        {/* --- Imagen del producto --- */}
        <div className="hero-image flex justify-center">
          <img
            src="src/assets/COMICFEST.jpeg"
            alt="SuperProducto"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}
