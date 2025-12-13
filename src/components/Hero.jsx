import Carousel from "./Carousel";

export default function Hero({
  product,
  onOpenModal,
  titulo,
  descripcion,
  images,
  preciosAntes = {},
  descuentoTexto = "OFERTA HOY",
  socialProof = "",
  stockTexto = "",
}) {
  return (
    <section className="hero py-10">
      <div className="hero-grid container mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
        
        {/* TEXTO */}
        <div className="hero-text space-y-6 pt-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            {titulo}
          </h1>

          <p className="text-lg opacity-90">
            {descripcion}
          </p>

          {/* PRECIOS */}
          <div className="text-center space-y-4">
            {Object.entries(product.precios).map(([qty, price]) => (
              <div key={qty} className="hero-price text-3xl font-bold gap-3">
                {preciosAntes[qty] && (
                  <span className="old-price line-through text-gray-300 text-xl">
                    ${preciosAntes[qty].toLocaleString("es-CO")}
                  </span>
                )}
                <span className="new-price">
                  ${price.toLocaleString("es-CO")}
                </span>
                <span className="text-blue-600">X{qty}</span>
                <span className="discount">
                  {descuentoTexto}
                </span>
              </div>
            ))}
          </div>

          {/* INFO */}
          <div className="flex flex-col p-5">
            {product.colores?.length > 0 && (
              <p className="mt-3 font-medium">
                Disponible en{" "}
                {product.colores.join(" y ")}
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

        {/* IMÁGENES */}
        <Carousel images={images} />
      </div>
    </section>
  );
}
