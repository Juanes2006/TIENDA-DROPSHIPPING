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

export default function Proyector() {
  // 🔹 PRODUCTO DEFINIDO AQUÍ
  const product = {
    id: "proyector-4k",
    nombre: "Proyector 4K",
    precios: {
      1: 89900,
      2: 159900,
    },
    colores: ["Amarillo"],
    allowMultipleColors: false,

    especificacionesGenerales: [
  { titulo: "Portátil y ligero", descripcion: "Mini proyector fácil de llevar en bolso, mochila o bolsillo." },
  { titulo: "Batería integrada", descripcion: "Hasta 1.5 horas de uso inalámbrico tras carga completa." },
  { titulo: "Resolución", descripcion: "Soporta hasta 1080P con TFT LCD, 16:9/4:3, contraste 1000:1." },
  { titulo: "Brillo y color", descripcion: "1200 lúmenes, 16,7M colores, imagen clara y nítida (ideal en oscuridad)." },
  { titulo: "Conectividad", descripcion: "HDMI, USB, AV; compatible con tabletas, laptops, Blu-ray, TV box." },
  { titulo: "Durabilidad", descripcion: "Lámpara LED con vida útil de 30.000 horas." },
  { titulo: "Proyección flexible", descripcion: "Distancia de 1,5-2 m, tamaño de pantalla ajustable 20-80 pulgadas." },
  { titulo: "Fuente de alimentación", descripcion: "Versión móvil 5V-2A o CC 12V-1,5A, potencia 10W-24W." },
]
,
  condicionesAdvertencias: [
    { titulo: "Uso recomendado", descripcion: "Entretenimiento en interiores, cine en casa, presentaciones profesionales." },
    { titulo: "Precauciones", descripcion: "No exponer a agua, humedad o calor extremo." },
    { titulo: "No apto para", descripcion: "Uso al aire libre sin protección · Niños menores de 6 años sin supervisión", leadingRelaxed: true },
    { titulo: "Mantenimiento", descripcion: "Limpiar con paño seco y suave. No usar líquidos abrasivos.", leadingRelaxed: true },
    { titulo: "Seguridad", descripcion: "Evitar mirar directamente a la lente durante el funcionamiento.", leadingRelaxed: true },
    { titulo: "Recomendación", descripcion: "Apagar y desconectar cuando no esté en uso." },
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
              El <span className="text-blue-300">Proyector</span> 4K para una experiencia cinematográfica en casa
            </>
          }
          descripcion="Mini proyector portátil: disfruta películas HD de hasta 60 pulgadas en cualquier lugar. Compacto, ligero y con batería integrada para llevar tu cine a todas partes."
          images={[
            "/proyector1.png",
            "/proyector2.png",
            "/proyector3.png",
           
          ]}
          preciosAntes={{
            1: 143900,
            2: 255900,
          }}
          descuentoTexto="HOY 40% OFF"
          socialProof="300+ personas ya lo tienen"
          stockTexto="Quedan pocas unidades en stock"
        />
        
      
        <Especificaciones product={product}/>
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
