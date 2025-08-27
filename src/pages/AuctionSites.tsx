
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Gavel, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  Globe, 
  Smartphone,
  BarChart3,
  Shield,
  CheckCircle,
  Star
} from 'lucide-react'
import { lumi } from '../lib/lumi'
import toast from 'react-hot-toast'

interface AuctionTemplate {
  id: string
  name: string
  price: number
  monthlyFee: number
  description: string
  features: string[]
  image: string
  popular: boolean
}

const AuctionSites: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<AuctionTemplate | null>(null)
  const [formData, setFormData] = useState({
    siteName: '',
    domain: '',
    email: '',
    currency: 'BRL',
    template: ''
  })

  const templates: AuctionTemplate[] = [
    {
      id: 'classic',
      name: 'Classic Auction',
      price: 999.00,
      monthlyFee: 99.90,
      description: 'Template clássico para leilões tradicionais',
      features: [
        'Sistema de lances básico',
        'Painel administrativo',
        'Gestão de usuários',
        'Relatórios básicos',
        'Suporte por email'
      ],
      image: 'https://images.pexels.com/photos/6292/red-hand-wood-hammer.jpg?w=400',
      popular: false
    },
    {
      id: 'modern',
      name: 'Modern Marketplace',
      price: 1499.00,
      monthlyFee: 199.90,
      description: 'Design moderno com recursos avançados',
      features: [
        'Sistema de lances em tempo real',
        'Múltiplas categorias',
        'App móvel básico',
        'Gateway de pagamento',
        'Analytics avançado',
        'Suporte prioritário'
      ],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?w=400',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Enterprise',
      price: 2499.00,
      monthlyFee: 299.90,
      description: 'Solução completa para grandes volumes',
      features: [
        'Sistema de lances avançado',
        'Multi-idioma',
        'App móvel completo',
        'Múltiplos gateways de pagamento',
        'IA para recomendações',
        'API completa',
        'Suporte 24/7 dedicado'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400',
      popular: false
    }
  ]

  const handleTemplateSelect = (template: AuctionTemplate) => {
    setSelectedTemplate(template)
    setFormData(prev => ({ ...prev, template: template.id }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedTemplate) {
      toast.error('Selecione um template primeiro')
      return
    }

    try {
      // Simular criação da instalação
      const installationData = {
        siteId: `AUCTION-${Date.now()}`,
        clientId: 'current_user',
        domain: formData.domain,
        template: selectedTemplate.id,
        status: 'installing',
        installationDate: new Date().toISOString(),
        configuration: {
          siteName: formData.siteName,
          currency: formData.currency,
          timezone: 'America/Sao_Paulo',
          adminEmail: formData.email
        },
        price: selectedTemplate.price,
        monthlyFee: selectedTemplate.monthlyFee
      }

      await lumi.entities.auction_sites.create(installationData)
      
      toast.success('Instalação iniciada! Você receberá um email com os detalhes.')
      
      // Reset form
      setFormData({
        siteName: '',
        domain: '',
        email: '',
        currency: 'BRL',
        template: ''
      })
      setSelectedTemplate(null)
      
    } catch (error) {
      console.error('Erro ao criar instalação:', error)
      toast.error('Erro ao processar solicitação. Tente novamente.')
    }
  }

  const features = [
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Sistema de Leilões Completo",
      description: "Plataforma robusta para leilões online com todas as funcionalidades necessárias"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gestão de Usuários",
      description: "Sistema completo de cadastro, perfis e verificação de usuários"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Pagamentos Integrados",
      description: "Múltiplos gateways de pagamento para facilitar as transações"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Aplicativo Móvel",
      description: "App nativo para iOS e Android incluído nos planos avançados"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Sites de Leilão Profissionais
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-purple-100 max-w-3xl mx-auto"
            >
              Instale seu próprio site de leilões com templates profissionais, 
              sistema de pagamentos e todas as funcionalidades necessárias.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recursos Incluídos
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para criar um site de leilões profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-purple-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu Template
            </h2>
            <p className="text-xl text-gray-600">
              Templates profissionais com diferentes níveis de recursos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  template.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
                } ${selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500' : ''}`}
              >
                {template.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Mais Popular
                    </span>
                  </div>
                )}

                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      R$ {template.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">
                      + R$ {template.monthlyFee.toFixed(2)}/mês manutenção
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleTemplateSelect(template)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      selectedTemplate?.id === template.id
                        ? 'bg-blue-600 text-white'
                        : template.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedTemplate?.id === template.id ? 'Selecionado' : 'Selecionar Template'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Instalação */}
      {selectedTemplate && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Configure sua Instalação
              </h2>
              <p className="text-xl text-gray-600">
                Template selecionado: <span className="font-semibold">{selectedTemplate.name}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome do Site
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.siteName}
                    onChange={(e) => setFormData(prev => ({ ...prev, siteName: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Meu Site de Leilões"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Domínio
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.domain}
                    onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="meusite.com.br"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email do Administrador
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="admin@meusite.com.br"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Moeda Padrão
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData(prev => ({ ...prev, currency: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="BRL">Real Brasileiro (R$)</option>
                    <option value="USD">Dólar Americano ($)</option>
                    <option value="EUR">Euro (€)</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Resumo do Pedido:</h3>
                <div className="text-sm text-gray-600">
                  <div>Template: {selectedTemplate.name}</div>
                  <div>Instalação: R$ {selectedTemplate.price.toFixed(2)}</div>
                  <div>Manutenção: R$ {selectedTemplate.monthlyFee.toFixed(2)}/mês</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Solicitar Instalação
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Garantias */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Nossas Garantias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instalação Garantida</h3>
              <p>Seu site estará funcionando em até 48 horas ou devolvemos seu dinheiro</p>
            </div>
            <div className="text-white">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Otimizada</h3>
              <p>Sites otimizados para alta performance e grandes volumes de usuários</p>
            </div>
            <div className="text-white">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
              <p>Equipe especializada em sites de leilão disponível para ajudar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuctionSites
