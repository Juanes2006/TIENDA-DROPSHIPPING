// components/ModalContactForm.jsx
import { useState, useEffect } from "react"

export default function ModalContactForm({ isOpen, onClose, product }) {
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

  // Reset al cambiar de producto o cerrar
  useEffect(() => {
    if (!isOpen) return
    setForm({
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
  }, [isOpen, product])

  if (!isOpen || !product) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const whatsappNumber = "573217618510"

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

      // Colores seguros
      let colorInfo = ""
      if (product.colores?.length) {
        colorInfo =
          product.allowMultipleColors && unidades === "2"
            ? `🎨 *Colores:* ${color1} y ${color2}`
            : `🎨 *Color:* ${color1}`
      }

      const total = product.precios[unidades]

      const mensaje = `
🛍️ *Nuevo pedido*

📦 *Producto:* ${product.nombre}

👤 *Nombre:* ${nombre}
📧 *Correo:* ${email}
📱 *Teléfono:* ${telefono}

📍 *Ciudad:* ${ciudad}
🏠 *Dirección:* ${direccion}

📦 *Unidades:* ${unidades}
${colorInfo}

💰 *Total:* $${total.toLocaleString("es-CO")}

📝 *Notas:* ${complemento || "(sin observaciones)"}
`.trim()

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        mensaje
      )}`

      window.open(url, "_blank")
      setStatus("success")
      setTimeout(() => setStatus(""), 3000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setTimeout(() => setStatus(""), 3000)
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
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h3 className="font-bold">🛍️ Completa tu pedido</h3>

        <p className="info-privacidad">
          🔒 Tu información se usa únicamente para procesar el envío.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input name="nombre" placeholder="Nombre completo" required value={form.nombre} onChange={handleChange} />
          <input name="email" type="email" placeholder="Correo" required value={form.email} onChange={handleChange} />
          <input name="telefono" type="tel" placeholder="Teléfono" required pattern="^[0-9]{10}$" value={form.telefono} onChange={handleChange} />
          <input name="ciudad" placeholder="Ciudad" required value={form.ciudad} onChange={handleChange} />
          <input name="direccion" placeholder="Dirección" required value={form.direccion} onChange={handleChange} />

          {/* Cantidad dinámica */}
          <select name="unidades" required value={form.unidades} onChange={handleChange}>
            <option value="">Cantidad</option>
            {Object.entries(product.precios).map(([qty, price]) => (
              <option key={qty} value={qty}>
                {qty} Unidad{qty > 1 ? "es" : ""} — ${price.toLocaleString("es-CO")}
              </option>
            ))}
          </select>

          {/* Color principal */}
          {product.colores?.length > 0 && (
            <select name="color1" required value={form.color1} onChange={handleChange}>
              <option value="">Color</option>
              {product.colores.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}

          {/* Segundo color solo si aplica */}
          {product.allowMultipleColors && form.unidades === "2" && (
            <select name="color2" required value={form.color2} onChange={handleChange}>
              <option value="">Segundo color</option>
              {product.colores.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}

          <input name="complemento" placeholder="Notas adicionales (opcional)" value={form.complemento} onChange={handleChange} />

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Procesando..." : "Confirmar pedido en WhatsApp"}
          </button>

          {status === "success" && <p className="success">Abriendo WhatsApp…</p>}
          {status === "error" && <p className="error">Error al abrir WhatsApp</p>}
        </form>
      </div>
    </div>
  )
}
