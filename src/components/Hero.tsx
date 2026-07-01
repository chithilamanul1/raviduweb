"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background gradients for depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-teal-900/10 to-dark" />
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-teal-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        
        {/* Text Content (Mobile First -> Stacks on top) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left flex-1 md:pr-8 flex flex-col items-center md:items-start"
        >
          <div className="relative inline-block mb-4 md:mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-white leading-[1.1]">
              RAVIDU
            </h1>
            <div className="absolute -bottom-6 right-0 md:-bottom-8 md:-right-8 text-4xl sm:text-5xl md:text-6xl font-cursive text-teal-400 transform -rotate-2">
              Jayathilake
            </div>
          </div>
          
          <div className="mt-12 flex items-center gap-4 opacity-80">
            <div className="hidden md:block w-12 h-px bg-white/30"></div>
            <h2 className="text-sm md:text-base font-sans tracking-[0.3em] text-gray-300 uppercase">
              Guitarist & Musician
            </h2>
          </div>
          
          <p className="mt-6 text-gray-400 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
            Experience the soul of music through every string. Specialized in live performances, studio sessions, and expert guitar tuition.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/music"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold tracking-widest uppercase rounded transition-all text-center"
            >
              Listen Now
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white text-sm font-semibold tracking-widest uppercase rounded transition-all text-center"
            >
              Book a Class
            </Link>
          </div>
        </motion.div>

        {/* Hero Image (Transparent PNG) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-sm md:max-w-lg lg:max-w-xl relative flex justify-center mt-8 md:mt-0"
        >
          {/* A subtle glowing backdrop behind the image */}
          <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-[80px] -z-10 w-3/4 mx-auto" />
          <Image
            src="/hero.png"
            alt="Ravidu Jayathilake - Professional Guitarist"
            width={600}
            height={800}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl brightness-110 contrast-110"
          />
        </motion.div>

      </div>

      {/* Scroll Down Indicator - Visible only on homepage if needed, or point to next section */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/40 md:hidden lg:block"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>
    </section>
  )
}
