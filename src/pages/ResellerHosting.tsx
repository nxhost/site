
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { lumi } from '../lib/lumi'
import { 
  Users, 
  HardDrive, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Settings
} from 'lucide-react'

interface ResellerPlan {
  _id?: string
  name: string
  price: number
  setupFee: number
  features: string[]
  diskSpace: string
  bandwidth: string
  accounts: string
  popular?: boolean
}

const ResellerHosting: React.FC = () => {
  const [resellerPlans, setResellerPlans] = useState<ResellerPlan[]>([])
  const [loading, setLoading] = useState(true)

  // Função de formatação segura SEM toFixed()
  const formatPrice = (price: number | string | undefined | null): string => {
    if (price === undefined || price === null) {
      console.warn('ResellerHosting: Preço undefined/null:', price)
      return '0,00'
    }
    
    let numValue: number
    
    if (typeof price === 'string') {
      numValue = parseFloat(price)
      if (isNaN(numValue)) {
        console.warn('ResellerHosting: String inválida:', price)
        return '0,00'
      }
    } else if (typeof price === 'number') {
      if (isNaN(price) || !isFinite(price)) {
        console.warn('ResellerHosting: Número inválido:', price)
        return '0,00'
      }
      numValue = price
    } else {
      console.warn('ResellerHosting: Tipo não suportado:', typeof price, price)
      return '0,00'
    }
    
    // Formatação manual SEM toFixed()
    const integerPart = Math.floor(numValue)
    const decimalPart = Math.round((numValue - integerPart) * 100)
    
    return `${integerPart},${decimalPart.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const fetchResellerPlans = async () => {
      try {
        setLoading(true)
        const response = await lumi.entities.reseller_hosting.list()
        
        if (response && response.list && Array.isArray(response.list)) {
          // Validar e sanitizar dados
          const validPlans = response.list
            .filter(plan => plan && plan.name)
            .map(plan => ({
              ...plan,
              price: typeof plan.price === 'number' && isFinite(plan.price) ? plan.price : 0,
              setupFee: typeof plan.setupFee === 'number' && isFinite(plan.setupFee) ? plan.setupFee : 0,
              features: Array.isArray(plan.features) ? plan.features : []
            }))
          
          setResellerPlans(validPlans)
        } else {
          console.warn('ResellerHosting: Resposta inválida:', response)
          setResellerPlans([])
        }
      } catch (error) {
        console.error('Erro ao buscar planos de revenda:', error)
        setResellerPlans([])
      } finally {
        setLoading(false)
      }
    }

    fetchResellerPlans()
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
            Revenda de Hospedagem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Planos compartilhados ideais para sites com baixa demanda de recursos. 
            Perfeito para sites mais leves e projetos pessoais.
          </motion.p>
        </div>

        {/* Reseller Plans */}
        {resellerPlans.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {resellerPlans.map((plan, index) => (
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
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">R$ {formatPrice(plan.price)}</span>
                      <span className="text-gray-600 ml-1">/mês</span>
                    </div>
                    {plan.setupFee > 0 && (
                      <div className="text-sm text-gray-500">
                        Taxa de setup: R$ {formatPrice(plan.setupFee)}
                      </div>
                    )}
                  </div>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-1 gap-3 mb-6 text-sm">
                    <div className="flex items-center justify-center">
                      <HardDrive className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{plan.diskSpace || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Database className="h-4 w-4 text-green-500 mr-2" />
                      <span>{plan.bandwidth || 'N/A'}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="h-4 w-4 text-purple-500 mr-2" />
                      <span>{plan.accounts || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handlePurchase(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center ${
                      plan.popular
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
            <p className="text-gray-500 text-lg">Nenhum plano de revenda disponível no momento.</p>
          </div>
        )}

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Vantagens da Revenda de Hospedagem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marca Própria</h3>
              <p className="text-gray-600">Suporte white label completo para você construir sua própria marca</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Painel WHM/cPanel</h3>
              <p className="text-gray-600">Controle total com painéis profissionais para gerenciar suas contas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recursos Inclusos</h3>
              <p className="text-gray-600">SSL gratuito, backup automático e suporte técnico para seus clientes</p>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            O que está Incluído
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Para Você</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Painel WHM para gerenciar contas</li>
                <li>• Marca própria personalizada</li>
                <li>• Suporte white label</li>
                <li>• Recursos de automação</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Para Seus Clientes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Painel cPanel intuitivo</li>
                <li>• SSL gratuito para todos</li>
                <li>• Backup automático diário</li>
                <li>• Suporte técnico 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResellerHosting
