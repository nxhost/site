
import React, { useState, useEffect } from 'react'
import { ShoppingCart, CreditCard, BarChart3, Users, Shield, Zap, CheckCircle, Star } from 'lucide-react'
import { lumi } from '../lib/lumi'

interface EcommerceService {
  _id: string
  serviceId: string
  name: string
  description: string
  price: number
  originalPrice?: number
  deliveryTime: string
  productLimit: string
  features: string[]
  popular: boolean
}

const EcommerceServices: React.FC = () => {
  const [services, setServices] = useState<EcommerceService[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { list } = await lumi.entities.ecommerce_services.list()
        setServices(list || [])
      } catch (error) {
        console.error('Erro ao carregar serviços:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Loja Virtual
              <span className="block text-green-300">Completa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              E-commerce profissional com todos os recursos para vender online com segurança e eficiência
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <ShoppingCart className="mr-2" size={24} />
                <span>Carrinho Avançado</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="mr-2" size={24} />
                <span>Pagamentos Seguros</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="mr-2" size={24} />
                <span>Relatórios Completos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Completo e Profissional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todas as funcionalidades que você precisa para vender online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Carrinho Inteligente</h3>
              <p className="text-gray-600">
                Carrinho com recuperação automática e sugestões de produtos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagamentos Seguros</h3>
              <p className="text-gray-600">
                Integração com principais gateways de pagamento do Brasil
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Avançado</h3>
              <p className="text-gray-600">
                Relatórios detalhados de vendas, estoque e comportamento
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Total</h3>
              <p className="text-gray-600">
                SSL, PCI compliance e proteção contra fraudes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-xl text-gray-600">
              Do pequeno negócio ao grande marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${
                  service.popular ? 'ring-2 ring-green-500 relative' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star size={14} className="mr-1" />
                    Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-600 mb-1">
                        {formatPrice(service.price)}
                      </div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {formatPrice(service.originalPrice)}
                        </div>
                      )}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-6">
                      <div className="text-sm text-gray-600 mb-1">Prazo de Entrega</div>
                      <div className="font-semibold text-gray-900">{service.deliveryTime}</div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3 mb-6">
                      <div className="text-sm text-blue-600 mb-1">Produtos</div>
                      <div className="font-semibold text-blue-900">{service.productLimit}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia de Ponta
            </h2>
            <p className="text-xl text-gray-600">
              Utilizamos as melhores tecnologias do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">
                Carregamento ultra-rápido com CDN global e otimização avançada
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">
                Proteção completa contra ataques e conformidade com LGPD
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidade</h3>
              <p className="text-gray-600">
                Infraestrutura que cresce junto com seu negócio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a vender online hoje mesmo!
          </h2>
          <p className="text-xl mb-8">
            Transforme seu negócio com uma loja virtual profissional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Demonstração
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Ver Cases de Sucesso
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcommerceServices
