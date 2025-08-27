
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Server, 
  Globe, 
  Shield, 
  Zap, 
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Headphones,
  Award
} from 'lucide-react'

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Cloud & VPS",
      description: "Soluções escaláveis na nuvem",
      icon: <Cloud className="h-12 w-12" />,
      services: [
        {
          name: "VPS Cloud",
          description: "Servidores virtuais de alta performance",
          features: ["SSD NVMe", "Backup Automático", "99.9% Uptime"],
          startPrice: "54,90",
          link: "/vps-cloud"
        },
        {
          name: "Cloud Storage",
          description: "Armazenamento seguro e escalável",
          features: ["Redundância", "API REST", "Backup Global"],
          startPrice: "29,90",
          link: "/cloud-storage"
        }
      ]
    },
    {
      title: "Servidores Físicos",
      description: "Máxima performance dedicada",
      icon: <Server className="h-12 w-12" />,
      services: [
        {
          name: "Servidores Dedicados",
          description: "Hardware exclusivo para seu projeto",
          features: ["Intel Xeon", "IPMI Gratuito", "Setup em 24h"],
          startPrice: "899,90",
          link: "/servidores-dedicados"
        },
        {
          name: "Colocation",
          description: "Hospede seu hardware em nosso datacenter",
          features: ["Energia Redundante", "Conectividade Premium", "Segurança 24/7"],
          startPrice: "199,90",
          link: "/colocation"
        }
      ]
    },
    {
      title: "Web & Domínios",
      description: "Presença online completa",
      icon: <Globe className="h-12 w-12" />,
      services: [
        {
          name: "Hospedagem Web",
          description: "Sites rápidos e seguros",
          features: ["SSL Gratuito", "CDN Global", "WordPress Otimizado"],
          startPrice: "19,90",
          link: "/hospedagem-web"
        },
        {
          name: "Registro de Domínios",
          description: "Seu endereço na internet",
          features: ["DNS Gratuito", "Proteção WHOIS", "Renovação Automática"],
          startPrice: "39,90",
          link: "/dominios"
        }
      ]
    }
  ]

  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Avançada",
      description: "DDoS Protection, Firewall e monitoramento 24/7"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Superior",
      description: "SSDs NVMe, processadores Intel/AMD de última geração"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Premium",
      description: "Atendimento especializado em português 24/7"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "SLA Garantido",
      description: "99.9% de uptime com compensação automática"
    }
  ]

  const comparisons = [
    { feature: "Uptime Garantido", nxhost: "99.9%", competitors: "99.5%" },
    { feature: "Suporte em Português", nxhost: "24/7", competitors: "Limitado" },
    { feature: "Data Centers no Brasil", nxhost: "3 Locais", competitors: "1-2 Locais" },
    { feature: "Migração Gratuita", nxhost: "Incluída", competitors: "Paga" },
    { feature: "Backup Automático", nxhost: "Diário", competitors: "Semanal" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Nossos Serviços
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Infraestrutura completa para impulsionar seu negócio online. 
              Do desenvolvimento à produção, temos a solução ideal.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4 text-blue-600">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">A partir de</span>
                        <div className="text-2xl font-bold text-blue-600">
                          R$ {service.startPrice}<span className="text-sm text-gray-500">/mês</span>
                        </div>
                      </div>
                      <Link
                        to={service.link}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Ver Planos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a NXHost?
            </h2>
            <p className="text-xl text-gray-600">
              Diferenciais que fazem a diferença no seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NXHost vs Concorrência
            </h2>
            <p className="text-xl text-gray-600">
              Compare e veja por que somos a melhor escolha
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
              <div>Recurso</div>
              <div className="text-center">NXHost</div>
              <div className="text-center">Concorrência</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-3 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="font-medium text-gray-900">{comparison.feature}</div>
                <div className="text-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {comparison.nxhost}
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {comparison.competitors}
                  </span>
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
            Pronto para começar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Fale com nossos especialistas e descubra a solução ideal para seu projeto
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contato"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/dashboard"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center"
            >
              Acessar Dashboard
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
