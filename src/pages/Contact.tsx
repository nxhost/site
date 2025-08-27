
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  Globe,
  Headphones
} from 'lucide-react'
import toast from 'react-hot-toast'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  })

  const offices = [
    {
      city: "São Paulo - Matriz",
      address: "Av. Paulista, 1000 - Conjunto 101",
      neighborhood: "Bela Vista, São Paulo - SP",
      cep: "01310-100",
      phone: "(11) 4000-0000",
      email: "sp@hostingpro.com.br"
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Rio Branco, 500 - Sala 1201",
      neighborhood: "Centro, Rio de Janeiro - RJ", 
      cep: "20040-020",
      phone: "(21) 4000-0000",
      email: "rj@hostingpro.com.br"
    },
    {
      city: "Belo Horizonte",
      address: "Av. Afonso Pena, 1500 - Sala 802",
      neighborhood: "Centro, Belo Horizonte - MG",
      cep: "30130-005",
      phone: "(31) 4000-0000",
      email: "bh@hostingpro.com.br"
    }
  ]

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      description: "Atendimento direto com nossa equipe",
      contact: "(11) 4000-0000",
      hours: "Seg-Sex: 8h às 18h"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Envie sua mensagem e responderemos rapidamente",
      contact: "contato@hostingpro.com.br",
      hours: "Resposta em até 2 horas"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chat Online",
      description: "Atendimento imediato via chat",
      contact: "Disponível no site",
      hours: "24/7"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Suporte Técnico",
      description: "Equipe especializada para questões técnicas",
      contact: "suporte@hostingpro.com.br",
      hours: "24/7"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }

    // Simular envio do formulário
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Entre em Contato
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Estamos prontos para ajudar você a encontrar a melhor solução 
              para suas necessidades de hospedagem e infraestrutura digital.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Métodos de Contato */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como falar conosco
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o canal que for mais conveniente para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <div className="font-medium text-gray-900 mb-1">{method.contact}</div>
                <div className="text-sm text-gray-500">{method.hours}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="hosting">Hospedagem Web</option>
                    <option value="vps">Servidores VPS</option>
                    <option value="dedicated">Servidores Dedicados</option>
                    <option value="domains">Registro de Domínios</option>
                    <option value="auction">Sites de Leilão</option>
                    <option value="migration">Migração de Sites</option>
                    <option value="other">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Assunto da mensagem"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descreva como podemos ajudar você..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Horários de Atendimento */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Horários de Atendimento
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9h às 13h</span>
                </div>
                <div className="flex justify-between">
                  <span>Suporte Técnico:</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Chat Online:</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
              </div>
            </div>

            {/* Escritórios */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2 text-blue-600" />
                Nossos Escritórios
              </h3>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                        <div>
                          <div>{office.address}</div>
                          <div>{office.neighborhood}</div>
                          <div>CEP: {office.cep}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Precisa de ajuda imediata?
              </h3>
              <p className="text-gray-600 mb-4">
                Nossa equipe de suporte está disponível 24/7 para emergências técnicas 
                e questões urgentes relacionadas aos seus serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat de Emergência
                </button>
                <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mapa (Simulado) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização Principal
            </h2>
            <p className="text-xl text-gray-600">
              Visite nosso escritório principal em São Paulo
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  HostingPro - Matriz São Paulo
                </h3>
                <p className="text-gray-600">
                  Av. Paulista, 1000 - Conjunto 101<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
