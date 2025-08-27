
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Server, Globe, ShoppingCart, User, ChevronDown } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HostingPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onMouseEnter={() => setShowProductsMenu(true)}
                onMouseLeave={() => setShowProductsMenu(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Produtos
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showProductsMenu && (
                <div
                  onMouseEnter={() => setShowProductsMenu(true)}
                  onMouseLeave={() => setShowProductsMenu(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                >
                  <Link to="/hospedagem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Hospedagem Web
                  </Link>
                  <Link to="/vps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Servidores VPS
                  </Link>
                  <Link to="/servidores-dedicados" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Servidores Dedicados
                  </Link>
                  <Link to="/dominios" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Registro de Domínios
                  </Link>
                  <Link to="/sites-leilao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sites de Leilão
                  </Link>
                </div>
              )}
            </div>

            <Link to="/suporte" className="text-gray-700 hover:text-blue-600 transition-colors">
              Suporte
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="h-4 w-4 mr-1" />
                Área do Cliente
              </Link>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Começar Agora
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/hospedagem"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Hospedagem Web
              </Link>
              <Link
                to="/vps"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Servidores VPS
              </Link>
              <Link
                to="/servidores-dedicados"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Servidores Dedicados
              </Link>
              <Link
                to="/dominios"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Registro de Domínios
              </Link>
              <Link
                to="/sites-leilao"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Sites de Leilão
              </Link>
              <Link
                to="/suporte"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Suporte
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Área do Cliente
              </Link>
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
