
import React, { useState, useEffect } from 'react'
import { Search, TrendingUp, Target, BarChart3, Globe, Award, CheckCircle, Zap } from 'lucide-react'
import { lumi } from '../lib/lumi'

interface SEOService {
  _id: string
  serviceId: string
  name: string
  description: string
  price: number
  originalPrice?: number
  duration: string
  keywords: string
  features: string[]
  popular: boolean
}

const SEOServices: React.FC = () => {
  const [services, setServices] = useState<SEOService[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { list } = await lumi.entities.seo_services.list()
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
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SEO Completo
              <span className="block text-orange-300">Para Seu Negócio</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Apareça no topo do Google e aumente suas vendas com nossa estratégia completa de SEO
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Search className="mr-2" size={24} />
                <span>Primeira Página</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-2" size={24} />
                <span>Mais Tráfego</span>
              </div>
              <div className="flex items-center">
                <Target className="mr-2" size={24} />
                <span>Leads Qualificados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que investir em SEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO é o investimento com melhor retorno no marketing digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mais Tráfego</h3>
              <p className="text-gray-600">
                Aumente o tráfego orgânico do seu site em até 300%
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leads Qualificados</h3>
              <p className="text-gray-600">
                Atraia clientes que realmente procuram seus produtos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autoridade</h3>
              <p className="text-gray-600">
                Construa autoridade e credibilidade no seu mercado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Comprovado</h3>
              <p className="text-gray-600">
                Retorno sobre investimento superior a outras estratégias
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
              Nossos Planos de SEO
            </h2>
            <p className="text-xl text-gray-600">
              Do básico ao enterprise, temos o plano ideal para seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${
                  service.popular ? 'ring-2 ring-orange-500 relative' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Mais Popular
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
                      <div className="text-4xl font-bold text-orange-600 mb-1">
                        {formatPrice(service.price)}
                        <span className="text-lg text-gray-500 font-normal">/{service.duration}</span>
                      </div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {formatPrice(service.originalPrice)}
                        </div>
                      )}
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3 mb-6">
                      <div className="text-sm text-orange-600 mb-1">Palavras-chave</div>
                      <div className="font-semibold text-orange-900">{service.keywords}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Começar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de SEO
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para resultados consistentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Auditoria</h3>
              <p className="text-gray-600">
                Análise completa do seu site e concorrência
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Estratégia</h3>
              <p className="text-gray-600">
                Definição de palavras-chave e plano de ação
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execução</h3>
              <p className="text-gray-600">
                Implementação das otimizações e criação de conteúdo
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Monitoramento</h3>
              <p className="text-gray-600">
                Acompanhamento de resultados e ajustes contínuos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600">
              Nossos clientes obtêm resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">+300%</div>
              <div className="text-xl font-semibold mb-2">Aumento no Tráfego</div>
              <p className="text-gray-600">Média de crescimento orgânico dos nossos clientes</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">1ª Página</div>
              <div className="text-xl font-semibold mb-2">Posicionamento</div>
              <p className="text-gray-600">85% das palavras-chave na primeira página do Google</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">ROI 400%</div>
              <div className="text-xl font-semibold mb-2">Retorno Médio</div>
              <p className="text-gray-600">Retorno sobre investimento dos nossos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para dominar o Google?
          </h2>
          <p className="text-xl mb-8">
            Comece hoje mesmo e veja seu negócio crescer exponencialmente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Análise Gratuita
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEOServices
