"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Alex Silva",
    role: "Beginner Student",
    text: "Ravindu is incredibly patient and inspiring. I went from never holding a guitar to playing my favorite songs in just a few months. Highly recommended!",
  },
  {
    name: "Sarah Jenkins",
    role: "Intermediate Guitarist",
    text: "I was stuck in a rut with my playing until I started taking classes here. Ravindu's approach to music theory and fingerstyle completely opened up my creativity.",
  },
  {
    name: "Michael Chen",
    role: "Advanced Player",
    text: "An absolute master of the craft. The lessons on advanced lead phrasing and tone building were exactly what I needed to take my live performances to the next level.",
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-darker relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif tracking-widest text-white uppercase mb-4"
          >
            Student Stories
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-teal-400 text-teal-400" />
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors group"
            >
              <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6 group-hover:text-teal-500/40 transition-colors" />
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed font-serif text-lg">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold font-sans">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <span className="text-teal-400 text-xs font-medium uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
