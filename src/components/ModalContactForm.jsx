// components/ModalContactForm.jsx
import { useState } from "react"

export default function ModalContactForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
  nombre: "",
  email: "",
  telefono: "",
  departmento: "",
  ciudad: "",
  direccion: "",
  unidades: "",
  complemento: ""

});

  const [status, setStatus] = useState("")

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const { nombre, email, telefono, departmento, ciudad, direccion,unidades, complemento } = form

      // 🔢 Coloca tu número en formato internacional (sin + ni espacios)
      const numeroWhatsApp = "573206217724" // ← cámbialo por el tuyo

      // 🧾 Mensaje con saltos de línea y emojis
      const texto = `🛍️ *Nuevo Pedido desde la Tienda*\n\n👤 *Nombre:* ${nombre}\n📧 *Correo:* ${email}\n📱 *Teléfono:* ${telefono}\n *Departamento:* ${departmento}\n📝 *Ciudad:* ${ciudad}\n📝 *Dirección: ${direccion}\n📝 *Unidades: ${unidades}\n📝*Complemento:* ${
        complemento || "(sin observaciones)"
      }\n\n🚀 *Por favor confirma el envío.*`

      // Codificar para URL
      const mensajeCodificado = encodeURIComponent(texto)

      // URL completa
      const url = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`

      // Abre WhatsApp (web o móvil)
      window.open(url, "_blank")

      // Limpia el formulario y muestra mensaje temporal
      setForm({ name: "", email: "", phone: "", message: "" })
      setStatus("success")
      setTimeout(() => setStatus(""), 4000)
    } catch (error) {
      console.error("Error al abrir WhatsApp:", error)
      setStatus("error")
      setTimeout(() => setStatus(""), 4000)
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
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Cerrar formulario"
        >
          ✖
        </button>

        <h3>🛍️ Finaliza tu pedido</h3>
        <p>Completa tus datos y te contactaremos por WhatsApp para confirmar tu envío.</p>

        <form onSubmit={handleSubmit} className="contact-form">

  <input
    type="text"
    name="nombre"
    placeholder="Nombre completo"
    value={form.nombre}
    onChange={handleChange}
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Correo electrónico"
    value={form.email}
    onChange={handleChange}
    required
    pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
    title="Ingresa un correo válido"
  />

  <input
    type="tel"
    name="telefono"
    placeholder="Número de teléfono (10 dígitos)"
    value={form.telefono}
    onChange={handleChange}
    required
    pattern="^[0-9]{10}$"
    title="Debe tener exactamente 10 dígitos"
  />

  <input
    type="text"
    name="departmento"
    placeholder="Departamento"
    value={form.departmento}
    onChange={handleChange}
    required
  />

  <input
    type="text"
    name="ciudad"
    placeholder="Ciudad"
    value={form.ciudad}
    onChange={handleChange}
    required
  />

  <input
    type="text"
    name="direccion"
    placeholder="Dirección"
    value={form.direccion}
    onChange={handleChange}
    required
  />
  <select
  name="unidades"
  value={form.unidades}
  onChange={handleChange}
  required
  className="form-select"
>
  <option value="">Selecciona una opción</option>
  <option value="1">1 Unidad X 64,900 </option>
  <option value="2">2 Unidades X 99,900</option>
</select>


  

  <input
    type="text"
    name="complemento"
    placeholder="Complemento (opcional)"
    value={form.complemento}
    onChange={handleChange}
  />

  


          <button
            type="submit"
            disabled={status === "loading"}
            className="submit-btn"
            


          >
            {status === "loading"
              ? "Procesando pedido..."
              : "Confirmar mi compra"}
          </button>

          {status === "success" && (
            <p className="success">✅ Abriendo WhatsApp...</p>
          )}
          {status === "error" && (
            <p className="error">❌ Ocurrió un error al abrir WhatsApp.</p>
          )}
        </form>
      </div>
    </div>
  )
}
