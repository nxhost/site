
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Server, Globe, ShoppingCart, Search, Code, Zap } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeDropdowns}>
              <span className="text-2xl font-bold text-blue-600">NXHost</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Início
            </Link>

            {/* Hospedagem Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('hosting')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Hospedagem <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'hosting' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/hospedagem" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Server size={16} className="mr-3" />
                    Hospedagem Web
                  </Link>
                  <Link to="/vps-cloud" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Zap size={16} className="mr-3" />
                    VPS Cloud
                  </Link>
                  <Link to="/servidor-dedicado" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Server size={16} className="mr-3" />
                    Servidor Dedicado
                  </Link>
                  <Link to="/revenda-hospedagem" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Globe size={16} className="mr-3" />
                    Revenda de Hospedagem
                  </Link>
                </div>
              )}
            </div>

            {/* Desenvolvimento Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('development')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Desenvolvimento <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'development' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/criacao-sites" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Code size={16} className="mr-3" />
                    Criação de Sites
                  </Link>
                  <Link to="/loja-virtual" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <ShoppingCart size={16} className="mr-3" />
                    Loja Virtual (E-commerce)
                  </Link>
                  <Link to="/seo-completo" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Search size={16} className="mr-3" />
                    SEO Completo
                  </Link>
                </div>
              )}
            </div>

            {/* Outros Serviços Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Outros Serviços <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/dominios" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Globe size={16} className="mr-3" />
                    Domínios
                  </Link>
                  <Link to="/data-centers" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Server size={16} className="mr-3" />
                    Data Centers
                  </Link>
                  <Link to="/object-storage" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Server size={16} className="mr-3" />
                    Object Storage
                  </Link>
                  <Link to="/leilao-dominios" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600" onClick={closeDropdowns}>
                    <Globe size={16} className="mr-3" />
                    Leilão de Domínios
                  </Link>
                </div>
              )}
            </div>

            <Link to="/sobre" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contato
            </Link>
            <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Área do Cliente
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
              Início
            </Link>
            
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-gray-900 bg-gray-50">Hospedagem</div>
              <Link to="/hospedagem" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Hospedagem Web
              </Link>
              <Link to="/vps-cloud" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                VPS Cloud
              </Link>
              <Link to="/servidor-dedicado" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Servidor Dedicado
              </Link>
              <Link to="/revenda-hospedagem" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Revenda de Hospedagem
              </Link>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-gray-900 bg-gray-50">Desenvolvimento</div>
              <Link to="/criacao-sites" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Criação de Sites
              </Link>
              <Link to="/loja-virtual" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Loja Virtual (E-commerce)
              </Link>
              <Link to="/seo-completo" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                SEO Completo
              </Link>
            </div>

            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium text-gray-900 bg-gray-50">Outros Serviços</div>
              <Link to="/dominios" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Domínios
              </Link>
              <Link to="/data-centers" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Data Centers
              </Link>
              <Link to="/object-storage" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Object Storage
              </Link>
              <Link to="/leilao-dominios" className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
                Leilão de Domínios
              </Link>
            </div>

            <Link to="/sobre" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
              Sobre
            </Link>
            <Link to="/contato" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50" onClick={closeDropdowns}>
              Contato
            </Link>
            <Link to="/dashboard" className="block px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700" onClick={closeDropdowns}>
              Área do Cliente
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
