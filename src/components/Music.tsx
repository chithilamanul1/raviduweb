"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const CHANNEL_URL = 'https://www.youtube.com/@ravindujayathilake'
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
    <section
      id="music"
      className="py-32 bg-darker relative border-t border-white/5"
    >
      <div className="container mx-auto px-8">
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
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase">
            Featured Videos
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous video"
            className="absolute -left-2 md:-left-12 z-20 p-2 text-white/40 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Video */}
          <motion.div
            key={current.id}
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="w-full aspect-video bg-black shadow-2xl relative z-10 border border-white/10"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${current.id}`}
              title={`${current.title} — Ravidu Jayathilake`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => go(1)}
            aria-label="Next video"
            className="absolute -right-2 md:-right-12 z-20 p-2 text-white/40 hover:text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-4 gap-3 md:gap-4">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(i)}
              aria-label={`Play ${v.title}`}
              className={`aspect-video overflow-hidden relative border transition-all ${active === i ? 'border-teal-500 opacity-100' : 'border-white/5 opacity-50 hover:opacity-90'}`}
            >
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                className="w-full h-full object-cover"
              />
              {active !== i && <div className="absolute inset-0 bg-black/40" />}
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-8 font-sans">
            {current.title} · Ravidu Jayathilake
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white/20 text-xs font-medium tracking-widest text-gray-300 hover:text-white hover:border-white/50 transition-all uppercase"
          >
            Visit YouTube Channel &gt;
          </a>
        </div>
      </div>
    </section>
  )
}

