
import React, { useState, useEffect } from 'react'
import { Globe, Smartphone, Search, Award, Clock, CheckCircle } from 'lucide-react'
import { lumi } from '../lib/lumi'

interface WebsiteService {
  _id: string
  serviceId: string
  name: string
  description: string
  price: number
  originalPrice?: number
  deliveryTime: string
  features: string[]
  category: string
  popular: boolean
}

const WebsiteCreation: React.FC = () => {
  const [services, setServices] = useState<WebsiteService[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { list } = await lumi.entities.website_services.list()
        setServices(list || [])
      } catch (error) {
        console.error('Erro ao carregar serviços:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const categories = [
    { id: 'all', name: 'Todos os Serviços', icon: Globe },
    { id: 'institucional', name: 'Sites Institucionais', icon: Award },
    { id: 'ecommerce', name: 'E-commerce', icon: Smartphone },
    { id: 'blog', name: 'Blogs', icon: Search },
    { id: 'portfolio', name: 'Portfólios', icon: Award },
    { id: 'landing', name: 'Landing Pages', icon: CheckCircle }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Criação de Sites
              <span className="block text-blue-300">Profissionais</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Desenvolvemos sites modernos, responsivos e otimizados para seu negócio crescer na internet
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Globe className="mr-2" size={24} />
                <span>Design Responsivo</span>
              </div>
              <div className="flex items-center">
                <Search className="mr-2" size={24} />
                <span>SEO Otimizado</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={24} />
                <span>Entrega Rápida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  <IconComponent size={20} className="mr-2" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service._id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105 ${
                  service.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                      <div className="text-4xl font-bold text-blue-600 mb-1">
                        {formatPrice(service.price)}
                      </div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          {formatPrice(service.originalPrice)}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center text-green-600 mb-6">
                      <Clock size={16} className="mr-2" />
                      <span className="font-medium">{service.deliveryTime}</span>
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

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a NXHost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas em desenvolvimento web com anos de experiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Responsivo</h3>
              <p className="text-gray-600">
                Sites que funcionam perfeitamente em todos os dispositivos
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Otimizado</h3>
              <p className="text-gray-600">
                Otimização completa para mecanismos de busca
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Prazos cumpridos e entregas no tempo combinado
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">
                Desenvolvimento profissional com as melhores práticas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para ter seu site profissional?
          </h2>
          <p className="text-xl mb-8">
            Entre em contato conosco e receba um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Falar com Especialista
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Ver Portfólio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteCreation
