"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="py-24 bg-darker relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-serif tracking-widest text-white uppercase mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-10">
            Subscribe to get early access to new music releases, exclusive performance tickets, and updates on guitar masterclasses.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/20 text-white px-6 py-4 rounded-full outline-none focus:border-teal-500 transition-colors placeholder:text-gray-500"
              required
              disabled={status !== 'idle'}
            />
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="absolute right-2 p-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : status === 'success' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
          
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-teal-400 text-sm mt-4 font-medium"
            >
              Thanks for subscribing! Check your inbox soon.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
