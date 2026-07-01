"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content (Left on Desktop, Bottom on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest text-white uppercase mb-6 md:mb-8">
              About Ravidu
            </h2>
            <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-300 italic font-serif mb-6 md:mb-8 leading-relaxed border-l-2 border-teal-500 pl-4 md:pl-6 text-left">
              "Music is more than just notes on a page; it's an expression of the soul. Every string plucked tells a story, and every chord progression is a journey."
            </blockquote>
            
            <div className="space-y-4 text-sm md:text-base text-gray-400 leading-relaxed text-justify md:text-left mb-8 md:mb-10 font-sans">
              <p>
                Based in the cultural heart of Kandy, Sri Lanka, I am a dedicated professional guitarist, composer, and music educator. My journey with the guitar began over a decade ago, evolving from a passionate hobby into a lifelong pursuit of musical excellence.
              </p>
              <p>
                Throughout my career, I've had the privilege of performing at various prestigious venues, collaborating with renowned local artists, and participating in intensive studio recording sessions. My style blends contemporary acoustic techniques with classical foundations, allowing for a versatile and deeply emotive sound.
              </p>
              <p>
                Beyond performing, my true calling lies in music education. I believe that anyone can unlock their musical potential with the right guidance. Whether you are picking up a guitar for the very first time or looking to master advanced fingerstyle techniques, my personalized classes are designed to inspire and challenge you.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="text-3xl md:text-4xl font-cursive text-teal-400 transform -rotate-3 mb-4 sm:mb-0">
                Ravidu Jayathilake
              </div>
            </div>
          </motion.div>

          {/* Image (Right on Desktop, Top on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm md:max-w-none relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl border border-white/10 group">
              <img
                src="https://cdn.magicpatterns.com/uploads/bGXZSTwSpWdrW4oXJ49UGr/IMG_1784.JPG.jpg"
                alt="Ravidu Performing Live"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-80" />
            </div>
            
            {/* Floating Info Box for extra detail */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-dark border border-teal-500/30 p-4 md:p-6 rounded-xl shadow-xl backdrop-blur-md"
            >
              <div className="text-teal-400 font-bold text-xl md:text-2xl">10+</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
