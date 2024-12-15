import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import React from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
