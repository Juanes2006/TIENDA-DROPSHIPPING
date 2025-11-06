import { FaFacebookF, FaInstagram, FaWhatsapp, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-10 mt-16">
      <div className="container mx-auto px-6 text-center space-y-6">

        {/* --- Mensaje emocional de cierre --- */}
        <h4 className="text-2xl font-bold">
          💖 Gracias por confiar en <span className="text-yellow-300">SuperProducto</span>
        </h4>
        <p className="text-base opacity-90 max-w-2xl mx-auto">
          Nuestro compromiso es <b>mejorar tu día</b> con innovación, calidad y confianza.  
          Cada compra impulsa un sueño, y el tuyo es el siguiente en hacerse realidad. 🚀
        </p>

        {/* --- Íconos sociales / confianza --- */}
        <div className="flex justify-center gap-6 text-2xl mt-4">
         
          <a href="#" className="hover:text-yellow-300 transition-transform hover:scale-310" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        {/* --- Línea divisoria --- */}
        <div className="border-t border-white/20 pt-4 mt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm opacity-80">
            <p>
              &copy; {new Date().getFullYear()} <b>SuperProducto</b> — Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-yellow-300" />
              <span>Compra 100% Segura</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
