
import React, { useState } from 'react'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todas as Notícias' },
    { id: 'transformacao-digital', name: 'Transformação Digital' },
    { id: 'inteligencia-artificial', name: 'Inteligência Artificial' },
    { id: 'cloud-computing', name: 'Cloud Computing' },
    { id: 'seguranca', name: 'Segurança' },
    { id: 'inovacao', name: 'Inovação' },
    { id: 'empresa', name: 'Empresa' }
  ]

  const articles = [
    {
      id: 1,
      title: "O Futuro da Inteligência Artificial nas Empresas Brasileiras",
      excerpt: "Como a IA está revolucionando os negócios e criando novas oportunidades de crescimento no mercado nacional.",
      content: "A inteligência artificial não é mais uma tecnologia do futuro - é uma realidade presente que está transformando empresas em todo o Brasil...",
      category: "inteligencia-artificial",
      author: "Dr. Ricardo Mendes",
      date: "2025-01-15",
      readTime: "8 min",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600",
      featured: true
    },
    {
      id: 2,
      title: "Migração para Cloud: Guia Completo para Empresas",
      excerpt: "Estratégias essenciais para uma migração segura e eficiente para a nuvem, minimizando riscos e maximizando benefícios.",
      content: "A migração para cloud computing representa uma das decisões mais estratégicas que uma empresa pode tomar hoje...",
      category: "cloud-computing",
      author: "Dra. Mariana Santos",
      date: "2025-01-12",
      readTime: "12 min",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=600",
      featured: false
    },
    {
      id: 3,
      title: "TechConsult Pro Conquista Certificação ISO 27001:2022",
      excerpt: "Nossa empresa obteve a mais recente certificação em segurança da informação, reforçando nosso compromisso com a excelência.",
      content: "Estamos orgulhosos de anunciar que a TechConsult Pro conquistou a certificação ISO 27001:2022...",
      category: "empresa",
      author: "Equipe TechConsult",
      date: "2025-01-10",
      readTime: "5 min",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?w=600",
      featured: false
    },
    {
      id: 4,
      title: "Cibersegurança em 2025: Principais Ameaças e Defesas",
      excerpt: "Análise das tendências de segurança cibernética para 2025 e como as empresas podem se proteger contra novas ameaças.",
      content: "O panorama de cibersegurança continua evoluindo rapidamente, com novas ameaças surgindo constantemente...",
      category: "seguranca",
      author: "Carlos Oliveira",
      date: "2025-01-08",
      readTime: "10 min",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=600",
      featured: false
    },
    {
      id: 5,
      title: "Transformação Digital: Cases de Sucesso no Varejo",
      excerpt: "Como empresas do varejo brasileiro estão utilizando tecnologia para revolucionar a experiência do cliente.",
      content: "O setor varejista brasileiro passou por uma transformação acelerada nos últimos anos...",
      category: "transformacao-digital",
      author: "Ana Paula Costa",
      date: "2025-01-05",
      readTime: "7 min",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=600",
      featured: false
    },
    {
      id: 6,
      title: "Inovação Tecnológica: Tendências para 2025",
      excerpt: "Principais tecnologias emergentes que moldarão o futuro dos negócios no próximo ano.",
      content: "À medida que avançamos em 2025, várias tecnologias emergentes prometem revolucionar a forma como fazemos negócios...",
      category: "inovacao",
      author: "Dr. Ricardo Mendes",
      date: "2025-01-03",
      readTime: "9 min",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600",
      featured: false
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles.find(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Notícias e Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências tecnológicas e novidades da TechConsult Pro
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && !searchTerm && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === featuredArticle.category)?.name}
                    </span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString('pt-BR')}
                    </div>
                    <span>{featuredArticle.readTime} de leitura</span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User size={16} className="mr-2 text-gray-400" />
                      <span className="text-gray-600">{featuredArticle.author}</span>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      Ler Artigo
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum artigo encontrado para os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Ler Mais
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Receba Nossos Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Assine nossa newsletter e seja o primeiro a saber sobre tendências tecnológicas e novidades da empresa
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email profissional"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Assinar
            </button>
          </form>
          
          <p className="text-blue-100 text-sm mt-4">
            Enviamos apenas conteúdo relevante. Sem spam.
          </p>
        </div>
      </section>
    </div>
  )
}

export default News
