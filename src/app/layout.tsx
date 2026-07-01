import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://raviduweb-seven.vercel.app'),
  title: {
    default: 'Ravindu Jayathilake | Professional Guitarist & Musician',
    template: '%s | Ravindu Jayathilake',
  },
  description: 'Experience the soul of music through every string. Specialized in studio sessions and expert guitar tuition in Kandy, Sri Lanka.',
  keywords: ['Ravindu Jayathilake', 'Guitarist', 'Musician', 'Guitar Classes', 'Kandy', 'Sri Lanka', 'Studio Musician'],
  authors: [{ name: 'Ravindu Jayathilake' }],
  creator: 'Ravindu Jayathilake',
  publisher: 'Ravindu Jayathilake',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ravindu Jayathilake | Professional Guitarist',
    description: 'Specialized in studio sessions and expert guitar tuition in Kandy, Sri Lanka.',
    url: 'https://raviduweb-seven.vercel.app',
    siteName: 'Ravindu Jayathilake',
    images: [
      {
        url: '/hero.png', // The transparent hero image can act as a fallback OG image
        width: 800,
        height: 600,
        alt: 'Ravindu Jayathilake',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravindu Jayathilake | Professional Guitarist',
    description: 'Experience the soul of music. Studio sessions and expert guitar tuition.',
    creator: '@ravidujayathilake', // Placeholder handle
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.tsx', // This leverages our generated Next.js icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data for powerful SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ravindu Jayathilake",
              "url": "https://raviduweb-seven.vercel.app",
              "image": "https://raviduweb-seven.vercel.app/hero.png",
              "sameAs": [
                "https://www.youtube.com/@ravindujayathilake",
                "https://open.spotify.com/artist/1mBWnXPQL79wj8qNXgGhkh",
                "https://www.instagram.com/ravidujayathilake"
              ],
              "jobTitle": "Professional Guitarist & Musician",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-dark text-gray-100 selection:bg-teal-500 selection:text-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
