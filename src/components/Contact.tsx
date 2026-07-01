"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react'
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.9 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.66-1.56.3z" />
  </svg>
)
const socials = [
  {
    Icon: Youtube,
    href: 'https://www.youtube.com/@ravindujayathilake',
    label: 'YouTube',
  },
  {
    Icon: SpotifyIcon,
    href: 'https://open.spotify.com/artist/1mBWnXPQL79wj8qNXgGhkh',
    label: 'Spotify',
  },
  {
    Icon: Instagram,
    href: 'https://www.instagram.com/ravidujayathilake',
    label: 'Instagram',
  },
]
export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-teal-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Interested in guitar lessons, booking a performance, or just want
              to say hi? Reach out by phone or email and I'll get back to you as
              soon as possible.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href="mailto:hello@ravindujayathilake.lk"
                    className="text-lg hover:text-teal-400 transition-colors"
                  >
                    hello@ravindujayathilake.lk
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a
                    href="tel:+94702291596"
                    className="text-lg hover:text-teal-400 transition-colors"
                  >
                    +94 70 229 1596
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg">Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Subject
                </label>
                <select className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors text-gray-300">
                  <option>Guitar Lessons</option>
                  <option>Booking Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

