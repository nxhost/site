
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { lumi } from '../lib/lumi'
import { 
  Globe, 
  Mail, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  HardDrive
} from 'lucide-react'

interface HostingPlan {
  _id?: string
  name: string
  price: number
  originalPrice?: number
  setupFee: number
  features: string[]
  storage: string
  bandwidth: string
  domains: string
  emails: string
  featured?: boolean
}

const Hosting: React.FC = () => {
  const [hostingPlans, setHostingPlans] = useState<HostingPlan[]>([])
  const [loading, setLoading] = useState(true)

  // Função de formatação segura SEM toFixed()
  const formatPrice = (price: number | string | undefined | null): string => {
    if (price === undefined || price === null) {
      console.warn('Hosting: Preço undefined/null:', price)
      return '0,00'
    }
    
    let numValue: number
    
    if (typeof price === 'string') {
      numValue = parseFloat(price)
      if (isNaN(numValue)) {
        console.warn('Hosting: String inválida:', price)
        return '0,00'
      }
    } else if (typeof price === 'number') {
      if (isNaN(price) || !isFinite(price)) {
        console.warn('Hosting: Número inválido:', price)
        return '0,00'
      }
      numValue = price
    } else {
      console.warn('Hosting: Tipo não suportado:', typeof price, price)
      return '0,00'
    }
    
    // Formatação manual SEM toFixed()
    const integerPart = Math.floor(numValue)
    const decimalPart = Math.round((numValue - integerPart) * 100)
    
    return `${integerPart},${decimalPart.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const fetchHostingPlans = async () => {
      try {
        setLoading(true)
        const response = await lumi.entities.hosting_plans.list()
        
        if (response && response.list && Array.isArray(response.list)) {
          // Validar e sanitizar dados
          const validPlans = response.list
            .filter(plan => plan && plan.name)
            .map(plan => ({
              ...plan,
              price: typeof plan.price === 'number' && isFinite(plan.price) ? plan.price : 0,
              originalPrice: typeof plan.originalPrice === 'number' && isFinite(plan.originalPrice) ? plan.originalPrice : undefined,
              setupFee: typeof plan.setupFee === 'number' && isFinite(plan.setupFee) ? plan.setupFee : 0,
              features: Array.isArray(plan.features) ? plan.features : []
            }))
          
          setHostingPlans(validPlans)
        } else {
          console.warn('Hosting: Resposta inválida:', response)
          setHostingPlans([])
        }
      } catch (error) {
        console.error('Erro ao buscar planos de hospedagem:', error)
        setHostingPlans([])
      } finally {
        setLoading(false)
      }
    }

    fetchHostingPlans()
  }, [])

  const handlePurchase = (planName: string) => {
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
            Hospedagem de Sites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hospedagem confiável e rápida para seu site. Recursos profissionais 
            com suporte técnico 24/7 em português.
          </motion.p>
        </div>

        {/* Hosting Plans */}
        {hostingPlans.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {hostingPlans.map((plan, index) => (
              <div
                key={plan._id || index}
                className={`bg-white rounded-xl shadow-lg p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.featured 
                    ? 'border-cyan-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">R$ {formatPrice(plan.price)}</span>
                      <span className="text-gray-600 ml-1">/mês</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500">
                        <span className="line-through">R$ {formatPrice(plan.originalPrice)}</span>
                        <span className="text-green-600 font-semibold ml-2">Economia!</span>
                      </div>
                    )}
                    {plan.setupFee > 0 && (
                      <div className="text-sm text-gray-500">
                        Taxa de setup: R$ {formatPrice(plan.setupFee)}
                      </div>
                    )}
                  </div>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <HardDrive className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{plan.storage || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Database className="h-4 w-4 text-green-500 mr-2" />
                      <span>{plan.bandwidth || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-purple-500 mr-2" />
                      <span>{plan.domains || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-orange-500 mr-2" />
                      <span>{plan.emails || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handlePurchase(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center ${
                      plan.featured
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
            <p className="text-gray-500 text-lg">Nenhum plano de hospedagem disponível no momento.</p>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Por que escolher nossa hospedagem?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança Avançada</h3>
              <p className="text-gray-600">SSL gratuito, backup automático e proteção contra malware</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Otimizada</h3>
              <p className="text-gray-600">Servidores SSD, CDN gratuito e otimização para WordPress</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Facilidade de Uso</h3>
              <p className="text-gray-600">Painel cPanel intuitivo e instalação automática de aplicações</p>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Recursos Inclusos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tecnologia</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Armazenamento SSD de alta velocidade</li>
                <li>• PHP 8.x, MySQL, PostgreSQL</li>
                <li>• Certificado SSL gratuito</li>
                <li>• CDN CloudFlare incluído</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Suporte e Garantias</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Suporte 24/7 em português</li>
                <li>• Backup automático diário</li>
                <li>• Garantia de uptime 99.9%</li>
                <li>• Migração gratuita</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosting
