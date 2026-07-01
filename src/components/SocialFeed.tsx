"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

// Placeholder mock data for the feed
const posts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=600&auto=format&fit=crop', likes: 124, comments: 12 },
  { id: 2, img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop', likes: 89, comments: 5 },
  { id: 3, img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop', likes: 231, comments: 24 },
  { id: 4, img: 'https://images.unsplash.com/photo-1460723237483-7a5d506996d9?q=80&w=600&auto=format&fit=crop', likes: 156, comments: 8 },
]

export function SocialFeed() {
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
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium tracking-widest uppercase rounded-lg transition-all"
          >
            <Instagram className="w-4 h-4 text-teal-400" />
            @ravindu_music
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square group overflow-hidden rounded-xl bg-darker"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Heart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
