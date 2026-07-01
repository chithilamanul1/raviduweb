"use client"
import React from 'react'
import { Youtube, Instagram } from 'lucide-react'
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
export function Footer() {
  return (
    <footer className="bg-darker py-12 border-t border-white/5">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg font-serif tracking-widest text-white uppercase">
          Ravidu Jayathilake
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Ravidu Jayathilake. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center">
            Site made by seranex.lk and chithila manul +94728382638
          </p>
        </div>
        <div className="flex gap-5">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-teal-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

