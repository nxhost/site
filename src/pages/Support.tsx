
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Book,
  Video,
  Download
} from 'lucide-react'
import toast from 'react-hot-toast'

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  })

  const faqItems = [
    {
      question: "Como configurar meu domínio para apontar para a hospedagem?",
      answer: "Acesse o painel de controle do seu domínio e configure os nameservers para ns1.hostingpro.com.br e ns2.hostingpro.com.br. A propagação pode levar até 24 horas."
    },
    {
      question: "Posso fazer upgrade do meu plano de hospedagem?",
      answer: "Sim! Você pode fazer upgrade a qualquer momento através do seu painel de controle. O valor será ajustado proporcionalmente."
    },
    {
      question: "Como funciona o backup automático?",
      answer: "Realizamos backups diários automáticos de todos os seus arquivos e bancos de dados. Os backups ficam disponíveis por 30 dias."
    },
    {
      question: "Qual é o tempo de ativação dos serviços?",
      answer: "Hospedagem e VPS são ativados automaticamente após confirmação do pagamento. Servidores dedicados levam até 24 horas."
    },
    {
      question: "Vocês oferecem migração gratuita?",
      answer: "Sim! Oferecemos migração gratuita para todos os planos de hospedagem. Nossa equipe cuida de todo o processo."
    }
  ]

  const knowledgeBase = [
    {
      title: "Configuração de Email",
      description: "Como configurar contas de email no seu dispositivo",
      category: "Email",
      type: "tutorial"
    },
    {
      title: "Instalação do WordPress",
      description: "Guia passo a passo para instalar WordPress",
      category: "CMS",
      type: "tutorial"
    },
    {
      title: "Configuração de SSL",
      description: "Como ativar e configurar certificado SSL",
      category: "Segurança",
      type: "tutorial"
    },
    {
      title: "Backup e Restauração",
      description: "Como fazer backup e restaurar seus arquivos",
      category: "Backup",
      type: "video"
    },
    {
      title: "Otimização de Performance",
      description: "Dicas para melhorar a velocidade do seu site",
      category: "Performance",
      type: "guide"
    },
    {
      title: "Política de Uso Aceitável",
      description: "Termos e condições de uso dos serviços",
      category: "Políticas",
      type: "document"
    }
  ]

  const tickets = [
    {
      id: "#TK-2025-001",
      subject: "Problema com email não funcionando",
      status: "open",
      priority: "high",
      created: "2025-01-16T10:30:00Z",
      lastUpdate: "2025-01-16T14:20:00Z"
    },
    {
      id: "#TK-2025-002",
      subject: "Solicitação de aumento de limite PHP",
      status: "in_progress",
      priority: "medium",
      created: "2025-01-15T16:45:00Z",
      lastUpdate: "2025-01-16T09:15:00Z"
    },
    {
      id: "#TK-2025-003",
      subject: "Migração de site concluída",
      status: "resolved",
      priority: "low",
      created: "2025-01-14T11:20:00Z",
      lastUpdate: "2025-01-15T13:30:00Z"
    }
  ]

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!ticketForm.subject || !ticketForm.category || !ticketForm.description) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }

    // Simular criação do ticket
    toast.success('Ticket criado com sucesso! Você receberá uma resposta em breve.')
    
    setTicketForm({
      subject: '',
      category: '',
      priority: '',
      description: ''
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-100'
      case 'in_progress': return 'text-yellow-600 bg-yellow-100'
      case 'resolved': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return <AlertCircle className="h-4 w-4" />
      case 'in_progress': return <Clock className="h-4 w-4" />
      case 'resolved': return <CheckCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Aberto'
      case 'in_progress': return 'Em Andamento'
      case 'resolved': return 'Resolvido'
      default: return 'Desconhecido'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tutorial': return <Book className="h-5 w-5" />
      case 'video': return <Video className="h-5 w-5" />
      case 'guide': return <FileText className="h-5 w-5" />
      case 'document': return <Download className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Central de Suporte
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              Estamos aqui para ajudar! Encontre respostas, abra tickets 
              ou entre em contato com nossa equipe especializada.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Canais de Contato */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como podemos ajudar?
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o canal de atendimento que preferir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-8 bg-blue-50 rounded-lg"
            >
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat ao Vivo</h3>
              <p className="text-gray-600 mb-4">Atendimento imediato online</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Iniciar Chat
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-green-50 rounded-lg"
            >
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-4">(11) 4000-0000</p>
              <p className="text-sm text-gray-500">Seg-Sex: 8h às 18h</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-purple-50 rounded-lg"
            >
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">suporte@hostingpro.com.br</p>
              <p className="text-sm text-gray-500">Resposta em até 2h</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Base de Conhecimento */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Base de Conhecimento</h2>
            
            {/* Busca */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perguntas Frequentes</h3>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50">
                        <span className="font-medium text-gray-900">{item.question}</span>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Artigos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Artigos e Tutoriais</h3>
              <div className="grid gap-4">
                {knowledgeBase.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        {getTypeIcon(article.type)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{article.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{article.description}</p>
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sistema de Tickets */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sistema de Tickets</h2>

            {/* Meus Tickets */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Meus Tickets</h3>
              <div className="space-y-3">
                {tickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{ticket.id}</h4>
                        <p className="text-gray-600 text-sm">{ticket.subject}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {getStatusIcon(ticket.status)}
                        <span className="ml-1">{getStatusText(ticket.status)}</span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Criado: {new Date(ticket.created).toLocaleDateString('pt-BR')} | 
                      Atualizado: {new Date(ticket.lastUpdate).toLocaleDateString('pt-BR')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Novo Ticket */}
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Abrir Novo Ticket</h3>
              
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    required
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descreva brevemente o problema"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria *
                    </label>
                    <select
                      required
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione</option>
                      <option value="hosting">Hospedagem</option>
                      <option value="domain">Domínio</option>
                      <option value="email">Email</option>
                      <option value="technical">Técnico</option>
                      <option value="billing">Financeiro</option>
                      <option value="other">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prioridade
                    </label>
                    <select
                      value={ticketForm.priority}
                      onChange={(e) => setTicketForm(prev => ({ ...prev, priority: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                      <option value="urgent">Urgente</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descreva o problema em detalhes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Abrir Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
