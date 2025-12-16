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
import Cinta from "../components/Cinta.jsx";

export default function Hidrolavadora() {
  // 🔹 PRODUCTO DEFINIDO AQUÍ
  const product = {
    id: "Hidrolavadora-48V-2Baterias",
    nombre: "Hidrolavadora Inalámbrica 2 Baterías 48V + Boquilla 6 en 1",
    precios: {
      1: 99900,
      2: 164900,
    },
    colores: ["Negro"],
    allowMultipleColors: false,

    especificacionesGenerales: [
  {
    titulo: "Alta presión portátil",
    descripcion: "Potencia de limpieza de 10 a 70 veces superior a una manguera tradicional, ideal para suciedad incrustada."
  },
  {
    titulo: "6 modos de chorro",
    descripcion: "Incluye chorro concentrado, abanico, circular, pulsante, baja presión y espuma."
  },
  {
    titulo: "Presión regulable",
    descripcion: "Ajusta la intensidad según la superficie: autos, pisos, muros o muebles de exterior."
  },
  {
    titulo: "Resistente al calor",
    descripcion: "Soporta agua caliente hasta 60 °C sin afectar su funcionamiento."
  },
  {
    titulo: "Materiales duraderos",
    descripcion: "Cuerpo de aluminio ligero con boquillas de latón de alta resistencia."
  },
  {
    titulo: "Diseño ergonómico",
    descripcion: "Empuñadura antideslizante y gatillo con seguro para uso prolongado sin fatiga."
  },
  {
    titulo: "Conexión universal",
    descripcion: "Compatible con la mayoría de mangueras y grifos estándar."
  },
  {
    titulo: "Ligera y práctica",
    descripcion: "Peso aproximado de 1,2 kg (sin manguera), fácil de manejar y transportar."
  },
],

condicionesAdvertencias: [
  {
    titulo: "Uso recomendado",
    descripcion: "Limpieza de vehículos, terrazas, paredes, pisos y muebles de exterior."
  },
  {
    titulo: "Precauciones",
    descripcion: "No apuntar el chorro directamente a personas, animales o componentes eléctricos."
  },
  {
    titulo: "Distancia segura",
    descripcion: "Mantener al menos 20 cm de distancia para evitar daños en superficies delicadas.",
    leadingRelaxed: true
  },
  {
    titulo: "Temperatura del agua",
    descripcion: "No exceder los 60 °C para garantizar un funcionamiento seguro.",
    leadingRelaxed: true
  },
  {
    titulo: "Mantenimiento",
    descripcion: "Limpiar y secar después de cada uso. Guardar en un lugar seco.",
    leadingRelaxed: true
  },
  {
    titulo: "Seguridad",
    descripcion: "Activar el seguro del gatillo durante limpiezas prolongadas o pausas."
  },
],

  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      {/* HEADER */}
      <LimitedOfferHeader onOpenModal={() => setSelectedProduct(product)} />
      <Cinta />

      <div className="container">
        <CalculadorEnvio />
        <Hero
          onOpenModal={() => setSelectedProduct(product)}
          titulo={
  <>
    Limpieza <span className="text-blue-300">profesional</span> al instante con tu hidrolavadora de alta presión
  </>
}

descripcion="Hidrolavadora portátil de alta presión con 6 modos de chorro. Elimina la suciedad más difícil en autos, patios y terrazas, ahorrando tiempo y esfuerzo."
          images={[
            "/hidrolavadora1.png",
            "/hidrolavadora2.png",
            "/hidrolavadora3.png",
           
          ]}
          preciosAntes={{
            1: 149900,
            2: 249900,
          }}
          descuentoTexto="HOY 40% OFF"
          socialProof="200+ personas ya lo tienen"
          stockTexto="Quedan pocas unidades en stock"
        />
        
      
        <Especificaciones product={product}/>
      </div> 
            

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
