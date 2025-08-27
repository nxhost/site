
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Server, 
  Globe, 
  CreditCard, 
  BarChart3, 
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  Gavel
} from 'lucide-react'
import { lumi } from '../lib/lumi'

const Dashboard: React.FC = () => {
  const [services, setServices] = useState({
    hosting: [],
    domains: [],
    auctions: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserServices()
  }, [])

  const fetchUserServices = async () => {
    try {
      setLoading(true)
      
      // Simular dados do usuário logado
      const mockData = {
        hosting: [
          {
            id: 'host-001',
            name: 'Hospedagem Profissional',
            domain: 'meusite.com.br',
            status: 'active',
            expiresAt: '2025-12-15',
            price: 39.90
          },
          {
            id: 'vps-001',
            name: 'VPS Starter',
            domain: 'app.minhaempresa.com',
            status: 'active',
            expiresAt: '2025-08-20',
            price: 89.90
          }
        ],
        domains: [
          {
            id: 'dom-001',
            domain: 'meusite.com.br',
            status: 'active',
            expiresAt: '2025-06-10',
            price: 40.00
          },
          {
            id: 'dom-002',
            domain: 'minhaempresa.com',
            status: 'active',
            expiresAt: '2025-09-15',
            price: 60.00
          }
        ],
        auctions: [
          {
            id: 'auction-001',
            name: 'Leilões Premium',
            domain: 'leiloes.com.br',
            status: 'active',
            template: 'Modern Marketplace',
            monthlyFee: 199.90
          }
        ]
      }
      
      setServices(mockData)
    } catch (error) {
      console.error('Erro ao carregar serviços:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100'
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'expired': return 'text-red-600 bg-red-100'
      case 'suspended': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />
      case 'pending': return <Clock className="h-4 w-4" />
      case 'expired': return <AlertCircle className="h-4 w-4" />
      case 'suspended': return <AlertCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo'
      case 'pending': return 'Pendente'
      case 'expired': return 'Expirado'
      case 'suspended': return 'Suspenso'
      default: return 'Desconhecido'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const totalServices = services.hosting.length + services.domains.length + services.auctions.length
  const totalMonthly = services.hosting.reduce((sum, h) => sum + h.price, 0) + 
                      services.auctions.reduce((sum, a) => sum + a.monthlyFee, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Gerencie todos os seus serviços em um só lugar</p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <Server className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{services.hosting.length}</h3>
                <p className="text-gray-600">Serviços de Hospedagem</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{services.domains.length}</h3>
                <p className="text-gray-600">Domínios Registrados</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <Gavel className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{services.auctions.length}</h3>
                <p className="text-gray-600">Sites de Leilão</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">R$ {totalMonthly.toFixed(2)}</h3>
                <p className="text-gray-600">Gasto Mensal</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Serviços de Hospedagem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Server className="h-5 w-5 mr-2 text-blue-600" />
                Hospedagem & VPS
              </h2>
            </div>
            <div className="p-6">
              {services.hosting.length > 0 ? (
                <div className="space-y-4">
                  {services.hosting.map((service, index) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-gray-600 text-sm">{service.domain}</p>
                          <p className="text-sm text-gray-500">Expira em: {service.expiresAt}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                            {getStatusIcon(service.status)}
                            <span className="ml-1">{getStatusText(service.status)}</span>
                          </span>
                          <p className="text-sm font-semibold text-gray-900 mt-1">R$ {service.price.toFixed(2)}/mês</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Nenhum serviço de hospedagem contratado</p>
              )}
            </div>
          </motion.div>

          {/* Domínios */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-600" />
                Meus Domínios
              </h2>
            </div>
            <div className="p-6">
              {services.domains.length > 0 ? (
                <div className="space-y-4">
                  {services.domains.map((domain, index) => (
                    <div key={domain.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{domain.domain}</h3>
                          <p className="text-sm text-gray-500">Expira em: {domain.expiresAt}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(domain.status)}`}>
                            {getStatusIcon(domain.status)}
                            <span className="ml-1">{getStatusText(domain.status)}</span>
                          </span>
                          <p className="text-sm font-semibold text-gray-900 mt-1">R$ {domain.price.toFixed(2)}/ano</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Nenhum domínio registrado</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Sites de Leilão */}
        {services.auctions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-white rounded-lg shadow-md"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <Gavel className="h-5 w-5 mr-2 text-purple-600" />
                Sites de Leilão
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.auctions.map((auction, index) => (
                  <div key={auction.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{auction.name}</h3>
                        <p className="text-gray-600 text-sm">{auction.domain}</p>
                        <p className="text-xs text-gray-500">{auction.template}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(auction.status)}`}>
                        {getStatusIcon(auction.status)}
                        <span className="ml-1">{getStatusText(auction.status)}</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-gray-900">R$ {auction.monthlyFee.toFixed(2)}/mês</p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Gerenciar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Ações Rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-lg shadow-md"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Ações Rápidas</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Server className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-medium text-gray-900">Contratar Hospedagem</h3>
                <p className="text-sm text-gray-600">Adicionar novo serviço</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Globe className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-medium text-gray-900">Registrar Domínio</h3>
                <p className="text-sm text-gray-600">Buscar novo domínio</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Gavel className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-medium text-gray-900">Site de Leilão</h3>
                <p className="text-sm text-gray-600">Criar novo site</p>
              </button>
              
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Users className="h-6 w-6 text-orange-600 mb-2" />
                <h3 className="font-medium text-gray-900">Suporte</h3>
                <p className="text-sm text-gray-600">Abrir ticket</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
