
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Globe, 
  Server, 
  Zap, 
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Filter
} from 'lucide-react'

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'corporate', name: 'Corporativo' },
    { id: 'startup', name: 'Startups' },
    { id: 'media', name: 'Mídia & Conteúdo' }
  ]

  const projects = [
    {
      id: 1,
      title: "TechMart Brasil",
      category: "ecommerce",
      description: "Maior e-commerce de tecnologia do país",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        uptime: "99.98%",
        performance: "+150%",
        traffic: "2M+ visitas/mês",
        conversion: "+45%"
      },
      technologies: ["VPS Cloud", "CDN Global", "Load Balancer"],
      testimonial: "A migração para a NXHost aumentou nossa performance em 150% e reduziu o downtime para praticamente zero.",
      client: "João Silva, CTO TechMart"
    },
    {
      id: 2,
      title: "Banco Digital Futuro",
      category: "corporate",
      description: "Infraestrutura bancária de alta segurança",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        uptime: "99.99%",
        security: "Zero incidentes",
        compliance: "100% PCI DSS",
        users: "500K+ usuários"
      },
      technologies: ["Servidores Dedicados", "DDoS Protection", "Backup Redundante"],
      testimonial: "Segurança e confiabilidade incomparáveis. A NXHost é nossa parceira estratégica.",
      client: "Maria Santos, CISO Banco Futuro"
    },
    {
      id: 3,
      title: "StreamPlay",
      category: "media",
      description: "Plataforma de streaming nacional",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        latency: "<50ms",
        concurrent: "100K+ streams",
        bandwidth: "10 Gbps",
        availability: "99.95%"
      },
      technologies: ["Cloud Storage", "CDN Premium", "Auto Scaling"],
      testimonial: "Escalabilidade automática que nos permite atender picos de audiência sem problemas.",
      client: "Carlos Mendes, CEO StreamPlay"
    },
    {
      id: 4,
      title: "FinTech Inovadora",
      category: "startup",
      description: "Startup de pagamentos digitais",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        growth: "+300%",
        transactions: "1M+ por dia",
        response: "<100ms",
        cost: "-40% infraestrutura"
      },
      technologies: ["VPS Escalável", "API Gateway", "Monitoring 24/7"],
      testimonial: "Crescemos 300% em 6 meses com a infraestrutura flexível da NXHost.",
      client: "Ana Costa, CTO PayFast"
    },
    {
      id: 5,
      title: "Portal de Notícias Nacional",
      category: "media",
      description: "Maior portal de notícias do Brasil",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        pageviews: "50M+ por mês",
        loadtime: "<2s",
        uptime: "99.97%",
        seo: "+80% ranking"
      },
      technologies: ["CDN Global", "Cache Inteligente", "SSL Premium"],
      testimonial: "Performance excepcional mesmo com milhões de acessos simultâneos.",
      client: "Roberto Lima, Editor-Chefe"
    },
    {
      id: 6,
      title: "Indústria 4.0 Solutions",
      category: "corporate",
      description: "Automação industrial inteligente",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: {
        efficiency: "+60%",
        downtime: "-90%",
        iot: "10K+ dispositivos",
        roi: "250%"
      },
      technologies: ["Edge Computing", "IoT Platform", "Real-time Analytics"],
      testimonial: "A NXHost nos ajudou a revolucionar nossa produção com IoT e edge computing.",
      client: "Pedro Oliveira, Diretor de TI"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const stats = [
    { number: "500+", label: "Projetos Entregues" },
    { number: "99.9%", label: "Satisfação do Cliente" },
    { number: "24/7", label: "Suporte Especializado" },
    { number: "15+", label: "Anos de Experiência" }
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
              Casos de Sucesso
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Conheça empresas que transformaram seus negócios com nossa infraestrutura. 
              Resultados reais, impacto mensurável.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tecnologias Utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-3">"{project.testimonial}"</p>
                    <p className="text-sm font-semibold text-gray-900">— {project.client}</p>
                  </div>
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
            Seu projeto pode ser o próximo caso de sucesso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Fale com nossos especialistas e descubra como podemos impulsionar seu negócio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center">
              Solicitar Consultoria
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center justify-center">
              Ver Mais Casos
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
