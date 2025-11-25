// components/ModalContactForm.jsx
import { useState } from "react"

export default function ModalContactForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    direccion: "",
    unidades: "",
    color1: "",
    color2: "",
    complemento: "",
  })

  const [status, setStatus] = useState("")

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const whatsappNumber = "573206217724"

      const {
        nombre,
        email,
        telefono,
        ciudad,
        direccion,
        unidades,
        color1,
        color2,
        complemento,
      } = form

      const colorInfo =
        unidades === "2"
          ? `🎨 *Colores:* ${color1} y ${color2}`
          : `🎨 *Color:* ${color1}`

      const mensaje = `
🧸 *Gracias por tu pedido*  
Estoy revisando los datos para confirmar tu envío.

👤 *Nombre:* ${nombre}
📧 *Correo:* ${email}
📱 *Teléfono:* ${telefono}

📍 *Ciudad:* ${ciudad}
🏠 *Dirección:* ${direccion}

📦 *Unidades:* ${unidades}
${colorInfo}

📝 *Notas:* ${complemento || "(sin observaciones)"}

En unos momentos te enviaré la confirmación y el tiempo estimado de entrega.  
Cualquier duda estaré pendiente para ayudarte.
`.trim()


      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        mensaje
      )}`

      window.open(url, "_blank")
      setStatus("success")
      setTimeout(() => setStatus(""), 3500)
    } catch (err) {
      console.error("Error:", err)
      setStatus("error")
      setTimeout(() => setStatus(""), 3500)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="close-btn" onClick={onClose} aria-label="Cerrar formulario">
          ✖
        </button>

        <h3 className="font-bold">🛍️ Completa tu pedido</h3>

<p className="info-privacidad flex items-start gap-2 bg-gray-100 p-3 rounded-lg text-sm border border-gray-300">
  <span className="text-green-600 text-lg">🔒</span>
  <span className="text-gray-700 font-medium">
    Tu información se usa únicamente para procesar tu envío. No compartimos tus datos.
  </span>
</p>



        <form onSubmit={handleSubmit} className="contact-form">

          <input type="text" name="nombre" placeholder="Nombre completo" required value={form.nombre} onChange={handleChange} />

          <input type="email" name="email" placeholder="Correo electrónico" required value={form.email} onChange={handleChange} />

          <input type="tel" name="telefono" placeholder="Teléfono (10 dígitos)" required pattern="^[0-9]{10}$" value={form.telefono} onChange={handleChange} />

          <input type="text" name="ciudad" placeholder="Ciudad" required value={form.ciudad} onChange={handleChange} />

          <input type="text" name="direccion" placeholder="Dirección completa" required value={form.direccion} onChange={handleChange} />

          <select name="unidades" required value={form.unidades} onChange={handleChange}>
            <option value="">Cantidad</option>
            <option value="1">1 Unidad — $64.900</option>
            <option value="2">2 Unidades — $99.900</option>
          </select>

          <select name="color1" required value={form.color1} onChange={handleChange}>
            <option value="">Color Peluche #1</option>
            <option value="Azul">Azul</option>
            <option value="Rosado">Rosado</option>
          </select>

          {form.unidades === "2" && (
            <select name="color2" required value={form.color2} onChange={handleChange}>
              <option value="">Color Peluche #2</option>
              <option value="Azul">Azul</option>
              <option value="Rosado">Rosado</option>
            </select>
          )}

          <input type="text" name="complemento" placeholder="Notas adicionales (opcional)" value={form.complemento} onChange={handleChange} />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Procesando..." : "Confirmar mi pedido en WhatsApp"}
          </button>

          {status === "success" && <p className="success">Abriendo WhatsApp… gracias por tu pedido
</p>}
          {status === "error" && <p className="error">No pudimos abrir WhatsApp. Inténtalo de nuevo por favor.
</p>}
        </form>
      </div>
    </div>
  )
}
