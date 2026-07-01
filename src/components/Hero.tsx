"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Play, Music, Star, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-dark">
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent whitespace-nowrap"
        >
          GUITARIST
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-7xl h-full">
        
        {/* Left Content (Text & CTA) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-widest uppercase">Available for Booking</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-bold tracking-tight text-white leading-[1.1] mb-4">
            RAVIDU
            <span className="block text-teal-400 font-cursive text-4xl sm:text-5xl lg:text-6xl xl:text-7xl transform -rotate-2 mt-2">
              Jayathilake
            </span>
          </h1>
          
          <p className="mt-6 text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
            Experience the soul of music through every string. Specialized in live performances, studio sessions, and expert guitar tuition.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/music"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold tracking-widest uppercase rounded-lg transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Listen Now
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white text-sm font-semibold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center"
            >
              Book a Class
            </Link>
          </div>
        </motion.div>

        {/* Center/Right Content (Hero Image & Floating Cards) */}
        <div className="flex-1 relative w-full flex justify-center items-end h-full min-h-[500px] lg:min-h-[700px] mt-12 lg:mt-0 z-10">
          
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 w-[80%] sm:w-[60%] lg:w-full max-w-lg"
          >
            <Image
              src="/hero.png"
              alt="Ravidu Jayathilake"
              width={800}
              height={1000}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl brightness-110 contrast-105"
            />
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/4 -left-4 sm:left-4 lg:-left-12 z-20 bg-dark/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
              <Music className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">5+ Years</div>
              <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Experienced Guitar Teacher</div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 sm:bottom-1/4 -right-2 sm:right-4 lg:-right-8 z-20 bg-dark/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 scale-90 sm:scale-100 origin-bottom-right"
          >
            <div className="flex text-teal-400 gap-1">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div className="text-white font-medium text-sm">Top Rated<br/>Instructor</div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hidden lg:block"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
