
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Shield, 
  CheckCircle, 
  Zap,
  Database,
  Cloud,
  Settings
} from 'lucide-react'
import toast from 'react-hot-toast'

interface DedicatedServer {
  id: string
  name: string
  price: number
  setupFee: number
  cpu: string
  ram: string
  storage: string
  bandwidth: string
  description: string
  popular: boolean
  features: string[]
}

const DedicatedServers: React.FC = () => {
  const [selectedServer, setSelectedServer] = useState<DedicatedServer | null>(null)
  const [customConfig, setCustomConfig] = useState({
    cpu: '',
    ram: '',
    storage: '',
    bandwidth: '',
    os: '',
    additionalServices: [] as string[]
  })

  const servers: DedicatedServer[] = [
    {
      id: 'ded-basic',
      name: 'Servidor Básico',
      price: 299.90,
      setupFee: 99.00,
      cpu: 'Intel Xeon E3-1230v6 (4 cores, 8 threads)',
      ram: '16GB DDR4 ECC',
      storage: '1TB SSD NVMe',
      bandwidth: '10TB/mês - 1Gbps',
      description: 'Ideal para aplicações web e pequenos bancos de dados',
      popular: false,
      features: [
        'IPv4 dedicado',
        'Acesso IPMI/KVM',
        'Backup semanal',
        'Monitoramento 24/7',
        'Suporte técnico'
      ]
    },
    {
      id: 'ded-business',
      name: 'Servidor Business',
      price: 499.90,
      setupFee: 149.00,
      cpu: 'Intel Xeon Silver 4214 (12 cores, 24 threads)',
      ram: '32GB DDR4 ECC',
      storage: '2TB SSD NVMe',
      bandwidth: '20TB/mês - 1Gbps',
      description: 'Perfeito para aplicações críticas e alta demanda',
      popular: true,
      features: [
        'IPv4 + IPv6 dedicados',
        'Acesso IPMI/KVM',
        'Backup diário',
        'Monitoramento avançado',
        'Suporte prioritário',
        'Firewall dedicado'
      ]
    },
    {
      id: 'ded-enterprise',
      name: 'Servidor Enterprise',
      price: 899.90,
      setupFee: 199.00,
      cpu: 'Intel Xeon Gold 6248R (24 cores, 48 threads)',
      ram: '64GB DDR4 ECC',
      storage: '4TB SSD NVMe RAID',
      bandwidth: 'Ilimitado - 10Gbps',
      description: 'Máxima performance para grandes aplicações',
      popular: false,
      features: [
        'Múltiplos IPs dedicados',
        'Acesso IPMI/KVM avançado',
        'Backup em tempo real',
        'Monitoramento personalizado',
        'Suporte dedicado 24/7',
        'Firewall enterprise',
        'Load balancer incluído'
      ]
    }
  ]

  const additionalServices = [
    { id: 'backup-premium', name: 'Backup Premium (tempo real)', price: 99.90 },
    { id: 'monitoring', name: 'Monitoramento Avançado', price: 49.90 },
    { id: 'security', name: 'Pacote Segurança Extra', price: 79.90 },
    { id: 'support', name: 'Suporte Dedicado 24/7', price: 199.90 },
    { id: 'migration', name: 'Migração Assistida', price: 299.00 }
  ]

  const operatingSystems = [
    'Ubuntu Server 22.04 LTS',
    'CentOS Stream 9',
    'Debian 11',
    'Rocky Linux 9',
    'AlmaLinux 9',
    'Windows Server 2022 Standard',
    'Windows Server 2022 Datacenter',
    'VMware vSphere',
    'Proxmox VE'
  ]

  const handleServerSelect = (server: DedicatedServer) => {
    setSelectedServer(server)
    toast.success(`Servidor ${server.name} selecionado!`)
  }

  const handleServiceToggle = (serviceId: string) => {
    setCustomConfig(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }))
  }

  const calculateTotal = () => {
    if (!selectedServer) return 0
    
    const servicesCost = customConfig.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId)
      return total + (service ? service.price : 0)
    }, 0)
    
    return selectedServer.price + servicesCost
  }

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Processadores Intel Xeon",
      description: "CPUs enterprise de última geração para máxima performance"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Memória ECC",
      description: "RAM com correção de erro para máxima confiabilidade"
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "SSD NVMe Enterprise",
      description: "Armazenamento ultrarrápido com alta durabilidade"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Conectividade Premium",
      description: "Rede redundante com múltiplos provedores"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança Avançada",
      description: "Proteção DDoS e firewall dedicado incluídos"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Acesso IPMI/KVM",
      description: "Controle remoto completo do hardware"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Servidores Dedicados Enterprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Hardware dedicado de alta performance para aplicações críticas. 
              Controle total, máxima segurança e performance garantida.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tecnologia Enterprise
            </h2>
            <p className="text-xl text-gray-600">
              Hardware de datacenter com certificações internacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servidores Disponíveis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Configurações Disponíveis
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a configuração ideal ou solicite customização
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servers.map((server, index) => (
              <motion.div
                key={server.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  server.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                } ${selectedServer?.id === server.id ? 'ring-2 ring-green-500' : ''}`}
              >
                {server.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Vendido
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{server.name}</h3>
                  <p className="text-gray-600 mb-6">{server.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      R$ {server.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">
                      /mês + R$ {server.setupFee.toFixed(2)} setup
                    </div>
                  </div>

                  {/* Especificações */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="border-b border-gray-200 pb-2">
                      <strong>CPU:</strong> {server.cpu}
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <strong>RAM:</strong> {server.ram}
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <strong>Storage:</strong> {server.storage}
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <strong>Bandwidth:</strong> {server.bandwidth}
                    </div>
                  </div>

                  {/* Recursos incluídos */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Incluído:</h4>
                    <ul className="space-y-2">
                      {server.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleServerSelect(server)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      selectedServer?.id === server.id
                        ? 'bg-green-600 text-white'
                        : server.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedServer?.id === server.id ? 'Selecionado' : 'Selecionar Servidor'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuração Personalizada */}
      {selectedServer && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Personalize seu Servidor
              </h2>
              <p className="text-xl text-gray-600">
                Servidor selecionado: <span className="font-semibold">{selectedServer.name}</span>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sistema Operacional */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Sistema Operacional
                  </h3>
                  <select
                    value={customConfig.os}
                    onChange={(e) => setCustomConfig(prev => ({ ...prev, os: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione o SO</option>
                    {operatingSystems.map((os, index) => (
                      <option key={index} value={os}>{os}</option>
                    ))}
                  </select>
                </div>

                {/* Serviços Adicionais */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Serviços Adicionais
                  </h3>
                  <div className="space-y-3">
                    {additionalServices.map((service) => (
                      <label key={service.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={customConfig.additionalServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="flex-1">{service.name}</span>
                        <span className="font-semibold">+R$ {service.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resumo do Pedido */}
              <div className="mt-8 p-6 bg-white rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Resumo do Pedido
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Servidor {selectedServer.name}:</span>
                    <span>R$ {selectedServer.price.toFixed(2)}/mês</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de setup:</span>
                    <span>R$ {selectedServer.setupFee.toFixed(2)}</span>
                  </div>
                  {customConfig.additionalServices.map(serviceId => {
                    const service = additionalServices.find(s => s.id === serviceId)
                    return service ? (
                      <div key={serviceId} className="flex justify-between">
                        <span>{service.name}:</span>
                        <span>+R$ {service.price.toFixed(2)}/mês</span>
                      </div>
                    ) : null
                  })}
                  <hr className="my-3" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total mensal:</span>
                    <span>R$ {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contratar Servidor Dedicado
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Garantias */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossas Garantias Enterprise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">99.9% Uptime SLA</h3>
              <p className="text-gray-300">Garantia contratual de disponibilidade com compensação</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança Certificada</h3>
              <p className="text-gray-300">Datacenter com certificações ISO 27001 e SOC 2</p>
            </div>
            <div className="text-center">
              <Cloud className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-gray-300">Equipe dedicada de engenheiros 24/7/365</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DedicatedServers
