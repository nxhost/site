
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Globe, CheckCircle, X } from 'lucide-react'
import toast from 'react-hot-toast'

const Domains: React.FC = () => {
  const [searchDomain, setSearchDomain] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searching, setSearching] = useState(false)

  const domainExtensions = [
    { ext: '.com.br', price: 40.00, type: 'Nacional' },
    { ext: '.net.br', price: 35.00, type: 'Nacional' },
    { ext: '.org.br', price: 35.00, type: 'Nacional' },
    { ext: '.com', price: 60.00, type: 'Internacional' },
    { ext: '.net', price: 55.00, type: 'Internacional' },
    { ext: '.org', price: 55.00, type: 'Internacional' },
    { ext: '.info', price: 45.00, type: 'Internacional' },
    { ext: '.biz', price: 50.00, type: 'Internacional' },
    { ext: '.io', price: 120.00, type: 'Internacional' },
    { ext: '.tech', price: 80.00, type: 'Internacional' }
  ]

  const handleSearch = async () => {
    if (!searchDomain.trim()) {
      toast.error('Digite um nome de domínio')
      return
    }

    setSearching(true)
    
    // Simular busca de disponibilidade
    setTimeout(() => {
      const results = domainExtensions.map(ext => ({
        domain: searchDomain + ext.ext,
        extension: ext.ext,
        price: ext.price,
        type: ext.type,
        available: Math.random() > 0.3 // 70% chance de estar disponível
      }))
      
      setSearchResults(results)
      setSearching(false)
    }, 2000)
  }

  const handleRegister = (domain: string, price: number) => {
    toast.success(`Domínio ${domain} adicionado ao carrinho - R$ ${price.toFixed(2)}/ano`)
  }

  const features = [
    {
      title: "Registro Rápido",
      description: "Registre seu domínio em poucos minutos"
    },
    {
      title: "DNS Gratuito",
      description: "Gerenciamento DNS completo incluído"
    },
    {
      title: "Proteção de Privacidade",
      description: "Seus dados pessoais protegidos"
    },
    {
      title: "Renovação Automática",
      description: "Nunca perca seu domínio por esquecimento"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Registro de Domínios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-green-100 max-w-3xl mx-auto mb-8"
            >
              Encontre e registre o domínio perfeito para seu negócio. 
              Extensões nacionais e internacionais disponíveis.
            </motion.p>

            {/* Buscar Domínio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Digite o nome do domínio"
                    value={searchDomain}
                    onChange={(e) => setSearchDomain(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={searching}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {searching ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Buscar
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resultados da Busca */}
      {searchResults.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Resultados para "{searchDomain}"
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-lg border-2 ${
                    result.available 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {result.domain}
                    </h3>
                    {result.available ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">{result.type}</span>
                    <div className="text-2xl font-bold text-gray-900">
                      R$ {result.price.toFixed(2)}<span className="text-sm font-normal">/ano</span>
                    </div>
                  </div>
                  
                  {result.available ? (
                    <button
                      onClick={() => handleRegister(result.domain, result.price)}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Registrar Agora
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed"
                    >
                      Indisponível
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extensões Populares */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Extensões Populares
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a extensão ideal para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {domainExtensions.slice(0, 10).map((ext, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">{ext.ext}</div>
                <div className="text-sm text-gray-600 mb-2">{ext.type}</div>
                <div className="text-lg font-semibold text-gray-900">
                  R$ {ext.price.toFixed(2)}<span className="text-sm font-normal">/ano</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossos domínios?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ainda não encontrou o domínio ideal?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Nossa equipe pode ajudar você a encontrar o domínio perfeito
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Falar com Especialista
          </button>
        </div>
      </section>
    </div>
  )
}

export default Domains
