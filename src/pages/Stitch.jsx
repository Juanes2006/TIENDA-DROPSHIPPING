import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ModalContactForm from "../components/ModalContactForm";
import LimitedOfferHeader from "../components/LimitedOfferHeader";
import BotonWhatsapp from "../components/Botoon_whatsapp.jsx";
import Especificaciones from "../components/Espeecificaciones.jsx";
import CalculadorEnvio from "../components/CalculadorEnvio.jsx";
import Ratings from "../components/Ratings";
import Benefits from "../components/Benefits";

export default function Stitch() {
  // 🔹 PRODUCTO DEFINIDO AQUÍ
  const product = {
    id: "stitch-peluche",
    nombre: "Peluche Stitch Respiración Calmante",
    precios: {
      1: 64900,
      2: 99900,
    },
    colores: ["Azul", "Rosado"],

    allowMultipleColors: true,

    especificacionesGenerales: [
    { titulo: "Material", descripcion: "Tela suave, hipoalergénica y segura para todo tipo de piel." },
    { titulo: "Dimensiones", descripcion: "30 cm de alto y 20 cm de ancho." },
    { titulo: "Colores disponibles", descripcion: "Azul y Rosado" },
    { titulo: "Función especial", descripcion: "Mecanismo interno que simula respiración" },
    { titulo: "Alimentación", descripcion: "Baterías internas (AAA o paquete según proveedor)" },
    { titulo: "Duración estimada", descripcion: "6 a 15 horas continuas" },
    { titulo: "Garantía", descripcion: "Pedido incompleto: 10 días · Mal funcionamiento: 10 días · Producto roto: 10 días · Pedido incorrecto: 10 días", leadingRelaxed: true },
  ],
  condicionesAdvertencias: [
    { titulo: "Uso recomendado", descripcion: "Acompañamiento emocional y peluche relajante." },
    { titulo: "Precauciones", descripcion: "Alejar de calor, humedad y objetos cortopunzantes." },
    { titulo: "No apto para", descripcion: "Niños menores de 1 año · Mascotas que puedan morderlo · Personas sensibles a movimientos repetitivos", leadingRelaxed: true },
    { titulo: "Mantenimiento", descripcion: "Limpiar con paño seco. No lavar ni sumergir. Cambiar baterías según indicaciones.", leadingRelaxed: true },
    { titulo: "Seguridad del mecanismo", descripcion: "Contiene un módulo interno que simula respiración. No presionar ni abrir.", leadingRelaxed: true },
    { titulo: "Recomendación", descripcion: "Apagar el módulo cuando no esté en uso." },
  ],
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      {/* HEADER */}
      <LimitedOfferHeader onOpenModal={() => setSelectedProduct(product)} />

      <div className="container">
        <CalculadorEnvio />
        <Hero
  product={product}
  onOpenModal={setSelectedProduct}
  titulo={
    <>
      El <span className="text-blue-300">Stitch que respira</span> y acompaña tus momentos
    </>
  }
descripcion="Descubre ese abrazo que te hacía falta y deja que Stitch llene tus días de ternura y diversión. Perfecto para acompañarte en cada momento especial."
  images={[
    "/foto1.png",
    "/foto2.png",
    "/foto3.png",
    "/foto4.png",
    "/foto5.png",
    "/foto6.png",
    "/foto7.png",
  ]}
  preciosAntes={{
    1: 110000,
    2: 165900,
  }}
  descuentoTexto="HOY 40% OFF"
  socialProof="400+ personas ya lo tienen"
  stockTexto="Quedan pocas unidades en stock"
/>

        <Especificaciones product={product} />
      </div>


      <Benefits />
      <Ratings />
      

      <BotonWhatsapp />
      <Footer />

      {/* MODAL GLOBAL */}
      <ModalContactForm
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
}
