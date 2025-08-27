
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Server, 
  Globe, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Users,
  Award,
  Headphones
} from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Hospedagem Confiável",
      description: "99.9% de uptime garantido com servidores de alta performance"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Avançada",
      description: "SSL gratuito, firewall e proteção DDoS incluídos"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Otimizada",
      description: "SSDs NVMe e CDN global para máxima velocidade"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível a qualquer momento"
    }
  ]

  const plans = [
    {
      name: "Hospedagem Básica",
      price: "19,90",
      features: ["10GB de Espaço", "100GB Transferência", "1 Domínio", "SSL Grátis"],
      popular: false
    },
    {
      name: "Hospedagem Profissional",
      price: "39,90",
      features: ["50GB de Espaço", "Transferência Ilimitada", "5 Domínios", "Backup Automático"],
      popular: true
    },
    {
      name: "VPS Starter",
      price: "89,90",
      features: ["100GB SSD", "1TB Transferência", "10 Domínios", "Recursos Dedicados"],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      text: "Excelente serviço! Migrei minha empresa para a HostingPro e a diferença na performance foi notável.",
      rating: 5
    },
    {
      name: "Ana Santos",
      company: "E-commerce Plus",
      text: "O suporte é excepcional. Sempre que preciso, eles resolvem rapidamente qualquer questão.",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Digital Agency",
      text: "Uso os serviços VPS há 2 anos. Estabilidade e performance excelentes para nossos projetos.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hospedagem Web
                <span className="text-blue-300"> Profissional</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Soluções completas em hospedagem, VPS, servidores dedicados, 
                registro de domínios e instalação de sites de leilão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/hospedagem"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Ver Planos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contato"
                  className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Falar com Vendas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Servidor de hospedagem"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Sites Hospedados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5 Anos</div>
              <div className="text-gray-600">No Mercado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a HostingPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos a infraestrutura e o suporte que seu negócio precisa para crescer online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos em Destaque */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos Populares
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Escolher Plano
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Experiências reais de quem confia na HostingPro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos e leve seu negócio para o próximo nível
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hospedagem"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Ver Todos os Planos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
