
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X, Server, Zap, Shield, Clock } from 'lucide-react'
import { lumi } from '../lib/lumi'
import toast from 'react-hot-toast'

interface HostingPlan {
  _id: string
  planId: string
  name: string
  type: string
  price: number
  storage: string
  bandwidth: string
  domains: number
  emails: number
  databases: number
  ssl: boolean
  backup: boolean
  support: string
  active: boolean
  featured: boolean
  description: string
}

const Hosting: React.FC = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<HostingPlan | null>(null)

  useEffect(() => {
    fetchHostingPlans()
  }, [])

  const fetchHostingPlans = async () => {
    try {
      const { list } = await lumi.entities.hosting_plans.list()
      const sharedPlans = list.filter((plan: HostingPlan) => plan.type === 'shared' && plan.active)
      setPlans(sharedPlans)
    } catch (error) {
      console.error('Erro ao carregar planos:', error)
      toast.error('Erro ao carregar planos de hospedagem')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectPlan = (plan: HostingPlan) => {
    setSelectedPlan(plan)
    toast.success(`Plano ${plan.name} selecionado!`)
  }

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Servidores SSD",
      description: "Performance superior com discos SSD NVMe"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SSL Gratuito",
      description: "Certificado SSL incluído em todos os planos"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "CDN Global",
      description: "Entrega de conteúdo otimizada mundialmente"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Backup Diário",
      description: "Seus dados protegidos com backups automáticos"
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Hospedagem Web Profissional
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Hospedagem confiável, rápida e segura para seu site. 
              99.9% de uptime garantido com suporte 24/7.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu Plano de Hospedagem
            </h2>
            <p className="text-xl text-gray-600">
              Planos flexíveis para todos os tipos de projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-8 relative ${
                  plan.featured ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price.toFixed(2)}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>

                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{plan.storage} de espaço</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{plan.bandwidth} transferência</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{plan.domains} domínio{plan.domains > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{plan.emails} contas de email</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{plan.databases} bancos MySQL</span>
                    </div>
                    <div className="flex items-center">
                      {plan.ssl ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-3" />
                      )}
                      <span>SSL gratuito</span>
                    </div>
                    <div className="flex items-center">
                      {plan.backup ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-3" />
                      )}
                      <span>Backup automático</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Suporte {plan.support}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Contratar Agora
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nossas Garantias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Uptime Garantido</div>
                <p className="text-gray-600">Seus sites sempre online com nossa infraestrutura redundante</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">30</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Dias de Garantia</div>
                <p className="text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Suporte Técnico</div>
                <p className="text-gray-600">Equipe especializada sempre disponível para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plano Selecionado */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Plano Selecionado: {selectedPlan.name}
            </h3>
            <p className="text-gray-600 mb-6">
              Preço: R$ {selectedPlan.price.toFixed(2)}/mês
            </p>
            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Finalizar Compra
              </button>
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 bg-gray-200 text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Hosting
