
import React from 'react'
import { Link } from 'react-router-dom'
import { Server, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">HostingPro</span>
            </div>
            <p className="text-gray-300 text-sm">
              Sua plataforma completa para hospedagem web, servidores dedicados, VPS, 
              registro de domínios e instalação de sites de leilão.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hospedagem" className="text-gray-300 hover:text-white transition-colors">
                  Hospedagem Web
                </Link>
              </li>
              <li>
                <Link to="/vps" className="text-gray-300 hover:text-white transition-colors">
                  Servidores VPS
                </Link>
              </li>
              <li>
                <Link to="/servidores-dedicados" className="text-gray-300 hover:text-white transition-colors">
                  Servidores Dedicados
                </Link>
              </li>
              <li>
                <Link to="/dominios" className="text-gray-300 hover:text-white transition-colors">
                  Registro de Domínios
                </Link>
              </li>
              <li>
                <Link to="/sites-leilao" className="text-gray-300 hover:text-white transition-colors">
                  Sites de Leilão
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/suporte" className="text-gray-300 hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Área do Cliente
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Status dos Serviços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">(11) 4000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contato@hostingpro.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Certificações */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Certificações</h4>
              <div className="flex space-x-2">
                <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">SSL</div>
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">ISO 27001</div>
                <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded">LGPD</div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 HostingPro. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
