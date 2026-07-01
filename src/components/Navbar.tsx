"use client"
import React, { useEffect, useState } from 'react'
import { Menu, X, Youtube, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
const links = [
  {
    name: 'HOME',
    href: '#home',
  },
  {
    name: 'ABOUT',
    href: '#about',
  },
  {
    name: 'MUSIC',
    href: '#music',
  },
  {
    name: 'CLASSES',
    href: '#classes',
  },
  {
    name: 'CONTACT',
    href: '#contact',
  },
]
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase"
        >
          RAVIDU JAYATHILAKE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 hover:text-white tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

