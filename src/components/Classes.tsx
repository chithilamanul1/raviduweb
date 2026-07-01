"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Guitar, ArrowRight } from 'lucide-react'
export function Classes() {
  return (
    <section
      id="classes"
      className="py-32 bg-dark relative border-t border-white/5"
    >
      <div className="container mx-auto px-8 max-w-4xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase">
            Guitar Classes
          </h2>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8">
            <Guitar className="w-7 h-7 text-teal-400" />
          </div>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-sans max-w-2xl mb-4">
            I offer personalized guitar lessons for all levels — from complete
            beginners picking up the instrument for the first time to
            experienced players looking to refine their technique, theory, and
            songwriting.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed font-sans max-w-2xl mb-10">
            Lessons are tailored to your goals and pace. Reach out to talk about
            what you'd like to learn and to arrange a schedule that works for
            you.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium tracking-widest uppercase transition-all"
          >
            Contact for Classes
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

