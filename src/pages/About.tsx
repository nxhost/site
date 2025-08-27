
import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Shield, 
  Globe, 
  Target,
  Heart,
  Zap,
  CheckCircle
} from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { number: "10k+", label: "Sites Hospedados" },
    { number: "5", label: "Anos de Experiência" },
    { number: "99.9%", label: "Uptime Garantido" },
    { number: "24/7", label: "Suporte Técnico" }
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança",
      description: "Proteção máxima dos seus dados com as melhores práticas de segurança"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Infraestrutura de alta performance para garantir velocidade máxima"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Atendimento",
      description: "Suporte humanizado e especializado para resolver qualquer questão"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Inovação",
      description: "Sempre buscando as melhores tecnologias para nossos clientes"
    }
  ]

  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      description: "15 anos de experiência em infraestrutura e cloud computing",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=300"
    },
    {
      name: "Ana Santos",
      role: "CTO",
      description: "Especialista em arquitetura de sistemas e segurança da informação",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=300"
    },
    {
      name: "Roberto Lima",
      role: "Diretor de Operações",
      description: "Responsável pela infraestrutura e garantia de uptime dos serviços",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?w=300"
    },
    {
      name: "Marina Costa",
      role: "Diretora de Atendimento",
      description: "Liderança em experiência do cliente e suporte técnico especializado",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=300"
    }
  ]

  const certifications = [
    "ISO 27001 - Segurança da Informação",
    "SOC 2 Type II - Controles de Segurança",
    "PCI DSS - Segurança de Dados de Cartão",
    "LGPD - Lei Geral de Proteção de Dados"
  ]

  const timeline = [
    {
      year: "2020",
      title: "Fundação da HostingPro",
      description: "Início das operações com foco em hospedagem web de qualidade"
    },
    {
      year: "2021",
      title: "Expansão de Serviços",
      description: "Lançamento dos serviços VPS e registro de domínios"
    },
    {
      year: "2022",
      title: "Certificações de Segurança",
      description: "Obtenção das principais certificações internacionais"
    },
    {
      year: "2023",
      title: "Servidores Dedicados",
      description: "Início da operação com servidores dedicados enterprise"
    },
    {
      year: "2024",
      title: "Sites de Leilão",
      description: "Lançamento da plataforma de instalação de sites de leilão"
    },
    {
      year: "2025",
      title: "Expansão Internacional",
      description: "Início das operações para mercados internacionais"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Sobre a HostingPro
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Somos uma empresa brasileira especializada em soluções completas 
              de hospedagem web, servidores e infraestrutura digital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Democratizar o acesso à tecnologia de hospedagem web de alta qualidade, 
                oferecendo soluções confiáveis, seguras e acessíveis para empresas de 
                todos os tamanhos.
              </p>
              <p className="text-lg text-gray-600">
                Acreditamos que toda empresa merece uma presença digital sólida e 
                confiável, independentemente do seu porte ou orçamento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-600 mb-6">
                Ser a principal referência em hospedagem web no Brasil, 
                reconhecida pela excelência em atendimento, inovação tecnológica 
                e compromisso com o sucesso dos nossos clientes.
              </p>
              <div className="flex items-center text-blue-600">
                <Globe className="h-6 w-6 mr-2" />
                <span className="font-semibold">Conectando o Brasil ao mundo digital</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que guiam todas as nossas decisões e ações
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600">
              Principais marcos da nossa história
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais experientes dedicados ao seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Comprometidos com os mais altos padrões de segurança e qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-white p-6 rounded-lg shadow-md"
              >
                <Award className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </div>
                <CheckCircle className="h-6 w-6 text-green-500 ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de clientes que confiam na HostingPro 
            para suas soluções de hospedagem e infraestrutura digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Conhecer Planos
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Falar Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
