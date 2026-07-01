"use client"
import React from 'react'
import { motion } from 'framer-motion'
export function About() {
  return (
    <section
      id="about"
      className="py-32 bg-dark relative border-t border-white/5"
    >
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content (Left) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase mb-8">
              About Ravidu
            </h2>
            <blockquote className="text-lg md:text-xl text-gray-300 italic font-serif mb-8 leading-relaxed">
              "Music is more than just notes on a page; it's an expression of
              the soul. Every string plucked tells a story."
            </blockquote>
            <p className="text-sm text-gray-500 leading-loose mb-10 font-sans">
              As a dedicated guitarist and musician, I've spent years honing my
              craft, performing, and writing original music. My journey has led
              me to not only create but also to share the joy of music through
              teaching. Whether on stage or in the studio, my goal is to connect
              with people through the universal language of melody and rhythm.
            </p>
            <div className="text-3xl font-cursive text-white/80 transform -rotate-3 inline-block">
              Ravidu Jayathilake
            </div>
          </motion.div>

          {/* Image (Right) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden relative border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://cdn.magicpatterns.com/uploads/bGXZSTwSpWdrW4oXJ49UGr/IMG_1784.JPG.jpg"
                alt="Ravidu Playing"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

