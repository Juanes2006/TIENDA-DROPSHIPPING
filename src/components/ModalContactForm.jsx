// components/ModalContactForm.jsx
import { useState } from "react"

export default function ModalContactForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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
      const { name, email, phone, message } = form

      // 🔢 Coloca tu número en formato internacional (sin + ni espacios)
      const numeroWhatsApp = "573206217724" // ← cámbialo por el tuyo

      // 🧾 Mensaje con saltos de línea y emojis
      const texto = `🛍️ *Nuevo Pedido desde la Tienda*\n\n👤 *Nombre:* ${name}\n📧 *Correo:* ${email}\n📱 *Teléfono:* ${phone}\n📝 *Mensaje:* ${
        message || "(sin observaciones)"
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
            name="name"
            placeholder="Nombre completo"
            value={form.name}
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
          />

          <input
            type="tel"
            name="phone"
            placeholder="Número de teléfono"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Observaciones (opcional)"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className="submit-btn"
          >
            {status === "loading"
              ? "Procesando pedido..."
              : "Confirmar mi compra 🚀"}
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
