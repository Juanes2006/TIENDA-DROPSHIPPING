import { FaFacebookF, FaInstagram, FaWhatsapp, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-30 text-left md:text-left border-b border-white">


        {/* Columna 1: Descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-5">Kalyzo</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            En <span className="text-indigo-400 font-medium">Kalyzo</span> creemos en la confianza,
            la calidad y la atención personalizada. Encuentra de todo un poco,
            desde moda hasta tecnología, con envío rápido y seguro.
          </p>
        </div>

        {/* Columna 2: Enlaces útiles */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Enlaces útiles</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Tienda</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre nosotros</a></li>
<li>
  <Link 
    to="/politicas" 
    className="hover:text-indigo-400 transition-colors"
  >
    Política de privacidad
  </Link>
</li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales y seguridad */}
        <div className="">
          <h3 className="text-xl font-semibold text-white mb-3">Siguenos</h3>
          <br />
          <div className="flex space-x-4 mb-5 gap-5">
            <a href="#" className="p-2 rounded-full hover:bg-indigo-600 transition-colors"
            >
              <FaFacebookF />

            </a>
            <a href="#" className="p-2 rounded-full hover:bg-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-green-500 transition-colors">
              <FaWhatsapp />
            </a>
          </div>
          <br />
          
        </div>
      </div>

      {/* Pie inferior */}
      <div className="text-center justify-center text-gray-400">
        <p><span className="font-semibold text-white">Kalyzo</span> Realizada por kalyzotienda@gmail.com </p>
        <br />  
      </div>

      
    </footer>
  );
}
