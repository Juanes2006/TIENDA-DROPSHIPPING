import { FaFacebookF, FaInstagram, FaWhatsapp, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid grid-cols-2 md:grid-cols- text-left border-b pt-2 border-white">
        

        {/* Columna 2: Enlaces útiles */}
        <div>
          <h2 className=" text-2xl font-bold text-white mb-5">Enlaces útiles</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Tienda</a></li>
<li>
              <Link 
                to="/politicas" 
                className="hover:text-indigo-400 transition-colors"
              >
                Sobre Noso
              </Link>
            </li>            <li>
              <Link 
                to="/politicas" 
                className="hover:text-indigo-400 transition-colors"
              >
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
        

        

        {/* Columna 1: Descripción */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-5">Kalyzo</h2>
          <p className="text-sm leading-relaxed text-white">
            En Kalyzo creemos en la confianza,
            la calidad y la atención personalizada. Encuentra de todo un poco,
            desde moda hasta tecnología, con envío rápido y seguro.
          </p>
        </div>
      </div>

      {/* Pie inferior */}

      <div className="text-center flex flex-col justify-between  ">
        <div className="flex justify-center space-x-4 flex-row m-4">
          <h2 className=" text-2xl font-bold text-white">Siguenos</h2>
          
          <a href="https://wa.me/573206217724?text=¡Hola!%20Quiero%20más%20información."
      target="_blank"
      rel="noopener noreferrer" className="p-2 rounded-full hover:bg-green-500 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
        
          <div className="text-center">
            <p><span className="font-semibold text-white">Kalyzo</span> Realizada por kalyzotienda@gmail.com </p>
          </div>  
      </div>
    </footer>
  );
}
