import React from "react";
import { Link } from "react-router-dom";
import "./politicas.css"


export default function PoliciesTermsKalyzo() {
  return (
    <div className="pol-container">
      <div className="pol-wrapper">

        {/* HEADER */}
        <header className="pol-header">
          <h1>Políticas, Términos y Garantías – Kalyzo</h1>
          <p>
            Información clara, transparente y siempre disponible para nuestros clientes.
          </p>

          <Link to="/" className="pol-btn">
            Página Principal
          </Link>
        </header>

        <div className="pol-layout">

          {/* SIDEBAR */}
          <aside className="pol-sidebar">
            <div className="pol-card">
              <h3>Secciones</h3>
              <ul>
                <li><a href="#privacidad">Política de Privacidad</a></li>
                <li><a href="#terminos">Términos y Condiciones</a></li>
                <li><a href="#garantias">Garantías</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="pol-content">

            {/* PRIVACIDAD */}
            <section id="privacidad" className="pol-card">
              <h2>1. Política de Privacidad</h2>

              <p className="pol-date">Última actualización: 18/10/2025</p>

              <p>
                En Kalyzo protegemos la información personal de nuestros usuarios y cumplimos con los
                principios de transparencia, seguridad y confidencialidad. Esta política explica cómo
                recopilamos, usamos y protegemos tus datos cuando utilizas nuestros servicios de venta
                online bajo el modelo de dropshipping.
              </p>

              <h3>1.1. Datos que recopilamos</h3>
              <ul>
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>Teléfono</li>
                <li>Dirección de envío</li>
              </ul>

              <h3>1.2. Finalidad del uso</h3>
              <ul>
                <li>Procesar pedidos y entregas</li>
                <li>Enviar notificaciones sobre el estado del pedido</li>
                <li>Prevenir fraudes</li>
                <li>Brindar soporte al cliente</li>
                <li>Mejorar la experiencia de usuario</li>
                <li>Enviar promociones (previo consentimiento)</li>
              </ul>

              <h3>1.3. Dropshipping</h3>
              <p>
                Trabajamos mediante proveedores externos que despachan los productos. Podemos
                compartir con ellos solo los datos necesarios para entregar tu pedido.
              </p>

              <h3>1.6. Derechos del usuario</h3>
              <ul>
                <li>Acceso a tus datos</li>
                <li>Corrección</li>
                <li>Eliminación</li>
                <li>Limitación del tratamiento</li>
                <li>Retirar consentimiento</li>
              </ul>

              <p>
                Contacto: <strong>kalyzotienda@gmail.com</strong>
              </p>
            </section>

            {/* TÉRMINOS */}
            <section id="terminos" className="pol-card">
              <h2>2. Términos y Condiciones</h2>

              <h3>2.1. Naturaleza del negocio</h3>
              <p>
                Kalyzo opera mediante dropshipping. Los productos se envían directamente
                desde proveedores externos.
              </p>

              <h3>2.2. Precios y pagos</h3>
              <ul>
                <li>Los precios están expresados en moneda local</li>
                <li>Pueden cambiar sin previo aviso</li>
                <li>El pago se realiza mediante plataformas seguras</li>
              </ul>

              <h3>2.4. Envíos</h3>
              <p>
                El tiempo de entrega depende del proveedor y la ciudad destino.
              </p>
            </section>

            {/* GARANTÍAS */}
            <section id="garantias" className="pol-card">
              <h2>3. Política de Garantías</h2>

              <div className="pol-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Tipo de caso</th>
                      <th>Plazo máximo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Pedido incompleto</td><td>10 días</td></tr>
                    <tr><td>Mal funcionamiento</td><td>10 días</td></tr>
                    <tr><td>Producto roto</td><td>10 días</td></tr>
                    <tr><td>Pedido incorrecto</td><td>10 días</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2. Requisitos</h3>
              <ul>
                <li>Número de pedido</li>
                <li>Evidencia fotográfica o en video</li>
                <li>Descripción del inconveniente</li>
              </ul>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="pol-card">
              <h2>Contacto</h2>
              <p><strong>Email:</strong> kalyzotienda@gmail.com</p>
              <p><strong>Sitio web:</strong> www.kalyzo.shop</p>
            </section>

          </main>
        </div>
      </div>
      
    </div>
    
  );
}
