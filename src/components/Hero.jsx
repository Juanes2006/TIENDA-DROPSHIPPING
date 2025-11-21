import Carousel from "./Carousel";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero from-blue-600 via-indigo-600 to-purple-600 text-white ">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">





        {/* --- Texto Principal --- */}
        <div className="hero-text space-y-6 pt-10">

          
          <h1 className="text-5xl font-extrabold leading-tight">
          El <span className="text-blue-300">Stitch que respira</span> y acompaña tus momentos
          </h1>

          <p className="text-lg opacity-90">
            Descubre ese abrazo que te hacía falta. Este peluche se mueve suavemente como si respirara, creando una sensación de calma inmediata. Es suave, cálido y transmite compañía auténtica… como dormir junto a alguien que te cuida. Perfecto para noches tranquilas, días difíciles o para regalar a quien quieres proteger.
          </p>

          {/* --- Precios y oferta --- */}
          <div className="hero-price text-3xl font-bold gap-3">
            <span className="old-price line-through text-gray-300 text-xl">$110,000</span>
            <span className="new-price ">$64,900</span>
            <span className="text-blue-600">X1</span>

            <span className="discount">
              HOY 40% OFF
            </span>
          </div>
          <div className="hero-price text-3xl font-bold gap-3">
            <span className="old-price line-through text-gray-300 text-xl">$165,900</span>
            <span className="new-price text-yellow-300">$99,900</span>
                        <span className=" text-blue-600">X2 </span>

            
            <span className="discount">
              HOY 40% OFF
            </span>
          </div>

          {/* --- Llamado a la acción --- */}
          <div className="flex flex-col">
            <button
              onClick={onOpenModal}
              className="btn-hero"
            >
              💙 Lo Quiero Ahora
            </button>

            <p className="opacity-80 mt-2 sm:mt-0 sm:ml-2">
              ⚡ <b>Últimas unidades</b>
            </p>
          </div>

          {/* --- Prueba social --- */}
          <div className="opacity-70">
            ⭐ Más de <b>400 personas</b> ya tienen su Stitch.
            <br />
            🚚 Envíos a todo el país · Pago contraentrega disponible.
          </div>
        </div>

        {/* --- Imagen del producto --- */}
        <div className="">
          <Carousel
            images={[
              "/foto1.png",
              "/foto2.png",
              "/foto3.png",
              "/foto4.png",
              "/foto5.png",
              "/foto6.png",
              "/foto7.png",
            ]}
          />
        </div>

      </div>
    </section>
  );
}
