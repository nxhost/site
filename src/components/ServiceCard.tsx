
import React from 'react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  name: string
  price: string | number
  originalPrice?: string | number
  features: string[]
  popular?: boolean
  description?: string
  badge?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  price,
  originalPrice,
  features,
  popular = false,
  description,
  badge
}) => {
  const handlePurchase = () => {
    window.open('https://nxhost.com.br/cliente/store/hospedagem-de-sites', '_blank')
  }

  // Função de formatação segura SEM toFixed()
  const formatPrice = (priceValue: string | number | undefined | null): string => {
    // Verificações robustas
    if (priceValue === undefined || priceValue === null) {
      console.warn('ServiceCard: Preço undefined/null:', { name, priceValue })
      return '0,00'
    }
    
    let numValue: number
    
    if (typeof priceValue === 'string') {
      // Limpar string e converter
      const cleanValue = priceValue.replace(/[^\d.,]/g, '').replace(',', '.')
      numValue = parseFloat(cleanValue)
      if (isNaN(numValue)) {
        console.warn('ServiceCard: String inválida:', { name, priceValue, cleanValue })
        return '0,00'
      }
    } else if (typeof priceValue === 'number') {
      if (isNaN(priceValue) || !isFinite(priceValue)) {
        console.warn('ServiceCard: Número inválido:', { name, priceValue })
        return '0,00'
      }
      numValue = priceValue
    } else {
      console.warn('ServiceCard: Tipo não suportado:', { name, priceValue, type: typeof priceValue })
      return '0,00'
    }
    
    // Formatação manual SEM toFixed()
    const integerPart = Math.floor(numValue)
    const decimalPart = Math.round((numValue - integerPart) * 100)
    
    return `${integerPart},${decimalPart.toString().padStart(2, '0')}`
  }

  // Verificar se features é array válido
  const safeFeatures = Array.isArray(features) ? features : []
  const safeName = name || 'Plano sem nome'

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 relative border-2 transition-all duration-300 hover:shadow-xl ${
      popular 
        ? 'border-cyan-500 transform scale-105' 
        : 'border-gray-100 hover:border-blue-200'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Mais Popular
          </span>
        </div>
      )}

      {badge && !popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{safeName}</h3>
        
        {description && (
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
        )}
        
        <div className="mb-6">
          <div className="flex items-center justify-center mb-2">
            <span className="text-4xl font-bold text-gray-900">R$ {formatPrice(price)}</span>
            <span className="text-gray-600 ml-1">/mês</span>
          </div>
          {originalPrice !== undefined && originalPrice !== null && (
            <div className="text-sm text-gray-500">
              <span className="line-through">R$ {formatPrice(originalPrice)}</span>
              <span className="text-green-600 font-semibold ml-2">Economia de 50%</span>
            </div>
          )}
        </div>
        
        <ul className="space-y-3 mb-8 text-left">
          {safeFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-600">{feature || 'Recurso não especificado'}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={handlePurchase}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center ${
            popular
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Assinar Plano
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
