
import React, { useState } from 'react'
import { ExternalLink, Calendar, Users, TrendingUp, Filter } from 'lucide-react'

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos os Projetos' },
    { id: 'digital-transformation', name: 'Transformação Digital' },
    { id: 'software-development', name: 'Desenvolvimento' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Segurança' },
    { id: 'data-analytics', name: 'Análise de Dados' }
  ]

  const projects = [
    {
      id: 1,
      title: "Modernização do Sistema Bancário",
      client: "Banco Nacional S.A.",
      category: "digital-transformation",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?w=600",
      description: "Transformação digital completa do sistema bancário legacy, implementando arquitetura moderna e interfaces mobile-first.",
      results: [
        "300% aumento na satisfação do cliente",
        "50% redução no tempo de processamento",
        "95% redução em falhas de sistema"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Microserviços"],
      duration: "18 meses",
      teamSize: "25 pessoas",
      year: "2024"
    },
    {
      id: 2,
      title: "Plataforma de E-commerce Omnichannel",
      client: "Varejo Tech Ltda",
      category: "software-development",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=600",
      description: "Desenvolvimento de plataforma de e-commerce integrada com sistemas físicos e marketplace.",
      results: [
        "200% aumento nas vendas online",
        "Integração com 15+ marketplaces",
        "Sistema de gestão unificado"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Docker"],
      duration: "12 meses",
      teamSize: "18 pessoas",
      year: "2024"
    },
    {
      id: 3,
      title: "Migração para AWS Cloud",
      client: "Indústria Global Corp",
      category: "cloud",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=600",
      description: "Migração completa de infraestrutura on-premise para AWS com implementação de DevOps.",
      results: [
        "45% redução nos custos de TI",
        "99.9% de disponibilidade",
        "Deployment automatizado"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Monitoring"],
      duration: "8 meses",
      teamSize: "12 pessoas",
      year: "2023"
    },
    {
      id: 4,
      title: "Sistema de Segurança Cibernética",
      client: "FinTech Segura",
      category: "security",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600",
      description: "Implementação de sistema de segurança multicamadas com monitoramento 24/7 e resposta a incidentes.",
      results: [
        "Zero incidentes de segurança",
        "Compliance SOX e LGPD",
        "Detecção de ameaças em tempo real"
      ],
      technologies: ["SIEM", "IDS/IPS", "WAF", "Endpoint Protection", "SOC"],
      duration: "10 meses",
      teamSize: "15 pessoas",
      year: "2023"
    },
    {
      id: 5,
      title: "Business Intelligence Avançado",
      client: "Telecom Brasil",
      category: "data-analytics",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?w=600",
      description: "Plataforma de BI com machine learning para análise preditiva de churn e otimização de vendas.",
      results: [
        "50% melhoria na retenção",
        "35% aumento na eficiência de vendas",
        "Insights em tempo real"
      ],
      technologies: ["Power BI", "Python", "Apache Spark", "ML Models", "Azure"],
      duration: "14 meses",
      teamSize: "20 pessoas",
      year: "2023"
    },
    {
      id: 6,
      title: "Automação de Processos RPA",
      client: "Manufatura Excellence",
      category: "digital-transformation",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600",
      description: "Implementação de RPA para automação de processos financeiros e operacionais.",
      results: [
        "70% redução no tempo de processamento",
        "90% redução de erros",
        "ROI de 250% no primeiro ano"
      ],
      technologies: ["UiPath", "Blue Prism", "OCR", "API Integration", "Analytics"],
      duration: "6 meses",
      teamSize: "8 pessoas",
      year: "2024"
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça os projetos que transformaram empresas e geraram resultados excepcionais
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">R$ 2B+</div>
              <div className="text-gray-600">Valor Gerado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Setores Atendidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-6">
              <Filter size={20} className="text-gray-600" />
              <span className="text-gray-700 font-medium">Filtrar por:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Cliente: {project.client}
                  </p>

                  <p className="text-gray-700 mb-6">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2" />
                      {project.teamSize}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-green-600" />
                      Principais Resultados:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          • {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Ver Caso Completo
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Seu Projeto Pode Ser o Próximo Case de Sucesso
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Orçamento
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Agendar Reunião
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
