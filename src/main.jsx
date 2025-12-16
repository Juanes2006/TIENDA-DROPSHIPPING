import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import PoliciesTermsKalyzo from './pages/PoliciesTermsKalyzo.jsx'
import Stitch from './pages/Stitch.jsx'
import Proyector from './pages/Proyector.jsx'
import './styles.css'
import Hidrolavadora from './pages/Hidrolavadora.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politicas" element={<PoliciesTermsKalyzo />} />
        <Route path="/stitch-respira" element={<Stitch />} />
        <Route path="/proyector" element={<Proyector />} />
        <Route path="/hidrolavadora" element={<Hidrolavadora />} />




      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
