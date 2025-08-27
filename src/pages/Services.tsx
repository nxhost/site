
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, ArrowRight, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const services = [
    {
      title: "Transformação Digital",
      description: "Modernize completamente seus processos de negócio e acelere o crescimento através de soluções digitais estratégicas.",
      features: [
        "Análise completa de processos atuais",
        "Estratégia de digitalização personalizada",
        "Implementação de tecnologias emergentes",
        "Treinamento e change management",
        "Monitoramento e otimização contínua"
      ],
      benefits: [
        "Redução de custos operacionais em até 40%",
        "Aumento da produtividade em 60%",
        "Melhoria na experiência do cliente",
        "Acesso a insights de dados em tempo real"
      ],
      caseStudy: "Empresa de manufatura reduziu tempo de produção em 35% após implementação de IoT e automação.",
      price: "A partir de R$ 50.000"
    },
    {
      title: "Desenvolvimento de Software",
      description: "Criamos soluções sob medida que atendem perfeitamente às necessidades específicas do seu negócio.",
      features: [
        "Desenvolvimento web e mobile",
        "APIs e microserviços",
        "Sistemas de gestão empresarial",
        "Aplicações cloud-native",
        "Integração com sistemas legados"
      ],
      benefits: [
        "Soluções 100% personalizadas",
        "Escalabilidade garantida",
        "Segurança de nível empresarial",
        "Suporte técnico especializado"
      ],
      caseStudy: "Sistema de e-commerce desenvolvido aumentou vendas online em 200% para varejista nacional.",
      price: "A partir de R$ 80.000"
    },
    {
      title: "Consultoria em Cloud",
      description: "Migre para a nuvem com segurança e maximize os benefícios da computação em cloud.",
      features: [
        "Estratégia de migração para cloud",
        "Arquitetura multi-cloud",
        "Otimização de custos",
        "Implementação de DevOps",
        "Monitoramento e governança"
      ],
      benefits: [
        "Redução de custos de infraestrutura",
        "Maior flexibilidade e escalabilidade",
        "Backup e recuperação automáticos",
        "Acesso global aos sistemas"
      ],
      caseStudy: "Migração para AWS resultou em economia de 45% nos custos de TI para empresa financeira.",
      price: "A partir de R$ 60.000"
    },
    {
      title: "Segurança Cibernética",
      description: "Proteja seus dados e sistemas contra ameaças digitais com soluções de segurança avançadas.",
      features: [
        "Auditoria de segurança completa",
        "Implementação de firewalls avançados",
        "Monitoramento 24/7",
        "Treinamento em segurança",
        "Planos de resposta a incidentes"
      ],
      benefits: [
        "Proteção contra ataques cibernéticos",
        "Compliance com regulamentações",
        "Redução de riscos operacionais",
        "Confiança dos clientes"
      ],
      caseStudy: "Sistema de segurança implementado preveniu 99.8% dos ataques para instituição bancária.",
      price: "A partir de R$ 40.000"
    },
    {
      title: "Análise de Dados e BI",
      description: "Transforme seus dados em insights estratégicos para decisões mais inteligentes e resultados superiores.",
      features: [
        "Data warehousing e ETL",
        "Dashboards interativos",
        "Machine learning e IA",
        "Análise preditiva",
        "Relatórios automatizados"
      ],
      benefits: [
        "Decisões baseadas em dados",
        "Identificação de oportunidades",
        "Previsão de tendências",
        "ROI mensurável"
      ],
      caseStudy: "Solução de BI aumentou eficiência de vendas em 50% para empresa de telecomunicações.",
      price: "A partir de R$ 70.000"
    },
    {
      title: "Automação de Processos",
      description: "Automatize tarefas repetitivas e otimize workflows para máxima eficiência operacional.",
      features: [
        "RPA (Robotic Process Automation)",
        "Workflows inteligentes",
        "Integração de sistemas",
        "Automação de aprovações",
        "Monitoramento de performance"
      ],
      benefits: [
        "Redução de erros humanos",
        "Aumento da produtividade",
        "Liberação de recursos humanos",
        "Processos mais rápidos"
      ],
      caseStudy: "Automação de processos financeiros reduziu tempo de fechamento mensal em 70%.",
      price: "A partir de R$ 30.000"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast.success('Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 24 horas.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos Serviços Especializados
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Soluções tecnológicas completas para impulsionar o crescimento e a inovação da sua empresa
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="text-blue-600 font-semibold">
                        {service.price}
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedService === index ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedService === index && (
                  <div className="px-8 pb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          O que está incluído:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Benefícios esperados:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Case Study */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Caso de sucesso:
                        </h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-gray-700 italic">
                            "{service.caseStudy}"
                          </p>
                        </div>
                        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Solicitar Orçamento
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solicite uma Consultoria Personalizada
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu.email@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descreva seu Projeto *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos sobre seus objetivos, desafios atuais e o que espera alcançar..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Solicitar Consultoria Gratuita
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  Resposta garantida em até 24 horas úteis
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
