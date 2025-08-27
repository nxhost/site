
import { useState, useCallback } from 'react'
import { lumi } from '../lib/lumi'
import toast from 'react-hot-toast'

export const useServices = () => {
  const [loading, setLoading] = useState(false)

  const createServiceOrder = useCallback(async (orderData: any) => {
    setLoading(true)
    try {
      const newOrder = await lumi.entities.service_orders.create({
        ...orderData,
        createdAt: new Date().toISOString()
      })
      toast.success('Pedido criado com sucesso!')
      return newOrder
    } catch (error: any) {
      console.error('Failed to create service order:', error)
      toast.error('Erro ao criar pedido')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const getUserServices = useCallback(async (userId: string) => {
    setLoading(true)
    try {
      const { list } = await lumi.entities.service_orders.list()
      return list.filter((order: any) => order.userId === userId)
    } catch (error: any) {
      console.error('Failed to fetch user services:', error)
      toast.error('Erro ao carregar serviços')
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  const createSupportTicket = useCallback(async (ticketData: any) => {
    setLoading(true)
    try {
      const newTicket = await lumi.entities.support_tickets.create({
        ...ticketData,
        ticketId: `TKT-${Date.now()}`,
        status: 'aberto',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      toast.success('Ticket criado com sucesso!')
      return newTicket
    } catch (error: any) {
      console.error('Failed to create support ticket:', error)
      toast.error('Erro ao criar ticket')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    createServiceOrder,
    getUserServices,
    createSupportTicket
  }
}
