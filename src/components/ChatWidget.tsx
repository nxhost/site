
import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Simulate sending message
    toast.success('Mensagem enviada! Nossa equipe responderá em breve.')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Suporte TechConsult</h3>
              <p className="text-blue-100 text-sm">Estamos online!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mb-2">
                <p className="text-sm text-gray-700">
                  Olá! Como podemos ajudá-lo hoje? Nossa equipe de especialistas está pronta para responder suas dúvidas sobre nossos serviços.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendMessage}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-2">
              Tempo de resposta médio: 5 minutos
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}

export default ChatWidget
