"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function FeaturedVideo() {
  return (
    <section className="py-24 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif tracking-widest text-white uppercase mb-4"
          >
            Featured Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Watch the latest studio session. Experience the intricate fingerstyle arrangements and raw emotion behind every note.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Using one of the existing video IDs from the Music page */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/ccQZb2uYNOE`}
              title="Featured Video — Ravindu Jayathilake"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
