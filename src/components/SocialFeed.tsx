"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

export function SocialFeed() {
  const posts = [
    "https://www.instagram.com/p/DY2DHgxu5Z2/embed",
    "https://www.instagram.com/p/DZF7flhzjRd/embed",
    "https://www.instagram.com/p/DZxC_wqu8zw/embed",
    "https://www.instagram.com/p/DX4hzFOuY6M/embed",
  ]

  return (
    <section className="py-24 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-white uppercase mb-2">
              Follow the Journey
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Behind the scenes, studio updates, and live snippets.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/ravindu_jayathilake_/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium tracking-widest uppercase rounded-lg transition-all"
          >
            <Instagram className="w-4 h-4 text-teal-400" />
            @ravindu_jayathilake_
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((url, idx) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="w-full h-[400px] overflow-hidden rounded-xl bg-white"
            >
              <iframe
                src={url}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
