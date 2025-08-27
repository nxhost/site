
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Layout Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Portfolio from './pages/Portfolio'
import News from './pages/News'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Dashboard from './pages/Dashboard'
import MyServices from './pages/MyServices'
import Support from './pages/Support'

// Service Pages
import Hosting from './pages/Hosting'
import VPS from './pages/VPS'
import VPSCloud from './pages/VPSCloud'
import DedicatedServers from './pages/DedicatedServers'
import Domains from './pages/Domains'
import DataCenters from './pages/DataCenters'
import ObjectStorage from './pages/ObjectStorage'
import AuctionSites from './pages/AuctionSites'
import ResellerHosting from './pages/ResellerHosting'

// New Service Pages
import WebsiteCreation from './pages/WebsiteCreation'
import EcommerceServices from './pages/EcommerceServices'
import SEOServices from './pages/SEOServices'

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10b981',
            },
          },
          error: {
            style: {
              background: '#ef4444',
            },
          },
        }}
      />
      
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/precos" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/noticias" element={<News />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/carreiras" element={<Careers />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/meus-servicos" element={<MyServices />} />
              <Route path="/suporte" element={<Support />} />
              
              {/* Service Routes */}
              <Route path="/hospedagem" element={<Hosting />} />
              <Route path="/vps" element={<VPS />} />
              <Route path="/vps-cloud" element={<VPSCloud />} />
              <Route path="/servidor-dedicado" element={<DedicatedServers />} />
              <Route path="/dominios" element={<Domains />} />
              <Route path="/data-centers" element={<DataCenters />} />
              <Route path="/object-storage" element={<ObjectStorage />} />
              <Route path="/leilao-dominios" element={<AuctionSites />} />
              <Route path="/revenda-hospedagem" element={<ResellerHosting />} />
              
              {/* New Service Routes */}
              <Route path="/criacao-sites" element={<WebsiteCreation />} />
              <Route path="/loja-virtual" element={<EcommerceServices />} />
              <Route path="/seo-completo" element={<SEOServices />} />
            </Routes>
          </main>
          
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </>
  )
}

export default App
