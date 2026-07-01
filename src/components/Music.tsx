"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Disc3, Mic2, Music as MusicIcon } from 'lucide-react'

const CHANNEL_URL = 'https://www.youtube.com/@ravindujayathilake'

const stats = [
  { label: 'Original Tracks', value: '1', icon: Disc3 },
  { label: 'Cover Songs', value: '10+', icon: MusicIcon },
]

const videos = [
  {
    id: 'ccQZb2uYNOE',
    title: 'Original Composition',
  },
  {
    id: 'QOMjnoUldzA',
    title: 'Live Performance',
  },
  {
    id: 'BNbKY5pl7jo',
    title: 'Guitar Cover',
  },
  {
    id: 'rdsHxI-DqmI',
    title: 'Studio Session',
  },
]

export function Music() {
  const [active, setActive] = useState(0)
  const current = videos[active]

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + videos.length) % videos.length)
  }

  return (
    <section id="music" className="py-20 md:py-32 bg-darker relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header section with Stats */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 md:mb-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex-1"
          >
            <h2 className="text-2xl md:text-4xl font-serif tracking-widest text-white uppercase mb-4">
              Music & Performances
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Immerse yourself in a collection of original compositions, high-energy covers, and intricate studio sessions. My musical journey is constantly evolving, blending soulful melodies with technical precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 sm:gap-8 justify-center lg:justify-end flex-wrap"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Video Player */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center mb-8 px-4 sm:px-12">
          {/* Left Arrow */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous video"
            className="absolute left-0 z-20 p-2 text-white/40 hover:text-white hover:scale-110 transition-all bg-dark/50 rounded-full backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Main Video */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-video bg-black shadow-2xl relative z-10 border border-white/10 rounded-xl overflow-hidden"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${current.id}`}
                title={`${current.title} — Ravindu Jayathilake`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={() => go(1)}
            aria-label="Next video"
            className="absolute right-0 z-20 p-2 text-white/40 hover:text-white hover:scale-110 transition-all bg-dark/50 rounded-full backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="max-w-5xl mx-auto grid grid-cols-4 gap-2 sm:gap-4 px-4 sm:px-12">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(i)}
              aria-label={`Play ${v.title}`}
              className={`aspect-video rounded-lg overflow-hidden relative border transition-all duration-300 ${active === i ? 'border-teal-500 ring-2 ring-teal-500/50 scale-105 z-10' : 'border-white/5 opacity-50 hover:opacity-90'}`}
            >
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover"
              />
              {active !== i && <div className="absolute inset-0 bg-black/50 hover:bg-black/20 transition-colors" />}
              {active === i && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="w-8 h-8 text-white drop-shadow-md" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-gray-400 mb-8 font-sans">
            Now playing: <strong className="text-white">{current.title}</strong>
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-xs md:text-sm font-medium tracking-widest text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all uppercase rounded"
          >
            <Play className="w-4 h-4" />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  )
}
