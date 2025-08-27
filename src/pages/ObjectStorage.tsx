
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { lumi } from '../lib/lumi'
import { 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Download,
  Upload,
  Lock,
  Globe,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'

interface ObjectStoragePlan {
  _id?: string
  name: string
  description: string
  storage: string
  bandwidth: string
  requests: string
  features: string[]
  pricing: {
    storage: string
    bandwidth: string
    requests: string
  }
  popular?: boolean
  active: boolean
}

const ObjectStorage: React.FC = () => {
  const [storagePlans, setStoragePlans] = useState<ObjectStoragePlan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStoragePlans = async () => {
      try {
        setLoading(true)
        const response = await lumi.entities.object_storage.list()
        
        if (response && response.list && Array.isArray(response.list)) {
          const activePlans = response.list.filter(plan => plan && plan.active)
          setStoragePlans(activePlans)
        } else {
          console.warn('ObjectStorage: Resposta inválida:', response)
          setStoragePlans([])
        }
      } catch (error) {
        console.error('Erro ao buscar planos de object storage:', error)
        setStoragePlans([])
      } finally {
        setLoading(false)
      }
    }

    fetchStoragePlans()
  }, [])

  const handleGetStarted = (planName: string) => {
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
            Object Storage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Armazenamento de objetos escalável e seguro para suas aplicações. 
            Compatible com S3 API para máxima flexibilidade.
          </motion.p>
        </div>

        {/* Storage Plans */}
        {storagePlans.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {storagePlans.map((plan, index) => (
              <div
                key={plan._id || index}
                className={`bg-white rounded-xl shadow-lg p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-cyan-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Armazenamento:</span>
                      <span className="font-semibold">{plan.storage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Largura de banda:</span>
                      <span className="font-semibold">{plan.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Requisições:</span>
                      <span className="font-semibold">{plan.requests}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Preços</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Storage:</span>
                        <span>{plan.pricing?.storage || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bandwidth:</span>
                        <span>{plan.pricing?.bandwidth || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Requests:</span>
                        <span>{plan.pricing?.requests || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {(plan.features || []).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleGetStarted(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum plano de object storage disponível no momento.</p>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Por que escolher nosso Object Storage?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Escalabilidade Ilimitada</h3>
              <p className="text-gray-600">Escale de gigabytes a petabytes sem limites de capacidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Durabilidade 99.999999999%</h3>
              <p className="text-gray-600">Seus dados protegidos com replicação automática</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">API S3 Compatível</h3>
              <p className="text-gray-600">Integração fácil com ferramentas e aplicações existentes</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Casos de Uso
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aplicações Web</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Armazenamento de assets estáticos</li>
                <li>• CDN para distribuição global</li>
                <li>• Backup de bancos de dados</li>
                <li>• Arquivos de usuários e uploads</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Empresas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Arquivo de documentos corporativos</li>
                <li>• Backup e disaster recovery</li>
                <li>• Data lake e analytics</li>
                <li>• Distribuição de conteúdo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ObjectStorage
