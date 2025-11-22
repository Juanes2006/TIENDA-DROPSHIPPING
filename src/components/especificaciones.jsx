export default function Especificaciones() {
  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 space-y-10">

      {/* Especificaciones Generales */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
        <h3 className="text-3xl font-bold text-start text-blue-700 mb-15">
          Especificaciones Generales
        </h3>

        <p><strong>Material:</strong> Tela suave, hipoalergénica y segura para todo tipo de piel.</p>

        <p><strong>Dimensiones:</strong> Aproximadamente 30 cm de alto y 20 cm de ancho.</p>

        <p><strong>Colores disponibles:</strong> Azul y Rosado.</p>

        <p><strong>Función especial:</strong> Incluye un mecanismo interno que simula la respiración mediante un suave movimiento de expansión del pecho. Este sistema está diseñado para generar calma emocional y sensación de compañía.</p>

        <p><strong>Alimentación:</strong> Funciona con baterías internas (AAA o paquete según proveedor). El módulo de respiración se activa automáticamente al encenderlo.</p>

        <p><strong>Duración estimada:</strong> 6 a 15 horas de funcionamiento continuo dependiendo del tipo de batería.</p>

        <p className="leading-relaxed">
          <strong>Garantía:</strong><br />
          • Pedido incompleto: 10 días<br />
          • Mal funcionamiento: 10 días<br />
          • Producto roto: 10 días<br />
          • Pedido incorrecto: 10 días
        </p>
      </div>

      {/* Condiciones y Advertencias */}
      <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
        <h3 className="text-3xl font-bold text-start text-blue-700 mb-15">
          Condiciones y Advertencias
        </h3>

        <p>
          <strong>Uso recomendado:</strong> Ideal como acompañamiento emocional, decoración y peluche relajante. No es un dispositivo médico ni está diseñado para inducir sueño clínico.
        </p>

        <p>
          <strong>Precauciones:</strong> Mantener alejado de fuentes de calor, humedad excesiva y objetos cortopunzantes. No retirar ni abrir el mecanismo interno de respiración.
        </p>

        <p className="leading-relaxed">
          <strong>No apto para:</strong><br />
          • Niños menores de 1 año<br />
          • Mascotas que puedan morder el mecanismo<br />
          • Personas sensibles a movimientos repetitivos
        </p>

        <p className="leading-relaxed">
          <strong>Mantenimiento:</strong> Limpiar únicamente con paño seco.<br />
          No lavar en lavadora ni sumergir en agua.<br />
          Cambiar o cargar baterías según indicaciones del proveedor.
        </p>

        <p className="leading-relaxed">
          <strong>Seguridad del mecanismo:</strong> El producto incluye un módulo interno que simula la respiración mediante movimiento.<br />
          No presionar con fuerza, golpear, abrir o manipular el mecanismo, ya que podría dañarse o causar fallas internas.
        </p>

        <p>
          <strong>Recomendación adicional:</strong> Apagar el módulo cuando no esté en uso para extender la vida útil de la batería y evitar desgaste innecesario del motor interno.
        </p>
      </div>

    </section>
  );
}
