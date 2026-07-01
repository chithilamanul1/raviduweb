"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-end overflow-hidden"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.magicpatterns.com/uploads/bGXZSTwSpWdrW4oXJ49UGr/IMG_1784.JPG.jpg"
          alt="Ravidu Jayathilake"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-8 relative z-10 flex justify-end">
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-right max-w-2xl mt-20"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight text-white leading-none">
              RAVIDU
            </h1>
            <div className="absolute -bottom-8 md:-bottom-12 right-0 text-5xl md:text-7xl lg:text-8xl font-cursive text-teal-400 transform -rotate-2">
              Jayathilake
            </div>
          </div>
          <div className="mt-16 md:mt-20 flex items-center justify-end gap-4">
            <div className="w-12 h-px bg-white/30"></div>
            <h2 className="text-sm md:text-base font-sans tracking-[0.3em] text-gray-300 uppercase">
              Guitarist
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  )
}

