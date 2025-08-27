
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  Server,
  Database,
  Lock,
  Headphones,
  Award,
  TrendingUp
} from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Infraestrutura Escalável",
      description: "Recursos que crescem com seu negócio, sem limites de performance"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Avançada",
      description: "DDoS Protection, firewall configurável e monitoramento 24/7"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Superior",
      description: "SSDs NVMe, processadores Intel/AMD e rede de alta velocidade"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Premium",
      description: "Atendimento especializado 24/7 em português brasileiro"
    }
  ]

  const plans = [
    {
      name: "VPS Cloud S",
      price: "54,90",
      originalPrice: "30,50",
      features: ["2 vCPUs", "4GB RAM", "100GB SSD NVMe", "200 Mbit/s", "Backup Incluído"],
      popular: false,
      link: "/vps-cloud"
    },
    {
      name: "VPS Cloud M",
      price: "98,90",
      originalPrice: "54,95",
      features: ["4 vCPUs", "8GB RAM", "200GB SSD NVMe", "400 Mbit/s", "Migração Gratuita"],
      popular: true,
      link: "/vps-cloud"
    },
    {
      name: "Dedicated Starter",
      price: "899,90",
      originalPrice: "499,95",
      features: ["Intel Xeon 4 cores", "32GB RAM", "2x512GB SSD", "1 Gbit/s", "IPMI Incluído"],
      popular: false,
      link: "/servidores-dedicados"
    }
  ]

  const testimonials = [
    {
      name: "Ricardo Mendes",
      company: "TechStart Brasil",
      text: "Migrei para a NXHost e a diferença na performance foi impressionante. O suporte em português fez toda a diferença.",
      rating: 5
    },
    {
      name: "Ana Carolina",
      company: "E-commerce Pro",
      text: "Infraestrutura sólida e confiável. Nosso site nunca ficou fora do ar desde que mudamos para a NXHost.",
      rating: 5
    },
    {
      name: "Felipe Santos",
      company: "Digital Agency",
      text: "A qualidade dos servidores dedicados é excepcional. Recomendo para quem precisa de alta performance.",
      rating: 5
    }
  ]

  const stats = [
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "15k+", label: "Clientes Ativos" },
    { number: "24/7", label: "Suporte Técnico" },
    { number: "3", label: "Data Centers" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cloud Hosting de
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  {" "}Nova Geração
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Infraestrutura escalável de alta performance com data centers no Brasil. 
                Suporte premium 24/7 em português e SLA garantido.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/vps-cloud"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Explorar VPS Cloud
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contato"
                  className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
                >
                  Falar com Especialista
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Data center NXHost"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Por que escolher a NXHost?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Tecnologia de ponta, suporte especializado e infraestrutura robusta para impulsionar seu negócio
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Planos Populares
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Soluções escaláveis para todos os tipos de projeto
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-cyan-500 transform scale-105' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                      <span className="text-gray-600 ml-1">/mês</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">R$ {plan.originalPrice}</span>
                      <span className="text-green-600 font-semibold ml-2">80% mais valor</span>
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
                  
                  <Link
                    to={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block text-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Escolher Plano
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              O que nossos clientes dizem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Experiências reais de quem confia na NXHost
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Pronto para escalar seu negócio?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Junte-se a milhares de empresas que confiam na infraestrutura NXHost para crescer online
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/vps-cloud"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Explorar Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Falar com Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
