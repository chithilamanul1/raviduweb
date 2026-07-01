import { Hero } from '../components/Hero'
import { FeaturedVideo } from '../components/FeaturedVideo'
import { Testimonials } from '../components/Testimonials'
import { SocialFeed } from '../components/SocialFeed'
import { Newsletter } from '../components/Newsletter'

export const metadata = {
  title: 'Ravindu Jayathilake - Home',
  description: 'Experience the soul of music. Specialized in live performances, studio sessions, and expert guitar tuition.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedVideo />
      <Testimonials />
      <SocialFeed />
      <Newsletter />
    </>
  )
}
