import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
