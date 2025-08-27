
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { lumi } from '../lib/lumi'
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Database
} from 'lucide-react'

interface DedicatedServer {
  _id?: string
  name: string
  price: number
  setupFee: number
  features: string[]
  cpu: string
  ram: string
  storage: string
  bandwidth: string
  popular?: boolean
}

const DedicatedServers: React.FC = () => {
  const [servers, setServers] = useState<DedicatedServer[]>([])
  const [loading, setLoading] = useState(true)

  // Função de formatação segura SEM toFixed()
  const formatPrice = (price: number | string | undefined | null): string => {
    if (price === undefined || price === null) {
      console.warn('DedicatedServers: Preço undefined/null:', price)
      return '0,00'
    }
    
    let numValue: number
    
    if (typeof price === 'string') {
      numValue = parseFloat(price)
      if (isNaN(numValue)) {
        console.warn('DedicatedServers: String inválida:', price)
        return '0,00'
      }
    } else if (typeof price === 'number') {
      if (isNaN(price) || !isFinite(price)) {
        console.warn('DedicatedServers: Número inválido:', price)
        return '0,00'
      }
      numValue = price
    } else {
      console.warn('DedicatedServers: Tipo não suportado:', typeof price, price)
      return '0,00'
    }
    
    // Formatação manual SEM toFixed()
    const integerPart = Math.floor(numValue)
    const decimalPart = Math.round((numValue - integerPart) * 100)
    
    return `${integerPart},${decimalPart.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const fetchServers = async () => {
      try {
        setLoading(true)
        const response = await lumi.entities.dedicated_servers.list()
        
        if (response && response.list && Array.isArray(response.list)) {
          // Validar e sanitizar dados
          const validServers = response.list
            .filter(server => server && server.name)
            .map(server => ({
              ...server,
              price: typeof server.price === 'number' && isFinite(server.price) ? server.price : 0,
              setupFee: typeof server.setupFee === 'number' && isFinite(server.setupFee) ? server.setupFee : 0,
              features: Array.isArray(server.features) ? server.features : []
            }))
          
          setServers(validServers)
        } else {
          console.warn('DedicatedServers: Resposta inválida:', response)
          setServers([])
        }
      } catch (error) {
        console.error('Erro ao buscar servidores dedicados:', error)
        setServers([])
      } finally {
        setLoading(false)
      }
    }

    fetchServers()
  }, [])

  const handlePurchase = (serverName: string) => {
    window.open('https://nxhost.com.br/cliente/store/hospedagem-de-sites', '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Servidores Dedicados
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Máxima performance e controle total com servidores físicos dedicados exclusivamente 
            para seu projeto. Hardware premium e suporte especializado.
          </motion.p>
        </div>

        {/* Server Plans */}
        {servers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {servers.map((server, index) => (
              <div
                key={server._id || index}
                className={`bg-white rounded-xl shadow-lg p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
                  server.popular 
                    ? 'border-cyan-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {server.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{server.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">R$ {formatPrice(server.price)}</span>
                      <span className="text-gray-600 ml-1">/mês</span>
                    </div>
                    {server.setupFee > 0 && (
                      <div className="text-sm text-gray-500">
                        Taxa de setup: R$ {formatPrice(server.setupFee)}
                      </div>
                    )}
                  </div>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{server.cpu || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Server className="h-4 w-4 text-green-500 mr-2" />
                      <span>{server.ram || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-purple-500 mr-2" />
                      <span>{server.storage || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Wifi className="h-4 w-4 text-orange-500 mr-2" />
                      <span>{server.bandwidth || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {server.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handlePurchase(server.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center ${
                      server.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Contratar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum servidor dedicado disponível no momento.</p>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Vantagens dos Servidores Dedicados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recursos Exclusivos</h3>
              <p className="text-gray-600">100% dos recursos do servidor dedicados exclusivamente ao seu projeto</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Máxima</h3>
              <p className="text-gray-600">Hardware enterprise com processadores Intel Xeon e discos SSD NVMe</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customização Total</h3>
              <p className="text-gray-600">Configure o servidor exatamente como precisa, com acesso root completo</p>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Especificações e Garantias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hardware Premium</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Processadores Intel Xeon de última geração</li>
                <li>• Memória RAM DDR4 ECC</li>
                <li>• Discos SSD NVMe enterprise</li>
                <li>• Conexão de rede 1Gbps dedicada</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Suporte e Garantias</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SLA de 99.9% de uptime</li>
                <li>• Suporte técnico 24/7 especializado</li>
                <li>• IPMI/KVM para acesso remoto</li>
                <li>• Backup automático opcional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DedicatedServers
