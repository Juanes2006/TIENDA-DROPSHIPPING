import Carousel from "./Carousel";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">

        {/* --- Texto Principal --- */}
        <div className="hero-text space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            ✨ Dale estilo único a tu espacio con la 
            <span className="text-yellow-300"> Lámpara Tulipán Nube</span>
          </h1>

          <p className="text-lg opacity-90">
            Ilumina tu habitación con un ambiente cálido y especial.  
            Y además, llévate <b>Audífonos M10</b> para tu música favorita, ¡incluidos en el combo! 🎧  
            Perfecto para regalar o para decorar tu cuarto.
          </p>

          {/* --- Precios y oferta --- */}
          <div className="hero-price text-3xl font-bold flex items-baseline gap-3">
            <span className="old-price line-through text-gray-300 text-xl">$89,900</span>
            <span className="new-price text-yellow-300">$64,900</span>
            <span className="discount bg-yellow-400 text-indigo-800 text-sm font-bold px-2 py-1 rounded-md animate-pulse">
              OFERTA HOY
            </span>
          </div>

          {/* --- Llamado a la acción --- */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={onOpenModal}
              className="btn-hero bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              🛒 Quiero el Combo
            </button>

            <p className="text-sm opacity-80 mt-2 sm:mt-0 sm:ml-2">
              ⚡ <b>Stock limitado</b>
            </p>
          </div>

          {/* --- Prueba social --- */}
          <div className="mt-6 text-sm opacity-80">
            ⭐ Más de <b>350 habitaciones transformadas</b>  
            <br />
            ⏰ Envíos a todo el país. Pago contraentrega disponible.
          </div>
        </div>

{/* --- Imagen del producto --- */}
<div className="hero-image flex justify-center">
          <Carousel
            images={[
              "src/assets/COMICFEST.jpeg",
              "src/assets/ratonQ.jpeg",
              "src/assets/ROBOTIC.jpg"
            ]}
          />
        </div>


      </div>
    </section>
  );


}


