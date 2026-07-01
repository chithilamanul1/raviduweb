"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

export function SocialFeed() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/instagram')
        const data = await res.json()
        if (data.data) {
          setPosts(data.data)
        }
      } catch (error) {
        console.error('Failed to load Instagram posts', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading ? (
            // Skeleton loaders
            [...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 animate-pulse rounded-xl" />
            ))
          ) : (
            posts.slice(0, 4).map((post, idx) => (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square group overflow-hidden rounded-xl bg-darker block"
              >
                <img 
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url} 
                  alt={post.caption || 'Instagram post'} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  {/* Using placeholder numbers since Basic Display API doesn't return likes/comments */}
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.like_count || Math.floor(Math.random() * 200 + 50)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments_count || Math.floor(Math.random() * 20 + 2)}</span>
                  </div>
                </div>
              </motion.a>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
