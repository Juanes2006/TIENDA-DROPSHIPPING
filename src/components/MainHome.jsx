import React from "react";

const products = [
  {
    id: 1,
    name: "Stitch Respiración Calmante",
    price: "$64.900",
    image: "/public/stitch/foto8.jpg",
    link: "/stitch-respira",
    description: "Perfecto para relajarte. Fácil de llevar a todas partes. Reduce el estrés y la ansiedad.",
  },
  {
    id: 2,
    name: "Proyector 4K",
    price: "$89.900",
    image: "public/proyector/foto1.png",
    link: "/proyector",
    description: "Disfruta de una experiencia cinematográfica en casa. Alta resolución y colores vibrantes.",
  },
  
];

const MainHome = () => {
  return (
    <main className="bg-color-bg-light text-color-text-dark">
      {/* CINTA DESLIZANTE */}
      <section className="overflow-hidden py-3 bg-color-primary shadow-md">
  <div className="marquee flex gap-16 text-sm md:text-base font-extrabold text-blacktracking-wide">
    <span>🔥 ENVÍO GRATIS A TODA COLOMBIA</span>
    <span>⚡ PAGO CONTRAENTREGA</span>
    <span>🎁 40% OFF POR TIEMPO LIMITADO</span>
    <span>⭐ PRODUCTOS EXCLUSIVOS</span>
  </div>
</section>


      {/* PRODUCTOS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-600">
          Productos Destacados
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="group bg-color-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                  🔥 DESTACADO
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-bold text-lg mb-2 text-color-primary">
                  {product.name}
                </h3>
                <p className="text-sm mb-4 text-color-text-dark">
                  {product.description}
                </p>
                <p className="text-xl font-extrabold text-color-accent">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainHome;
