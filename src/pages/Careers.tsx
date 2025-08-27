
import React, { useState } from 'react'
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Award, Coffee, Briefcase, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    salary: '',
    message: '',
    resume: null as File | null
  })

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Plano de Saúde Completo",
      description: "Cobertura médica e odontológica para você e sua família"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Desenvolvimento Contínuo",
      description: "Cursos, certificações e conferências pagas pela empresa"
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: "Ambiente Flexível",
      description: "Home office híbrido e horários flexíveis"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Participação nos Lucros",
      description: "Bônus anuais baseados no desempenho da empresa"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Equipe Diversa",
      description: "Ambiente inclusivo com pessoas de diferentes backgrounds"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: "Equipamentos Premium",
      description: "Notebook, monitor e setup completo para trabalhar"
    }
  ]

  const jobs = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Sênior",
      department: "Tecnologia",
      location: "São Paulo, SP",
      type: "CLT",
      salary: "R$ 12.000 - R$ 18.000",
      description: "Desenvolvedor experiente para liderar projetos de transformação digital em grandes clientes.",
      requirements: [
        "5+ anos de experiência em desenvolvimento web",
        "Domínio de React, Node.js e bancos de dados",
        "Experiência com cloud computing (AWS/Azure)",
        "Conhecimento em metodologias ágeis",
        "Inglês intermediário"
      ],
      responsibilities: [
        "Liderar desenvolvimento de aplicações complexas",
        "Mentoria de desenvolvedores juniores",
        "Arquitetura de soluções escaláveis",
        "Interação direta com clientes",
        "Code review e garantia de qualidade"
      ]
    },
    {
      id: 2,
      title: "Consultor de Transformação Digital",
      department: "Consultoria",
      location: "São Paulo, SP",
      type: "CLT",
      salary: "R$ 15.000 - R$ 25.000",
      description: "Consultor estratégico para liderar projetos de transformação digital em grandes corporações.",
      requirements: [
        "7+ anos em consultoria ou transformação digital",
        "MBA ou pós-graduação",
        "Experiência com metodologias de mudança",
        "Excelente comunicação e apresentação",
        "Inglês fluente"
      ],
      responsibilities: [
        "Análise de processos de negócio",
        "Desenvolvimento de estratégias digitais",
        "Liderança de projetos complexos",
        "Apresentações para C-level",
        "Gestão de equipes multidisciplinares"
      ]
    },
    {
      id: 3,
      title: "Especialista em Cloud Computing",
      department: "Infraestrutura",
      location: "Remote",
      type: "CLT",
      salary: "R$ 10.000 - R$ 16.000",
      description: "Especialista para arquitetar e implementar soluções em nuvem para nossos clientes.",
      requirements: [
        "4+ anos com cloud computing",
        "Certificações AWS/Azure/GCP",
        "Experiência com containers e Kubernetes",
        "Conhecimento em DevOps e CI/CD",
        "Experiência com infraestrutura como código"
      ],
      responsibilities: [
        "Arquitetura de soluções cloud",
        "Migração de sistemas legados",
        "Implementação de DevOps",
        "Otimização de custos",
        "Documentação técnica"
      ]
    },
    {
      id: 4,
      title: "Analista de Segurança Cibernética",
      department: "Segurança",
      location: "Rio de Janeiro, RJ",
      type: "CLT",
      salary: "R$ 8.000 - R$ 14.000",
      description: "Profissional para implementar e monitorar soluções de segurança para nossos clientes.",
      requirements: [
        "3+ anos em segurança da informação",
        "Certificações CISSP, CEH ou similares",
        "Experiência com SIEM e ferramentas de segurança",
        "Conhecimento em compliance e frameworks",
        "Capacidade analítica avançada"
      ],
      responsibilities: [
        "Análise de vulnerabilidades",
        "Implementação de controles de segurança",
        "Monitoramento de incidentes",
        "Elaboração de políticas de segurança",
        "Treinamento de equipes"
      ]
    },
    {
      id: 5,
      title: "Cientista de Dados",
      department: "Analytics",
      location: "São Paulo, SP",
      type: "CLT",
      salary: "R$ 11.000 - R$ 17.000",
      description: "Data scientist para desenvolver modelos de machine learning e análises avançadas.",
      requirements: [
        "4+ anos em ciência de dados",
        "Domínio de Python, R e SQL",
        "Experiência com ML e deep learning",
        "Conhecimento em big data tools",
        "Mestrado ou PhD em área quantitativa"
      ],
      responsibilities: [
        "Desenvolvimento de modelos preditivos",
        "Análise exploratória de dados",
        "Implementação de pipelines de dados",
        "Visualização de dados e dashboards",
        "Colaboração com equipes de negócio"
      ]
    },
    {
      id: 6,
      title: "Gerente de Projetos Sênior",
      department: "Gestão",
      location: "Belo Horizonte, MG",
      type: "CLT",
      salary: "R$ 13.000 - R$ 20.000",
      description: "Gerente experiente para liderar projetos estratégicos de grande complexidade.",
      requirements: [
        "6+ anos em gestão de projetos",
        "Certificação PMP ou Prince2",
        "Experiência com projetos de TI",
        "Liderança de equipes grandes",
        "Excelente comunicação"
      ],
      responsibilities: [
        "Gestão de projetos complexos",
        "Coordenação de equipes multidisciplinares",
        "Relacionamento com stakeholders",
        "Controle de orçamento e cronograma",
        "Gestão de riscos e qualidade"
      ]
    }
  ]

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Candidatura enviada com sucesso! Nossa equipe de RH entrará em contato em breve.')
    
    // Reset form
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      salary: '',
      message: '',
      resume: null
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Trabalhe Conosco
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Faça parte de uma equipe que está transformando o futuro da tecnologia no Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-100">Talentos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-blue-100">Países</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-blue-100">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossa Cultura
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos que pessoas excepcionais criam soluções excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vagas Abertas
            </h2>
            <p className="text-xl text-gray-600">
              Encontre a oportunidade perfeita para sua carreira
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign size={16} className="mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        {job.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        {selectedJob === job.id ? 'Fechar' : 'Ver Detalhes'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Job Details */}
                {selectedJob === job.id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Requisitos:
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <button 
                        onClick={() => {
                          setApplicationData({...applicationData, position: job.title})
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Candidatar-se para esta Vaga
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Candidate-se
            </h2>
            <p className="text-xl text-gray-600">
              Envie sua candidatura e faça parte do nosso time
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaga de Interesse *
                  </label>
                  <select
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma vaga</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anos de Experiência
                  </label>
                  <select
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="0-2">0-2 anos</option>
                    <option value="3-5">3-5 anos</option>
                    <option value="6-10">6-10 anos</option>
                    <option value="10+">Mais de 10 anos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pretensão Salarial
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={applicationData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="R$ 10.000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currículo (PDF) *
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carta de Apresentação
                </label>
                <textarea
                  name="message"
                  value={applicationData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos sobre você, suas motivações e por que quer trabalhar conosco..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Enviar Candidatura
                  <Send className="ml-2" size={20} />
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  Resposta em até 5 dias úteis
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
