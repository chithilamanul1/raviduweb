"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Guitar, ArrowRight, Music2, Headphones, Activity } from 'lucide-react'
import Link from 'next/link'

const classTypes = [
  {
    title: 'Acoustic Foundations',
    description: 'Master the basics of chords, strumming patterns, and fingerpicking on the acoustic guitar.',
    icon: Guitar
  },
  {
    title: 'Electric & Lead',
    description: 'Dive into scales, modes, bending, and phrasing to build your own signature lead tone.',
    icon: Activity
  },
  {
    title: 'Fingerstyle Mastery',
    description: 'Learn intricate fingerstyle techniques, percussive elements, and complex harmonic arrangements.',
    icon: Headphones
  },
  {
    title: 'Music Theory & Composition',
    description: 'Understand the language of music. Learn to read, write, and arrange your own compositions.',
    icon: Music2
  }
]

export function Classes() {
  return (
    <section id="classes" className="py-20 md:py-32 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-serif tracking-widest text-white uppercase mb-4">
            Guitar Classes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Personalized lessons tailored to your unique musical goals. Whether you are picking up a guitar for the very first time or refining advanced techniques, there is a class for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {classTypes.map((cls, idx) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center mb-6 border border-white/10 group-hover:border-teal-500/50 transition-colors">
                <cls.icon className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-4">{cls.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center bg-gradient-to-b from-teal-900/20 to-transparent p-8 md:p-12 rounded-3xl border border-teal-500/20"
        >
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans max-w-2xl mb-8">
            Lessons are conducted in my studio in Kandy or online via high-quality video calls. Let's discuss your current skill level and arrange a schedule that works for you.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium tracking-widest uppercase rounded transition-all shadow-lg shadow-teal-500/25"
          >
            Contact for Classes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
