
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Server, Cpu, HardDrive, Wifi, Shield, CheckCircle } from 'lucide-react'
import { lumi } from '../lib/lumi'
import toast from 'react-hot-toast'

interface VPSPlan {
  _id: string
  planId: string
  name: string
  price: number
  storage: string
  bandwidth: string
  description: string
  featured: boolean
  cpu: string
  ram: string
  ssd: string
  transfer: string
}

const VPS: React.FC = () => {
  const [plans, setPlans] = useState<VPSPlan[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState<VPSPlan | null>(null)

  useEffect(() => {
    fetchVPSPlans()
  }, [])

  const fetchVPSPlans = async () => {
    try {
      const { list } = await lumi.entities.hosting_plans.list()
      const vpsPlans = list.filter((plan: any) => plan.type === 'vps' && plan.active)
      
      // Adicionar dados técnicos simulados
      const enhancedPlans = vpsPlans.map((plan: any) => ({
        ...plan,
        cpu: plan.name.includes('Starter') ? '2 vCPUs' : plan.name.includes('Business') ? '4 vCPUs' : '8 vCPUs',
        ram: plan.name.includes('Starter') ? '4GB RAM' : plan.name.includes('Business') ? '8GB RAM' : '16GB RAM',
        ssd: plan.storage,
        transfer: plan.bandwidth
      }))
      
      setPlans(enhancedPlans)
    } catch (error) {
      console.error('Erro ao carregar planos VPS:', error)
      toast.error('Erro ao carregar planos VPS')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectPlan = (plan: VPSPlan) => {
    setSelectedPlan(plan)
    toast.success(`VPS ${plan.name} selecionado!`)
  }

  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "CPU Dedicada",
      description: "Processadores dedicados para máxima performance"
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "SSD NVMe",
      description: "Armazenamento ultrarrápido para aplicações críticas"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Rede Redundante",
      description: "Conectividade garantida com múltiplas rotas"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Firewall Dedicado",
      description: "Proteção avançada contra ataques DDoS"
    }
  ]

  const vpsFeatures = [
    "Acesso root completo",
    "Escolha do sistema operacional",
    "Backup automático diário",
    "Monitoramento 24/7",
    "IPv4 e IPv6 incluídos",
    "Painel de controle avançado",
    "Suporte técnico especializado",
    "SLA de 99.9% uptime"
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
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Servidores VPS de Alta Performance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
            >
              Recursos dedicados, controle total e escalabilidade para suas aplicações. 
              Ideal para desenvolvedores e empresas que precisam de mais poder.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recursos VPS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vantagens do VPS
            </h2>
            <p className="text-xl text-gray-600">
              Recursos dedicados com a flexibilidade que você precisa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lista de recursos incluídos */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recursos Incluídos em Todos os Planos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {vpsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planos VPS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos VPS Flexíveis
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a configuração ideal para seu projeto
            </p>
          </div>

          {plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg p-8 relative ${
                    plan.featured ? 'ring-2 ring-indigo-500 transform scale-105' : ''
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Recomendado
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

                    {/* Especificações Técnicas */}
                    <div className="space-y-4 mb-8 text-left bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600">CPU:</span>
                        <span className="font-semibold">{plan.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">RAM:</span>
                        <span className="font-semibold">{plan.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">SSD:</span>
                        <span className="font-semibold">{plan.ssd}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transferência:</span>
                        <span className="font-semibold">{plan.transfer}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectPlan(plan)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.featured
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Contratar VPS
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Server className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Configurando Planos VPS
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos preparando nossos planos VPS personalizados para você.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Configuração Personalizada Disponível
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">VPS Básico</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 2 vCPUs</li>
                      <li>• 4GB RAM</li>
                      <li>• 100GB SSD</li>
                      <li>• 1TB Transfer</li>
                      <li>• R$ 89,90/mês</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">VPS Avançado</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 4 vCPUs</li>
                      <li>• 8GB RAM</li>
                      <li>• 200GB SSD</li>
                      <li>• 2TB Transfer</li>
                      <li>• R$ 179,90/mês</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Solicitar Configuração Personalizada
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sistemas Operacionais */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sistemas Operacionais Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o SO que melhor atende suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Ubuntu 22.04 LTS',
              'CentOS 8',
              'Debian 11',
              'Windows Server 2022',
              'Rocky Linux 9',
              'AlmaLinux 9'
            ].map((os, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                <Server className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">{os}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de uma configuração específica?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Nossa equipe pode criar um VPS personalizado para suas necessidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Configuração Personalizada
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Modal do Plano Selecionado */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              VPS Selecionado: {selectedPlan.name}
            </h3>
            <div className="space-y-2 mb-6">
              <p><strong>CPU:</strong> {selectedPlan.cpu}</p>
              <p><strong>RAM:</strong> {selectedPlan.ram}</p>
              <p><strong>SSD:</strong> {selectedPlan.ssd}</p>
              <p><strong>Transferência:</strong> {selectedPlan.transfer}</p>
              <p><strong>Preço:</strong> R$ {selectedPlan.price.toFixed(2)}/mês</p>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Contratar Agora
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

export default VPS
