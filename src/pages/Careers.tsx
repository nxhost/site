
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Heart,
  Zap,
  Award,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react'

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const departments = [
    { id: 'all', name: 'Todos os Departamentos' },
    { id: 'engineering', name: 'Engenharia' },
    { id: 'sales', name: 'Vendas' },
    { id: 'support', name: 'Suporte' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'operations', name: 'Operações' }
  ]

  const locations = [
    { id: 'all', name: 'Todas as Localidades' },
    { id: 'sao-paulo', name: 'São Paulo' },
    { id: 'rio-janeiro', name: 'Rio de Janeiro' },
    { id: 'belo-horizonte', name: 'Belo Horizonte' },
    { id: 'remote', name: 'Remoto' }
  ]

  const jobs = [
    {
      id: 1,
      title: "Engenheiro DevOps Sênior",
      department: "engineering",
      location: "sao-paulo",
      type: "CLT",
      level: "Sênior",
      description: "Responsável por automação de infraestrutura e CI/CD pipelines",
      requirements: ["5+ anos experiência", "Kubernetes", "AWS/Azure", "Terraform"],
      benefits: ["Plano de saúde", "Vale refeição", "Home office flexível"],
      salary: "R$ 12.000 - R$ 18.000"
    },
    {
      id: 2,
      title: "Especialista em Segurança da Informação",
      department: "engineering",
      location: "remote",
      type: "CLT",
      level: "Especialista",
      description: "Implementar e manter sistemas de segurança de classe mundial",
      requirements: ["Certificação CISSP", "Experiência em DDoS", "Análise de vulnerabilidades"],
      benefits: ["Plano de saúde", "Certificações pagas", "Equipamentos"],
      salary: "R$ 15.000 - R$ 22.000"
    },
    {
      id: 3,
      title: "Account Manager Enterprise",
      department: "sales",
      location: "sao-paulo",
      type: "CLT",
      level: "Pleno",
      description: "Gestão de contas corporativas e expansão de negócios",
      requirements: ["3+ anos B2B", "Inglês fluente", "CRM experience"],
      benefits: ["Comissão atrativa", "Carro da empresa", "Plano de saúde"],
      salary: "R$ 8.000 - R$ 15.000 + comissão"
    },
    {
      id: 4,
      title: "Analista de Suporte Técnico",
      department: "support",
      location: "rio-janeiro",
      type: "CLT",
      level: "Júnior",
      description: "Atendimento técnico especializado aos clientes",
      requirements: ["Conhecimento Linux", "Redes TCP/IP", "Inglês intermediário"],
      benefits: ["Plano de saúde", "Treinamentos", "Progressão rápida"],
      salary: "R$ 4.500 - R$ 6.500"
    },
    {
      id: 5,
      title: "Desenvolvedor Full Stack",
      department: "engineering",
      location: "remote",
      type: "PJ",
      level: "Pleno",
      description: "Desenvolvimento de plataformas internas e customer-facing",
      requirements: ["React/Node.js", "MongoDB", "APIs REST", "Git"],
      benefits: ["Flexibilidade total", "Equipamentos", "Projetos desafiadores"],
      salary: "R$ 10.000 - R$ 14.000"
    },
    {
      id: 6,
      title: "Coordenador de Marketing Digital",
      department: "marketing",
      location: "belo-horizonte",
      type: "CLT",
      level: "Coordenação",
      description: "Estratégias de marketing digital e growth hacking",
      requirements: ["Google Ads", "SEO/SEM", "Analytics", "Automação"],
      benefits: ["Plano de saúde", "Budget para cursos", "Stock options"],
      salary: "R$ 9.000 - R$ 13.000"
    }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    return matchesDepartment && matchesLocation
  })

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Plano de Saúde Premium",
      description: "Cobertura completa para você e sua família"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Equipamentos de Ponta",
      description: "MacBook Pro, monitores 4K e setup completo"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Desenvolvimento Contínuo",
      description: "Cursos, certificações e conferências pagas"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Ambiente Descontraído",
      description: "Escritórios modernos com café premium e snacks"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Flexibilidade Total",
      description: "Home office, horários flexíveis e férias ilimitadas"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Stock Options",
      description: "Participe do crescimento da empresa"
    }
  ]

  const values = [
    {
      title: "Inovação Constante",
      description: "Sempre buscamos novas tecnologias e soluções criativas"
    },
    {
      title: "Transparência",
      description: "Comunicação aberta e honesta em todos os níveis"
    },
    {
      title: "Excelência Técnica",
      description: "Comprometimento com qualidade e melhores práticas"
    },
    {
      title: "Crescimento Mútuo",
      description: "Investimos no desenvolvimento de cada pessoa"
    }
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
              Carreiras na NXHost
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Junte-se ao time que está transformando a infraestrutura digital do Brasil. 
              Oportunidades únicas para profissionais apaixonados por tecnologia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Cultura
            </h2>
            <p className="text-xl text-gray-600">
              Valores que nos guiam e ambiente que nos inspira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Office Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Escritório NXHost"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Escritório São Paulo</h3>
              <p className="text-lg">Ambiente moderno e colaborativo no coração da cidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios e Vantagens
            </h2>
            <p className="text-xl text-gray-600">
              Cuidamos de você para que você cuide dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Vagas Abertas</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {job.level}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {departments.find(d => d.id === job.department)?.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {locations.find(l => l.id === job.location)?.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>• {req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex}>• {benefit}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Salário:</h4>
                        <p className="text-lg font-bold text-blue-600">{job.salary}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2">
                      Candidatar-se
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma vaga encontrada com os filtros selecionados.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment('all')
                  setSelectedLocation('all')
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Limpar filtros
              </button>
            </div>
          )}
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
            Não encontrou a vaga ideal?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Envie seu currículo e fique em nosso banco de talentos. 
            Entraremos em contato quando surgir uma oportunidade perfeita para você.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2">
              Enviar Currículo
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
