
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { lumi } from '../lib/lumi'
import { 
  MapPin, 
  Shield, 
  Zap, 
  Globe, 
  Server,
  Thermometer,
  Lock,
  Wifi
} from 'lucide-react'

interface DataCenter {
  _id?: string
  name: string
  location: string
  country: string
  city: string
  features: string[]
  specifications: {
    power: string
    cooling: string
    security: string
    connectivity: string
  }
  certifications: string[]
  uptime: string
  active: boolean
}

const DataCenters: React.FC = () => {
  const [dataCenters, setDataCenters] = useState<DataCenter[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDataCenters = async () => {
      try {
        setLoading(true)
        const response = await lumi.entities.data_centers.list()
        
        if (response && response.list && Array.isArray(response.list)) {
          const activeDataCenters = response.list.filter(dc => dc && dc.active)
          setDataCenters(activeDataCenters)
        } else {
          console.warn('DataCenters: Resposta inválida:', response)
          setDataCenters([])
        }
      } catch (error) {
        console.error('Erro ao buscar data centers:', error)
        setDataCenters([])
      } finally {
        setLoading(false)
      }
    }

    fetchDataCenters()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Nossos Data Centers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Infraestrutura de classe mundial distribuída globalmente para garantir 
            a melhor performance e disponibilidade para seus serviços.
          </motion.p>
        </div>

        {/* Data Centers Grid */}
        {dataCenters.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {dataCenters.map((dc, index) => (
              <div
                key={dc._id || index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{dc.name}</h3>
                  <p className="text-gray-600">{dc.city}, {dc.country}</p>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <Zap className="h-4 w-4 mr-1" />
                    {dc.uptime} Uptime
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Especificações</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-600">{dc.specifications?.power || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-600">{dc.specifications?.cooling || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-red-500 mr-3" />
                      <span className="text-gray-600">{dc.specifications?.security || 'N/A'}</span>
                    </div>
                    <div className="flex items-center">
                      <Wifi className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{dc.specifications?.connectivity || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Recursos</h4>
                  <ul className="space-y-2">
                    {(dc.features || []).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Shield className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                {dc.certifications && dc.certifications.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Certificações</h4>
                    <div className="flex flex-wrap gap-2">
                      {dc.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum data center disponível no momento.</p>
          </div>
        )}

        {/* Global Infrastructure */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Infraestrutura Global
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Presença Global</h3>
              <p className="text-gray-600">Data centers estrategicamente localizados ao redor do mundo</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hardware Premium</h3>
              <p className="text-gray-600">Equipamentos de última geração com redundância total</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Máxima Segurança</h3>
              <p className="text-gray-600">Certificações internacionais e segurança física 24/7</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Padrões de Qualidade
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infraestrutura</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tier III+ com redundância N+1</li>
                <li>• Alimentação elétrica redundante</li>
                <li>• Sistema de climatização avançado</li>
                <li>• Conectividade multi-carrier</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Segurança e Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Certificação ISO 27001</li>
                <li>• Conformidade SOC 2 Type II</li>
                <li>• Acesso biométrico e CCTV 24/7</li>
                <li>• Detecção e supressão de incêndio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCenters
