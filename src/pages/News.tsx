
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Globe
} from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todas as Notícias' },
    { id: 'technology', name: 'Tecnologia' },
    { id: 'security', name: 'Segurança' },
    { id: 'updates', name: 'Atualizações' },
    { id: 'industry', name: 'Mercado' }
  ]

  const articles = [
    {
      id: 1,
      title: "NXHost Expande Data Center para São Paulo",
      excerpt: "Nova infraestrutura oferece latência ainda menor para região Sudeste",
      content: "A NXHost anuncia a expansão de sua infraestrutura com um novo data center em São Paulo...",
      author: "Equipe NXHost",
      date: "2025-01-15T10:00:00Z",
      category: "updates",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min",
      featured: true,
      tags: ["Data Center", "São Paulo", "Infraestrutura"]
    },
    {
      id: 2,
      title: "Proteção Avançada contra DDoS: Nova Camada de Segurança",
      excerpt: "Sistema de proteção de última geração agora disponível para todos os planos",
      content: "Implementamos uma nova camada de proteção DDoS que oferece defesa contra ataques...",
      author: "Carlos Silva",
      date: "2025-01-12T14:30:00Z",
      category: "security",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min",
      featured: false,
      tags: ["DDoS", "Segurança", "Proteção"]
    },
    {
      id: 3,
      title: "Tendências de Cloud Computing para 2025",
      excerpt: "Análise das principais tendências que moldarão o mercado de cloud",
      content: "O mercado de cloud computing continua evoluindo rapidamente. Neste artigo, exploramos...",
      author: "Ana Santos",
      date: "2025-01-10T09:15:00Z",
      category: "technology",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min",
      featured: true,
      tags: ["Cloud", "Tendências", "2025"]
    },
    {
      id: 4,
      title: "SSDs NVMe: Performance 10x Mais Rápida",
      excerpt: "Migração completa para armazenamento NVMe em todos os serviços",
      content: "A NXHost concluiu a migração de toda sua infraestrutura para SSDs NVMe...",
      author: "Roberto Lima",
      date: "2025-01-08T16:45:00Z",
      category: "updates",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min",
      featured: false,
      tags: ["SSD", "NVMe", "Performance"]
    },
    {
      id: 5,
      title: "Certificação ISO 27001: Segurança de Classe Mundial",
      excerpt: "NXHost obtém certificação internacional de segurança da informação",
      content: "Orgulhosamente anunciamos que a NXHost obteve a certificação ISO 27001...",
      author: "Maria Costa",
      date: "2025-01-05T11:20:00Z",
      category: "security",
      image: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min",
      featured: true,
      tags: ["ISO 27001", "Certificação", "Segurança"]
    },
    {
      id: 6,
      title: "Edge Computing: O Futuro da Computação Distribuída",
      excerpt: "Como o edge computing está revolucionando a entrega de conteúdo",
      content: "O edge computing representa uma mudança fundamental na forma como processamos dados...",
      author: "Pedro Oliveira",
      date: "2025-01-03T13:10:00Z",
      category: "technology",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min",
      featured: false,
      tags: ["Edge Computing", "Distribuição", "Tecnologia"]
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)
  const latestArticles = articles.slice(0, 3)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technology': return <Zap className="h-4 w-4" />
      case 'security': return <Shield className="h-4 w-4" />
      case 'updates': return <TrendingUp className="h-4 w-4" />
      case 'industry': return <Globe className="h-4 w-4" />
      default: return <Tag className="h-4 w-4" />
    }
  }

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
              Blog & Notícias
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Fique por dentro das últimas novidades em tecnologia, 
              atualizações da plataforma e insights do mercado.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artigos em Destaque</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Destaque
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(article.date), 'dd MMM yyyy', { locale: ptBR })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                        Ler mais
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Todos os Artigos' : 
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-gray-600">
              {filteredArticles.length} artigo{filteredArticles.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      {getCategoryIcon(article.category)}
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(article.date), 'dd MMM yyyy', { locale: ptBR })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Receba nossas atualizações
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8"
          >
            Assine nossa newsletter e fique por dentro das últimas novidades em tecnologia
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Assinar
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default News
