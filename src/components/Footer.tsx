
import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'VPS Cloud', path: '/vps-cloud' },
    { name: 'Servidores Dedicados', path: '/servidores-dedicados' },
    { name: 'Object Storage', path: '/object-storage' },
    { name: 'Hospedagem Web', path: '/hospedagem-web' },
    { name: 'Domínios & SSL', path: '/dominios-ssl' }
  ]

  const company = [
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Data Centers', path: '/data-centers' },
    { name: 'Preços', path: '/precos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Blog', path: '/blog' }
  ]

  const support = [
    { name: 'Central de Ajuda', path: '/suporte' },
    { name: 'Documentação', path: '/docs' },
    { name: 'Status dos Serviços', path: '/status' },
    { name: 'Política de Privacidade', path: '/privacidade' },
    { name: 'Termos de Uso', path: '/termos' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                NXHost.net
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Cloud hosting de nova geração com infraestrutura de alta performance, 
              suporte premium 24/7 em português e data centers estratégicos no Brasil.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-cyan-400" />
                <span>contato@nxhost.net</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-cyan-400" />
                <span>+55 (11) 3000-0000</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} NXHost.net. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
