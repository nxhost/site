
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { Cloud, Server, Globe, Database, Shield, Zap } from 'lucide-react'

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vps')

  // Dados estáticos seguros - TODOS OS VALORES SÃO NÚMEROS VÁLIDOS
  const vpsPlans = [
    {
      name: "VPS Starter",
      price: 29.85,
      originalPrice: 19.90,
      description: "VPS de entrada ideal para projetos pessoais",
      features: [
        "1 vCPU Intel/AMD",
        "2GB RAM DDR4",
        "20GB SSD NVMe",
        "1 TB de transferência",
        "Painel de controle cPanel",
        "Backup automático",
        "Suporte 24/7"
      ],
      popular: false
    },
    {
      name: "VPS Basic",
      price: 59.85,
      originalPrice: 39.90,
      description: "VPS básico para sites e aplicações pequenas",
      features: [
        "2 vCPUs Intel/AMD",
        "4GB RAM DDR4",
        "50GB SSD NVMe",
        "2 TB de transferência",
        "Painel de controle cPanel",
        "SSL gratuito",
        "Backup automático",
        "Suporte 24/7"
      ],
      popular: true
    },
    {
      name: "VPS Standard",
      price: 119.85,
      originalPrice: 79.90,
      description: "VPS padrão para e-commerce e aplicações médias",
      features: [
        "4 vCPUs Intel/AMD",
        "8GB RAM DDR4",
        "100GB SSD NVMe",
        "4 TB de transferência",
        "Painel de controle cPanel",
        "SSL gratuito",
        "CDN incluído",
        "Backup premium",
        "Suporte prioritário"
      ],
      popular: false
    },
    {
      name: "VPS Advanced",
      price: 239.85,
      originalPrice: 159.90,
      description: "VPS avançado para aplicações de alto tráfego",
      features: [
        "6 vCPUs Intel/AMD",
        "16GB RAM DDR4",
        "200GB SSD NVMe",
        "8 TB de transferência",
        "Painel de controle cPanel",
        "SSL gratuito",
        "CDN premium",
        "Backup enterprise",
        "Monitoramento 24/7",
        "Suporte especializado"
      ],
      popular: false
    }
  ]

  const dedicatedPlans = [
    {
      name: "Dedicated Entry",
      price: 299.85,
      originalPrice: 199.90,
      description: "Servidor dedicado de entrada com excelente custo-benefício",
      features: [
        "Intel Xeon E-2134 (4 cores/8 threads)",
        "16GB RAM DDR4 ECC",
        "500GB SSD NVMe",
        "1 Gbps dedicado",
        "IPMI/KVM incluído",
        "Setup gratuito",
        "Suporte 24/7"
      ],
      popular: false
    },
    {
      name: "Dedicated Standard",
      price: 449.85,
      originalPrice: 299.90,
      description: "Servidor dedicado padrão com alta performance",
      features: [
        "Intel Xeon E-2234 (4 cores/8 threads)",
        "32GB RAM DDR4 ECC",
        "1TB SSD NVMe",
        "1 Gbps dedicado",
        "IPMI/KVM incluído",
        "Backup automático",
        "Suporte prioritário 24/7"
      ],
      popular: true
    },
    {
      name: "Dedicated Performance",
      price: 749.85,
      originalPrice: 499.90,
      description: "Servidor dedicado de alta performance para aplicações críticas",
      features: [
        "Intel Xeon E-2288G (8 cores/16 threads)",
        "64GB RAM DDR4 ECC",
        "2TB SSD NVMe",
        "10 Gbps dedicado",
        "IPMI/KVM incluído",
        "Backup enterprise",
        "SLA 99.9%",
        "Suporte especializado 24/7"
      ],
      popular: false
    },
    {
      name: "Dedicated Enterprise",
      price: 1349.85,
      originalPrice: 899.90,
      description: "Servidor dedicado enterprise para máxima performance",
      features: [
        "Dual Intel Xeon Gold 5218",
        "128GB RAM DDR4 ECC",
        "4TB SSD NVMe RAID 1",
        "10 Gbps dedicado",
        "IPMI/KVM incluído",
        "Backup enterprise",
        "Múltiplos IPs",
        "Gerenciamento completo",
        "SLA 99.95%"
      ],
      popular: false
    }
  ]

  const hostingPlans = [
    {
      name: "Hospedagem Starter",
      price: 14.85,
      originalPrice: 9.90,
      description: "Hospedagem básica para sites pessoais",
      features: [
        "5GB de armazenamento SSD",
        "50GB de transferência mensal",
        "1 domínio incluído",
        "5 contas de email",
        "Painel cPanel",
        "SSL gratuito",
        "Backup semanal",
        "Suporte 24/7"
      ],
      popular: false
    },
    {
      name: "Hospedagem Basic",
      price: 24.85,
      originalPrice: 16.57,
      description: "Hospedagem ideal para pequenos negócios",
      features: [
        "15GB de armazenamento SSD",
        "150GB de transferência mensal",
        "3 domínios incluídos",
        "15 contas de email",
        "Painel cPanel",
        "SSL gratuito",
        "WordPress otimizado",
        "Backup diário",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Hospedagem Business",
      price: 49.85,
      originalPrice: 33.23,
      description: "Hospedagem profissional para empresas",
      features: [
        "50GB de armazenamento SSD",
        "500GB de transferência mensal",
        "10 domínios incluídos",
        "50 contas de email",
        "Painel cPanel",
        "SSL gratuito",
        "WordPress otimizado",
        "E-commerce incluído",
        "Backup diário",
        "CDN gratuito",
        "Suporte especializado"
      ],
      popular: false
    },
    {
      name: "Hospedagem Enterprise",
      price: 99.85,
      originalPrice: 66.57,
      description: "Hospedagem enterprise para grandes projetos",
      features: [
        "100GB de armazenamento SSD",
        "Transferência ilimitada",
        "Domínios ilimitados",
        "Contas de email ilimitadas",
        "Painel cPanel avançado",
        "SSL premium",
        "WordPress gerenciado",
        "E-commerce avançado",
        "Backup em tempo real",
        "CDN premium",
        "Staging environment",
        "Suporte dedicado 24/7"
      ],
      popular: false
    }
  ]

  const tabs = [
    { id: 'vps', name: 'VPS Cloud', icon: Cloud },
    { id: 'dedicated', name: 'Dedicados', icon: Server },
    { id: 'hosting', name: 'Hospedagem', icon: Globe }
  ]

  const getCurrentPlans = () => {
    switch (activeTab) {
      case 'vps': return vpsPlans
      case 'dedicated': return dedicatedPlans
      case 'hosting': return hostingPlans
      default: return vpsPlans
    }
  }

  const currentPlans = getCurrentPlans()

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
            Planos e Preços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Soluções escaláveis com a melhor relação custo-benefício do mercado. 
            Todos os planos incluem suporte 24/7 em português.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {currentPlans.map((plan, index) => (
            <ServiceCard key={`${activeTab}-${index}`} {...plan} />
          ))}
        </motion.div>

        {/* Features Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Recursos Inclusos em Todos os Planos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Segurança Avançada</h3>
              <p className="text-gray-600">DDoS Protection, firewall configurável e monitoramento 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Garantida</h3>
              <p className="text-gray-600">SSDs NVMe, processadores Intel/AMD e rede de alta velocidade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backup Automático</h3>
              <p className="text-gray-600">Backups diários automáticos com retenção de 30 dias</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posso fazer upgrade do meu plano?
              </h3>
              <p className="text-gray-600">
                Sim! Você pode fazer upgrade a qualquer momento sem perder dados. 
                O processo é automatizado e leva apenas alguns minutos.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Há garantia de uptime?
              </h3>
              <p className="text-gray-600">
                Oferecemos SLA de 99.9% de uptime para todos os serviços. 
                Em caso de indisponibilidade, você recebe créditos proporcionais.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                O suporte é realmente 24/7?
              </h3>
              <p className="text-gray-600">
                Sim! Nossa equipe técnica está disponível 24 horas por dia, 
                7 dias por semana, incluindo feriados. Atendimento em português.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posso cancelar quando quiser?
              </h3>
              <p className="text-gray-600">
                Sim, não há fidelidade. Você pode cancelar seu serviço a qualquer momento 
                através do painel de controle ou entrando em contato conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
