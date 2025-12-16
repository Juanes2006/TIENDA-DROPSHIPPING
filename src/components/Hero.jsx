import Carousel from "./Carousel";

export default function Hero({
  product = {},
  onOpenModal,
  titulo,
  descripcion,
  images = [],
  preciosAntes = {},
  descuentoTexto = "OFERTA HOY",
  socialProof = "",
  stockTexto = "",
  buttonText = "COMPRAR AHORA",
  subButtonText = "PAGO CONTRAENTREGA + ENVÍO GRATIS",
}) {
  return (
    <section className="hero py-10">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        {/* TEXTO */}
        <div className="hero-text space-y-6 pt-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            {titulo}
          </h1>

          <p className="text-lg opacity-90">{descripcion}</p>

          {/* PRECIOS */}
          <div className="text-center space-y-4">
            {Object.entries(product?.precios || {}).map(([qty, price]) => (
              <div
                key={qty}
                className="hero-price flex items-center justify-center gap-3 text-3xl font-bold"
              >
                {preciosAntes[qty] && (
                  <span className="line-through text-gray-300 text-xl">
                    ${preciosAntes[qty].toLocaleString("es-CO")}
                  </span>
                )}
                <span>${price.toLocaleString("es-CO")}</span>
                <span className="text-blue-600">X{qty}</span>
                <span>{descuentoTexto}</span>
              </div>
            ))}
          </div>

          {/* INFO */}
          <div className="flex flex-col p-5">
            {product?.colores?.length > 0 && (
              <p className="mt-3 font-medium">
                Disponible en {product.colores.join(" y ")}
              </p>
            )}

            {stockTexto && (
              <p className="mt-6 text-sm opacity-90">
                ⚡ <b>{stockTexto}</b>
              </p>
            )}

            {socialProof && (
              <div className="mt-2 text-sm opacity-70 leading-5">
                ⭐ <b>{socialProof}</b>
                <br />
                🚚 Envíos a todo el país · Pago contraentrega
              </div>
            )}
          </div>
        </div>

        {/* IMÁGENES + BOTÓN */}
        <div className="flex flex-col items-center gap-6">
          <Carousel images={images} />

          <button
            onClick={onOpenModal}
            type="button"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-dark)",
            }}
            className="
              urgent-pulse
              font-bold
              py-3 md:py-4
              px-4 md:px-6
              rounded-xl
              shadow-lg
              w-full md:w-auto
              text-center
              whitespace-nowrap
            "
          >
            🚚 {subButtonText}
            <br />
            🛒 {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
