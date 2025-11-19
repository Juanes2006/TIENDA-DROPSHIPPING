import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import PoliciesTermsKalyzo from './pages/PoliciesTermsKalyzo.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politicas" element={<PoliciesTermsKalyzo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
