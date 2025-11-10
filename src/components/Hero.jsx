import Carousel from "./Carousel";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">



        {/* --- Texto Principal --- */}
        <div className="hero-text space-y-6">

          
          <h1 className="text-5xl font-extrabold leading-tight">
            💙 El <span className="text-yellow-300">Stitch que Respira</span> y Acompaña tus Momentos
          </h1>

          <p className="text-lg opacity-90">
            El peluche más tierno y relajante del 2025.  
            Suave, adorable y con movimiento de respiración realista que transmite **calma y compañía**.  
            Perfecto para dormir acompañado, regalar o tener como decoración especial.
          </p>

          {/* --- Precios y oferta --- */}
          <div className="hero-price text-3xl font-bold flex items-baseline gap-3">
            <span className="old-price line-through text-gray-300 text-xl">$129,900</span>
            <span className="new-price text-yellow-300">$59,900</span>
            <span className="discount bg-yellow-400 text-indigo-800 text-sm font-bold px-2 py-1 rounded-md animate-pulse">
              HOY 40% OFF
            </span>
          </div>

          {/* --- Llamado a la acción --- */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button
              onClick={onOpenModal}
              className="btn-hero bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              💙 Lo Quiero Ahora
            </button>

            <p className="text-sm opacity-80 mt-2 sm:mt-0 sm:ml-2">
              ⚡ <b>Últimas unidades</b>
            </p>
          </div>

          {/* --- Prueba social --- */}
          <div className="mt-6 text-sm opacity-80">
            ⭐ Más de <b>400 personas</b> ya tienen su Stitch.
            <br />
            🚚 Envíos a todo el país · Pago contraentrega disponible.
          </div>
        </div>

        {/* --- Imagen del producto --- */}
        <div className="hero-image flex justify-center">
          <Carousel
            images={[
              "/imagen6.jpg",
              "/imagen2.jpg",
              "/imagen3.jpg",
              "/imagen4.jpg",
              "/imagen5.jpg",
            ]}
          />
        </div>

      </div>
    </section>
  );
}
