
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'
import { useServices } from '../hooks/useServices'
import LoadingSpinner from '../components/LoadingSpinner'
import { 
  Server, 
  Globe, 
  Database, 
  Activity, 
  Calendar, 
  CreditCard,
  Settings,
  AlertCircle,
  CheckCircle,
  Clock,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'

const MyServices: React.FC = () => {
  const { user, isAuthenticated, signIn } = useAuth()
  const { getUserServices, loading } = useServices()
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    if (isAuthenticated && user) {
      loadUserServices()
    }
  }, [isAuthenticated, user])

  const loadUserServices = async () => {
    if (!user) return
    try {
      const userServices = await getUserServices(user.userId)
      setServices(userServices)
    } catch (error) {
      console.error('Error loading services:', error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ativo': return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'suspenso': return <Pause className="h-5 w-5 text-yellow-500" />
      case 'processando': return <Clock className="h-5 w-5 text-blue-500" />
      case 'provisionando': return <Activity className="h-5 w-5 text-purple-500" />
      case 'cancelado': return <AlertCircle className="h-5 w-5 text-red-500" />
      default: return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-green-100 text-green-800'
      case 'suspenso': return 'bg-yellow-100 text-yellow-800'
      case 'processando': return 'bg-blue-100 text-blue-800'
      case 'provisionando': return 'bg-purple-100 text-purple-800'
      case 'cancelado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case 'vps': return <Server className="h-6 w-6 text-blue-600" />
      case 'dedicated': return <Database className="h-6 w-6 text-purple-600" />
      case 'hosting': return <Globe className="h-6 w-6 text-green-600" />
      case 'domain': return <Globe className="h-6 w-6 text-orange-600" />
      default: return <Server className="h-6 w-6 text-gray-600" />
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="mb-6">
            <Server className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Acesso Restrito</h2>
            <p className="text-gray-600">Faça login para visualizar seus serviços</p>
          </div>
          <button
            onClick={signIn}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Fazer Login
          </button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="lg" text="Carregando seus serviços..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Meus Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Gerencie todos os seus serviços NXHost em um só lugar
          </motion.p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Serviços Ativos</p>
                <p className="text-2xl font-bold text-green-600">
                  {services.filter(s => s.status === 'ativo').length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Em Processamento</p>
                <p className="text-2xl font-bold text-blue-600">
                  {services.filter(s => ['processando', 'provisionando'].includes(s.status)).length}
                </p>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Gasto Mensal</p>
                <p className="text-2xl font-bold text-purple-600">
                  R$ {services.reduce((total, service) => total + (service.billingCycle === 'mensal' ? service.totalValue : 0), 0).toFixed(2)}
                </p>
              </div>
              <CreditCard className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total de Serviços</p>
                <p className="text-2xl font-bold text-gray-900">{services.length}</p>
              </div>
              <Server className="h-8 w-8 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Services List */}
        {services.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Server className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum serviço encontrado</h3>
            <p className="text-gray-600 mb-6">Você ainda não possui serviços ativos. Que tal começar agora?</p>
            <div className="flex justify-center gap-4">
              <a href="/vps-cloud" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contratar VPS
              </a>
              <a href="/servidores-dedicados" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Ver Dedicados
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {getServiceIcon(service.serviceType)}
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold text-gray-900">{service.planName}</h3>
                      <p className="text-sm text-gray-600">Pedido: {service.orderId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                      <span className="ml-1 capitalize">{service.status}</span>
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Settings className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Informações do Serviço</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Tipo: {service.serviceType.toUpperCase()}</p>
                      <p>Valor: R$ {service.totalValue}/mês</p>
                      <p>Ciclo: {service.billingCycle}</p>
                    </div>
                  </div>

                  {service.serverInfo && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Servidor</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Hostname: {service.serverInfo.hostname}</p>
                        <p>IP: {service.serverInfo.ipAddress}</p>
                        <p>Datacenter: {service.serverInfo.datacenter}</p>
                      </div>
                    </div>
                  )}

                  {service.domainInfo && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Domínio</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Domínio: {service.domainInfo.domain}</p>
                        <p>Registrar: {service.domainInfo.registrar}</p>
                        <p>Expira: {new Date(service.domainInfo.expirationDate).toLocaleDateString('pt-BR')}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Datas Importantes</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Criado: {new Date(service.createdAt).toLocaleDateString('pt-BR')}</p>
                      {service.activatedAt && (
                        <p>Ativado: {new Date(service.activatedAt).toLocaleDateString('pt-BR')}</p>
                      )}
                      {service.nextBilling && (
                        <p>Próxima cobrança: {new Date(service.nextBilling).toLocaleDateString('pt-BR')}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  {service.status === 'ativo' && (
                    <>
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Settings className="h-4 w-4 mr-2" />
                        Gerenciar
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reiniciar
                      </button>
                    </>
                  )}
                  
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Calendar className="h-4 w-4 mr-2" />
                    Histórico
                  </button>
                  
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Faturas
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyServices
