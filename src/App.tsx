
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hosting from './pages/Hosting'
import VPS from './pages/VPS'
import DedicatedServers from './pages/DedicatedServers'
import Domains from './pages/Domains'
import AuctionSites from './pages/AuctionSites'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { background: '#1e40af', color: '#fff' },
          success: { style: { background: '#059669' } },
          error: { style: { background: '#dc2626' } }
        }}
      />
      
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hospedagem" element={<Hosting />} />
              <Route path="/vps" element={<VPS />} />
              <Route path="/servidores-dedicados" element={<DedicatedServers />} />
              <Route path="/dominios" element={<Domains />} />
              <Route path="/sites-leilao" element={<AuctionSites />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/suporte" element={<Support />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
